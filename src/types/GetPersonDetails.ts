// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";
import type { PersonId } from "./PersonId";
import type { SortType } from "./SortType";

export interface GetPersonDetails {
  person_id?: PersonId;
  username?: string;
  sort?: SortType;
  page?: number;
  limit?: number;
  community_id?: CommunityId;
  saved_only?: boolean;
}
