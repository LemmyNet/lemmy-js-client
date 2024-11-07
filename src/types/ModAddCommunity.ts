// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";
import type { PersonId } from "./PersonId";

/**
 * When someone is added as a community moderator.
 */
export type ModAddCommunity = {
  id: number;
  mod_person_id: PersonId;
  other_person_id: PersonId;
  community_id: CommunityId;
  removed: boolean;
  when_: string;
};
