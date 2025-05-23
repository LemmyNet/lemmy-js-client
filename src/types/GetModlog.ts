// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentId } from "./CommentId";
import type { CommunityId } from "./CommunityId";
import type { ListingType } from "./ListingType";
import type { ModlogActionType } from "./ModlogActionType";
import type { PaginationCursor } from "./PaginationCursor";
import type { PersonId } from "./PersonId";
import type { PostId } from "./PostId";

/**
 * Fetches the modlog.
 */
export type GetModlog = {
  /**
   * Filter by the moderator.
   */
  mod_person_id?: PersonId;
  /**
   * Filter by the community.
   */
  community_id?: CommunityId;
  /**
   * Filter by the modlog action type.
   */
  type_?: ModlogActionType;
  /**
   * Filter by listing type. When not using All, it will remove the non-community modlog entries,
   * such as site bans, instance blocks, adding an admin, etc.
   */
  listing_type?: ListingType;
  /**
   * Filter by the other / modded person.
   */
  other_person_id?: PersonId;
  /**
   * Filter by post. Will include comments of that post.
   */
  post_id?: PostId;
  /**
   * Filter by comment.
   */
  comment_id?: CommentId;
  page_cursor?: PaginationCursor;
  page_back?: boolean;
  limit?: number;
};
