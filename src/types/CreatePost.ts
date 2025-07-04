// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";
import type { LanguageId } from "./LanguageId";
import type { TagId } from "./TagId";

/**
 * Create a post.
 */
export type CreatePost = {
  name: string;
  community_id: CommunityId;
  url?: string;
  /**
   * An optional body for the post in markdown.
   */
  body?: string;
  /**
   * An optional alt_text, usable for image posts.
   */
  alt_text?: string;
  /**
   * A honeypot to catch bots. Should be None.
   */
  honeypot?: string;
  nsfw?: boolean;
  language_id?: LanguageId;
  /**
   * Instead of fetching a thumbnail, use a custom one.
   */
  custom_thumbnail?: string;
  tags?: Array<TagId>;
  /**
   * Time when this post should be scheduled. Null means publish immediately.
   */
  scheduled_publish_time_at?: number;
};
