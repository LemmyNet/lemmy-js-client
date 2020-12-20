import {
  CommunityFollowerView,
  CommunityModeratorView,
  CommunityView,
  UserViewSafe,
} from '../views';

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
  category_id: number;
  nsfw: boolean;
  auth: string;
}

export interface CommunityResponse {
  community_view: CommunityView;
}

export interface ListCommunities {
  sort: string;
  page?: number;
  limit?: number;
  auth?: string;
}

export interface ListCommunitiesResponse {
  communities: CommunityView[];
}

export interface BanFromCommunity {
  community_id: number;
  user_id: number;
  ban: boolean;
  remove_data: boolean;
  reason?: string;
  expires?: number;
  auth: string;
}

export interface BanFromCommunityResponse {
  user_view: UserViewSafe;
  banned: boolean;
}

export interface AddModToCommunity {
  community_id: number;
  user_id: number;
  added: boolean;
  auth: string;
}

export interface AddModToCommunityResponse {
  moderators: CommunityModeratorView[];
}

export interface EditCommunity {
  edit_id: number;
  title: string;
  description?: string;
  icon?: string;
  banner?: string;
  category_id: number;
  nsfw: boolean;
  auth: string;
}

export interface DeleteCommunity {
  edit_id: number;
  deleted: boolean;
  auth: string;
}

export interface RemoveCommunity {
  edit_id: number;
  removed: boolean;
  reason?: string;
  expires?: number;
  auth: string;
}

export interface FollowCommunity {
  community_id: number;
  follow: boolean;
  auth: string;
}

export interface GetFollowedCommunities {
  auth: string;
}

export interface GetFollowedCommunitiesResponse {
  communities: CommunityFollowerView[];
}

export interface TransferCommunity {
  community_id: number;
  user_id: number;
  auth: string;
}

export interface CommunityJoin {
  community_id: number;
}

export interface CommunityJoinResponse {
  joined: boolean;
}

export interface ModJoin {
  community_id: number;
}

export interface ModJoinResponse {
  joined: boolean;
}
