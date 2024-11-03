// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { PersonId } from "./PersonId";
import type { PostId } from "./PostId";

/**
 * When a moderator removes a post.
 */
export type ModRemovePost = {
  id: number;
  mod_person_id: PersonId;
  post_id: PostId;
  reason?: string;
  removed: boolean;
  when_: string;
};
