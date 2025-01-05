// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Community } from "./Community";
import type { ModBanFromCommunity } from "./ModBanFromCommunity";
import type { Person } from "./Person";

/**
 * When someone is banned from a community.
 */
export type ModBanFromCommunityView = {
  mod_ban_from_community: ModBanFromCommunity;
  moderator?: Person;
  community: Community;
  modded_person: Person;
};
