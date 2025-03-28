// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentId } from "./CommentId";
import type { LanguageId } from "./LanguageId";
import type { PostId } from "./PostId";

/**
 * Create a comment.
 */
export type CreateComment = {
  content: string;
  post_id: PostId;
  parent_id?: CommentId;
  language_id?: LanguageId;
};
