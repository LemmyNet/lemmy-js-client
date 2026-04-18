import { LemmyHttp } from "../http";

const UNMAPPED_KEYS = [
  "upload",
  "uploadWithQuery",
  "wrapper",
  "setHeaders",
  "setStatus",
  "getStatus",
  "setHeader",
  "getHeader",
  "getHeaders",
] as const;

const unmappedSet = new Set<keyof LemmyHttp>(UNMAPPED_KEYS);

type UnmappedKey = (typeof UNMAPPED_KEYS)[number];

type VoidKey = {
  [K in keyof LemmyHttp]: LemmyHttp[K] extends CallableFunction
    ? LemmyHttp[K] extends () => void | undefined
      ? K
      : LemmyHttp[K] extends () => Promise<void | undefined>
        ? K
        : never
    : never;
}[keyof LemmyHttp];

// Assert that all void functions are included in UNMAPPED_KEYS
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
(voidKey: VoidKey) => {
  return { unmappedKey: voidKey } as {
    unmappedKey: UnmappedKey;
  };
};

export type ApiKey = {
  [K in keyof LemmyHttp]: LemmyHttp[K] extends CallableFunction
    ? K extends UnmappedKey
      ? never // unmapped
      : K
    : never; // property
}[keyof LemmyHttp];

type ApiMap = {
  [K in ApiKey]: (
    this: void,
    result?: Awaited<ReturnType<LemmyHttp[K]>>,
    error?: Error,
  ) => unknown;
};

type MapFn<Map extends ApiMap> = {
  [K in keyof ApiMap]: Map[K];
}[keyof ApiMap];

export type WrappedLemmyHttp<Map extends ApiMap> = {
  client: LemmyHttp;
  mapFn: MapFn<Map>;
  new (client: LemmyHttp, mapFn: MapFn<Map>): WrappedLemmyHttp<Map>;
} & {
  readonly [K in keyof LemmyHttp]: K extends keyof ApiMap
    ? (...args: Parameters<LemmyHttp[K]>) => Promise<ReturnType<Map[K]>>
    : // unmapped or property
      LemmyHttp[K];
};

const handler: ProxyHandler<WrappedLemmyHttp<ApiMap>> = {
  get(target: WrappedLemmyHttp<ApiMap>, p: keyof LemmyHttp) {
    const value = target.client[p];
    if (typeof value !== "function") {
      return value;
    }

    const func: LemmyHttp[UnmappedKey | ApiKey] = value;

    if (unmappedSet.has(p)) {
      return (...args: unknown[]) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any
        return func.apply<any, any[], any>(target.client, args);
      };
    }

    return async (...args: unknown[]) => {
      try {
        return target.mapFn(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
          await func.apply<any, any[], any>(target.client, args),
        );
      } catch (err) {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        const error = err instanceof Error ? err : new Error("" + err);
        return target.mapFn(undefined, error);
      }
    };
  },
};

function WrappedLemmyHttpImpl<Map extends ApiMap>(
  this: WrappedLemmyHttp<Map>,
  client: LemmyHttp,
  mapFn: MapFn<Map>,
) {
  this.client = client;
  this.mapFn = mapFn;
  return new Proxy(this, handler);
}

export function wrapLemmyClient<Map extends ApiMap>(
  client: LemmyHttp,
  mapFn: MapFn<Map>,
) {
  return new (WrappedLemmyHttpImpl as unknown as WrappedLemmyHttp<Map>)(
    client,
    mapFn,
  );
}
