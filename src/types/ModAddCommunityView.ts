// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Community } from "./Community";
import type { ModAddCommunity } from "./ModAddCommunity";
import type { Person } from "./Person";

/**
 * When someone is added as a community moderator.
 */
export type ModAddCommunityView = {
  mod_add_community: ModAddCommunity;
  moderator?: Person;
  community: Community;
  other_person: Person;
};
