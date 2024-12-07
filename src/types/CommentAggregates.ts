// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentId } from "./CommentId";

/**
 * Aggregate data for a comment.
 */
export type CommentAggregates = {
  comment_id: CommentId;
  score: number;
  upvotes: number;
  downvotes: number;
  published: string;
  /**
   * The total number of children in this comment branch.
   */
  child_count: number;
  report_count: number;
  unresolved_report_count: number;
};
