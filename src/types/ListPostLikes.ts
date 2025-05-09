// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { PaginationCursor } from "./PaginationCursor";
import type { PostId } from "./PostId";

/**
 * List post likes. Admins-only.
 */
export type ListPostLikes = {
  post_id: PostId;
  page_cursor?: PaginationCursor;
  page_back?: boolean;
  limit?: number;
};
