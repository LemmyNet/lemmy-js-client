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
