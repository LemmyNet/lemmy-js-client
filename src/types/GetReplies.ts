// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentSortType } from "./CommentSortType";

/**
 * Get comment replies.
 */
export type GetReplies = {
  sort?: CommentSortType;
  page?: number;
  limit?: number;
  unread_only?: boolean;
};
