// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { PaginationCursor } from "./PaginationCursor";

/**
 * Fetches a list of taglines.
 */
export type ListTaglines = {
  page_cursor?: PaginationCursor;
  page_back?: boolean;
  limit?: number;
};
