// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentId } from "./CommentId";
import type { ModRemoveCommentId } from "./ModRemoveCommentId";
import type { PersonId } from "./PersonId";

/**
 * When a moderator removes a comment.
 */
export type ModRemoveComment = {
  id: ModRemoveCommentId;
  mod_person_id: PersonId;
  comment_id: CommentId;
  reason?: string;
  removed: boolean;
  when_: string;
};
