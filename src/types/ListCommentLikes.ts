// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentId } from "./CommentId";
import type { PaginationCursor } from "./PaginationCursor";

/**
 * List comment likes. Admins-only.
 */
export type ListCommentLikes = {
  comment_id: CommentId;
  page_cursor?: PaginationCursor;
  page_back?: boolean;
  limit?: number;
};
