import { Option } from "@sniptt/monads";

/**
 * Converts an option to an undefined. Necessary for API requests.
 */
export function toUndefined<T>(opt: Option<T>) {
  return opt.isSome() ? opt.unwrap() : undefined;
}
