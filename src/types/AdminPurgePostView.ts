// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { AdminPurgePost } from "./AdminPurgePost";
import type { Community } from "./Community";
import type { Person } from "./Person";

/**
 * When an admin purges a post.
 */
export type AdminPurgePostView = {
  admin_purge_post: AdminPurgePost;
  admin?: Person;
  community: Community;
};
