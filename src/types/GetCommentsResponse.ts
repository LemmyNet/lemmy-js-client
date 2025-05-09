// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentView } from "./CommentView";
import type { PaginationCursor } from "./PaginationCursor";

/**
 * The comment list response.
 */
export type GetCommentsResponse = {
  comments: Array<CommentView>;
  next_page?: PaginationCursor;
  prev_page?: PaginationCursor;
};
