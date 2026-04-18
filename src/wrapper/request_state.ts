import { LemmyHttp } from "../http";
import { ApiKey, wrapLemmyClient } from "./wrapper";

export const EMPTY_REQUEST = { state: "empty" } as const;
export type EmptyRequestState = typeof EMPTY_REQUEST;

export const LOADING_REQUEST = { state: "loading" } as const;
export type LoadingRequestState = typeof LOADING_REQUEST;

export type FailedRequestState = { state: "failed"; err: Error };

export type SuccessRequestState<T> = { state: "success"; data: T };

/**
 * Shows the state of an API request.
 *
 * Can be empty, loading, failed, or success
 */
export type RequestState<T> =
  | EmptyRequestState
  | LoadingRequestState
  | FailedRequestState
  | SuccessRequestState<T>;

function mapToRequestState<ResultT>(
  result?: ResultT,
  error?: Error,
): RequestState<ResultT> {
  if (error) {
    return { state: "failed", err: error };
  }
  if (result !== undefined) {
    return { state: "success", data: result };
  }
  return { state: "empty" };
}

type RequestStateApi = {
  [K in ApiKey]: typeof mapToRequestState<Awaited<ReturnType<LemmyHttp[K]>>>;
};

export function wrapClient(client: LemmyHttp) {
  return wrapLemmyClient<RequestStateApi>(client, mapToRequestState);
}

export type WrappedLemmyHttp = ReturnType<typeof wrapClient>;
