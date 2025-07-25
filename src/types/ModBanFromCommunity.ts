// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";
import type { ModBanFromCommunityId } from "./ModBanFromCommunityId";
import type { PersonId } from "./PersonId";

/**
 * When someone is banned from a community.
 */
export type ModBanFromCommunity = {
  id: ModBanFromCommunityId;
  mod_person_id: PersonId;
  other_person_id: PersonId;
  community_id: CommunityId;
  reason?: string;
  banned: boolean;
  expires_at?: string;
  published_at: string;
};
