import { Option, Some } from "@sniptt/monads";

/**
 * Converts an option to an undefined. Necessary for API requests.
 */
export function toUndefined<T>(opt: Option<T>) {
  return opt.isSome() ? opt.unwrap() : undefined;
}

/**
 * Converts a null value to an option.
 */
export function toOption<T>(val: T): Option<T> {
  return Some(val || undefined);
}

/**
 * Replace occurrences of the type Option<R> with R | undefined recursively
 */
export type UnwrapOptions<T> = T extends Option<infer U>
  ? UnwrapOptions<U> | undefined
  : T extends readonly any[]
  ? { [K in keyof T]: UnwrapOptions<T[K]> }
  : T extends object
  ? {
      [K in keyof T as Option<any> extends T[K] ? never : K]: UnwrapOptions<
        T[K]
      >;
    } & {
      [K in keyof T as Option<any> extends T[K] ? K : never]?: UnwrapOptions<
        T[K]
      >;
    } extends infer U
    ? { [K in keyof U]: U[K] }
    : never
  : T;
