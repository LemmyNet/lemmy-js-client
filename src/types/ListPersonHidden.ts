// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { PaginationCursor } from "./PaginationCursor";

/**
 * Gets your hidden posts.
 */
export type ListPersonHidden = {
  page_cursor?: PaginationCursor;
  page_back?: boolean;
  limit?: number;
};
