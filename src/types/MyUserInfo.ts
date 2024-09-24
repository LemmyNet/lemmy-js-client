// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Community } from "./Community";
import type { CommunityFollowerView } from "./CommunityFollowerView";
import type { CommunityModeratorView } from "./CommunityModeratorView";
import type { Instance } from "./Instance";
import type { LanguageId } from "./LanguageId";
import type { LocalUserView } from "./LocalUserView";
import type { Person } from "./Person";

export interface MyUserInfo {
  local_user_view: LocalUserView;
  follows: Array<CommunityFollowerView>;
  moderates: Array<CommunityModeratorView>;
  community_blocks: Array<Community>;
  instance_blocks: Array<Instance>;
  person_blocks: Array<Person>;
  discussion_languages: Array<LanguageId>;
}
