// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";
import type { ListingType } from "./ListingType";
import type { PostPaginationCursor } from "./PostPaginationCursor";
import type { PostSortType } from "./PostSortType";

/**
 * Get a list of posts.
 */
export type GetPosts = {
  type_?: ListingType;
  sort?: PostSortType;
  /**
   * Filter to within a given time range, in seconds.
   * IE 60 would give results for the past minute.
   * Use Zero to override the local_site and local_user time_range.
   */
  time_range_seconds?: number;
  /**
   * DEPRECATED, use page_cursor
   */
  page?: number;
  limit?: number;
  community_id?: CommunityId;
  community_name?: string;
  saved_only?: boolean;
  read_only?: boolean;
  liked_only?: boolean;
  disliked_only?: boolean;
  show_hidden?: boolean;
  /**
   * If true, then show the read posts (even if your user setting is to hide them)
   */
  show_read?: boolean;
  /**
   * If true, then show the nsfw posts (even if your user setting is to hide them)
   */
  show_nsfw?: boolean;
  /**
   * If false, then show posts with media attached (even if your user setting is to hide them)
   */
  hide_media?: boolean;
  /**
   * Whether to automatically mark fetched posts as read.
   */
  mark_as_read?: boolean;
  /**
   * If true, then only show posts with no comments
   */
  no_comments_only?: boolean;
  page_cursor?: PostPaginationCursor;
  page_back?: boolean;
};
