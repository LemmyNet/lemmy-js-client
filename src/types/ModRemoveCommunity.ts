// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";
import type { PersonId } from "./PersonId";

/**
 * When a moderator removes a community.
 */
export type ModRemoveCommunity = {
  id: number;
  mod_person_id: PersonId;
  community_id: CommunityId;
  reason?: string;
  removed: boolean;
  when_: string;
};
