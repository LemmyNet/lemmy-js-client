// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentId } from "./CommentId";
import type { DbUrl } from "./DbUrl";
import type { LanguageId } from "./LanguageId";
import type { PersonId } from "./PersonId";
import type { PostId } from "./PostId";

/**
 * A comment.
 */
export type Comment = {
  id: CommentId;
  creator_id: PersonId;
  post_id: PostId;
  content: string;
  /**
   * Whether the comment has been removed.
   */
  removed: boolean;
  published_at: string;
  updated_at?: string;
  /**
   * Whether the comment has been deleted by its creator.
   */
  deleted: boolean;
  /**
   * The federated activity id / ap_id.
   */
  ap_id: DbUrl;
  /**
   * Whether the comment is local.
   */
  local: boolean;
  /**
   * The path / tree location of a comment, separated by dots, ending with the comment's id. Ex:
   * 0.24.27
   */
  path: string;
  /**
   * Whether the comment has been distinguished(speaking officially) by a mod.
   */
  distinguished: boolean;
  language_id: LanguageId;
  score: number;
  upvotes: number;
  downvotes: number;
  /**
   * The total number of children in this comment branch.
   */
  child_count: number;
  report_count: number;
  unresolved_report_count: number;
  /**
   * If a local user comments in a remote community, the comment is hidden until it is confirmed
   * accepted by the community (by receiving it back via federation).
   */
  federation_pending: boolean;
};
