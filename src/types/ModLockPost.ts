// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ModLockPostId } from "./ModLockPostId";
import type { PersonId } from "./PersonId";
import type { PostId } from "./PostId";

/**
 * When a moderator locks a post (prevents new comments being made).
 */
export type ModLockPost = {
  id: ModLockPostId;
  mod_person_id: PersonId;
  post_id: PostId;
  locked: boolean;
  when_: string;
};
