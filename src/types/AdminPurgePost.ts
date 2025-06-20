// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { AdminPurgePostId } from "./AdminPurgePostId";
import type { CommunityId } from "./CommunityId";
import type { PersonId } from "./PersonId";

/**
 * When an admin purges a post.
 */
export type AdminPurgePost = {
  id: AdminPurgePostId;
  admin_person_id: PersonId;
  community_id: CommunityId;
  reason?: string;
  published_at: string;
};
