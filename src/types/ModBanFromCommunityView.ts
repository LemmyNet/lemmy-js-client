// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Community } from "./Community";
import type { ModBanFromCommunity } from "./ModBanFromCommunity";
import type { Person } from "./Person";

export interface ModBanFromCommunityView {
  mod_ban_from_community: ModBanFromCommunity;
  moderator?: Person;
  community: Community;
  banned_person: Person;
}
