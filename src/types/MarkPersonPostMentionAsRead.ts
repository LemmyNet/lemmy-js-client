// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { PersonPostMentionId } from "./PersonPostMentionId";

/**
 * Mark a person mention as read.
 */
export type MarkPersonPostMentionAsRead = {
  person_post_mention_id: PersonPostMentionId;
  read: boolean;
};