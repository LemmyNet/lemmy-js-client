// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentId } from "./CommentId";
import type { CommentSortType } from "./CommentSortType";
import type { CommunityId } from "./CommunityId";
import type { ListingType } from "./ListingType";
import type { PaginationCursor } from "./PaginationCursor";
import type { PostId } from "./PostId";

/**
 * Get a list of comments.
 */
export type GetComments = {
  type_?: ListingType;
  sort?: CommentSortType;
  /**
   * Filter to within a given time range, in seconds.
   * IE 60 would give results for the past minute.
   */
  time_range_seconds?: number;
  max_depth?: number;
  page_cursor?: PaginationCursor;
  page_back?: boolean;
  limit?: number;
  community_id?: CommunityId;
  community_name?: string;
  post_id?: PostId;
  parent_id?: CommentId;
};
