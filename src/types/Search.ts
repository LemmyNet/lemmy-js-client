// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";
import type { ListingType } from "./ListingType";
import type { PaginationCursor } from "./PaginationCursor";
import type { PersonId } from "./PersonId";
import type { SearchSortType } from "./SearchSortType";
import type { SearchType } from "./SearchType";

/**
 * Searches the site, given a search term, and some optional filters.
 */
export type Search = {
  search_term?: string;
  community_id?: CommunityId;
  community_name?: string;
  creator_id?: PersonId;
  type_?: SearchType;
  sort?: SearchSortType;
  /**
   * Filter to within a given time range, in seconds.
   * IE 60 would give results for the past minute.
   */
  time_range_seconds?: number;
  listing_type?: ListingType;
  title_only?: boolean;
  post_url_only?: boolean;
  liked_only?: boolean;
  disliked_only?: boolean;
  page_cursor?: PaginationCursor;
  page_back?: boolean;
  limit?: number;
};
