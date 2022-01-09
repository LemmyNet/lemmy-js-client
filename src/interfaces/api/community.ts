import {
  CommunityModeratorView,
  CommunityView,
  PersonViewSafe,
} from "../views";

/**
 * You can use either `id` or `name` as an id.
 *
 * To get a federated community by name, use `name@instance.tld` .
 */
export interface GetCommunity {
  id?: number;
  name?: string;
  auth?: string;
}

export interface GetCommunityResponse {
  community_view: CommunityView;
  moderators: CommunityModeratorView[];
  online: number;
}

export interface CreateCommunity {
  name: string;
  title: string;
  description?: string;
  icon?: string;
  banner?: string;
  nsfw?: boolean;
  auth: string;
}

export interface CommunityResponse {
  community_view: CommunityView;
}

export interface ListCommunities {
  /**
   * The [[ListingType]].
   */
  type_?: string;

  /**
   * The [[SortType]].
   */
  sort?: string;
  page?: number;
  limit?: number;
  auth?: string;
}

export interface ListCommunitiesResponse {
  communities: CommunityView[];
}

export interface BanFromCommunity {
  community_id: number;
  person_id: number;
  ban: boolean;

  /**
   * Removes/Restores their comments and posts for that community.
   */
  remove_data?: boolean;
  reason?: string;
  /**
   * The expire time in Unix seconds
   */
  expires?: number;
  auth: string;
}

export interface BanFromCommunityResponse {
  person_view: PersonViewSafe;
  banned: boolean;
}

export interface AddModToCommunity {
  community_id: number;
  person_id: number;
  added: boolean;
  auth: string;
}

export interface AddModToCommunityResponse {
  moderators: CommunityModeratorView[];
}

/**
 * Only mods can edit a community.
 */
export interface EditCommunity {
  community_id: number;
  title?: string;
  description?: string;
  icon?: string;
  banner?: string;
  nsfw?: boolean;
  auth: string;
}

export interface DeleteCommunity {
  community_id: number;
  deleted: boolean;
  auth: string;
}

/**
 * Only admins can remove a community.
 */
export interface RemoveCommunity {
  community_id: number;
  removed: boolean;
  reason?: string;
  /**
   * The expire time in Unix seconds
   */
  expires?: number;
  auth: string;
}

export interface FollowCommunity {
  community_id: number;
  follow: boolean;
  auth: string;
}

export interface TransferCommunity {
  community_id: number;
  person_id: number;
  auth: string;
}

export interface BlockCommunity {
  community_id: number;
  block: boolean;
  auth: string;
}

export interface BlockCommunityResponse {
  community_view: CommunityView;
  blocked: boolean;
}
