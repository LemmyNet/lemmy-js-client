import { Category, UserSafeSettings } from '../source';
import {
  CommentView,
  CommunityView,
  ModAddCommunityView,
  ModAddView,
  ModBanFromCommunityView,
  ModBanView,
  ModLockPostView,
  ModRemoveCommentView,
  ModRemoveCommunityView,
  ModRemovePostView,
  ModStickyPostView,
  PostView,
  SiteView,
  UserViewSafe,
} from '../views';

export interface ListCategories {}

export interface ListCategoriesResponse {
  categories: Category[];
}

/**
 * Search types are `All, Comments, Posts, Communities, Users, Url`
 */
export interface Search {
  q: string;
  type_: string;
  community_id?: number;
  community_name?: string;
  sort: string;
  page?: number;
  limit?: number;
  auth?: string;
}

export interface SearchResponse {
  type_: string;
  comments: CommentView[];
  posts: PostView[];
  communities: CommunityView[];
  users: UserViewSafe[];
}

export interface GetModlog {
  mod_user_id?: number;
  community_id?: number;
  page?: number;
  limit?: number;
}

export interface GetModlogResponse {
  removed_posts: ModRemovePostView[];
  locked_posts: ModLockPostView[];
  stickied_posts: ModStickyPostView[];
  removed_comments: ModRemoveCommentView[];
  removed_communities: ModRemoveCommunityView[];
  banned_from_community: ModBanFromCommunityView[];
  banned: ModBanView[];
  added_to_community: ModAddCommunityView[];
  added: ModAddView[];
}

export interface CreateSite {
  name: string;
  description?: string;
  icon?: string;
  banner?: string;
  enable_downvotes: boolean;
  open_registration: boolean;
  enable_nsfw: boolean;
  auth: string;
}

export interface EditSite {
  name: string;
  description?: string;
  icon?: string;
  banner?: string;
  enable_downvotes: boolean;
  open_registration: boolean;
  enable_nsfw: boolean;
  auth: string;
}

export interface GetSite {
  auth?: string;
}

export interface SiteResponse {
  site_view: SiteView;
}

export interface GetSiteResponse {
  site_view?: SiteView; // Because the site might not be set up yet
  admins: UserViewSafe[];
  banned: UserViewSafe[];
  online: number;
  version: string;
  my_user?: UserSafeSettings; // Gives back your user and settings if logged in
  federated_instances?: FederatedInstances;
}

export interface TransferSite {
  user_id: number;
  auth: string;
}

export interface GetSiteConfig {
  auth: string;
}

export interface GetSiteConfigResponse {
  config_hjson: string;
}

export interface SaveSiteConfig {
  config_hjson: string;
  auth: string;
}

export interface FederatedInstances {
  linked: string[];
  allowed: string[];
  blocked: string[];
}
