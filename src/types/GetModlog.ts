// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentId } from "./CommentId";
import type { CommunityId } from "./CommunityId";
import type { ModlogActionType } from "./ModlogActionType";
import type { ModlogCombinedPaginationCursor } from "./ModlogCombinedPaginationCursor";
import type { PersonId } from "./PersonId";
import type { PostId } from "./PostId";

/**
 * Fetches the modlog.
 */
export type GetModlog = {
  mod_person_id?: PersonId;
  community_id?: CommunityId;
  type_?: ModlogActionType;
  other_person_id?: PersonId;
  post_id?: PostId;
  comment_id?: CommentId;
  page_cursor?: ModlogCombinedPaginationCursor;
  page_back?: boolean;
};
