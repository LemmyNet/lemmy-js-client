// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { PersonContentType } from "./PersonContentType";
import type { PersonSavedCombinedPaginationCursor } from "./PersonSavedCombinedPaginationCursor";

/**
 * Gets your saved posts and comments
 */
export type ListPersonSaved = {
  type_?: PersonContentType;
  page_cursor?: PersonSavedCombinedPaginationCursor;
  page_back?: boolean;
};
