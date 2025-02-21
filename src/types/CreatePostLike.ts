// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { PostId } from "./PostId";

/**
 * Like a post.
 */
export type CreatePostLike = {
  post_id: PostId;
  /**
   * Score must be -1, 0, or 1.
   */
  score: number;
};
