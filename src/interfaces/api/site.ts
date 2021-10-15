import {
  AdminPurgeCommentView,
  AdminPurgeCommunityView,
  AdminPurgePersonView,
  AdminPurgePostView,
  CommunityBlockView,
  CommunityFollowerView,
  CommunityModeratorView,
  LocalUserSettingsView,
  PersonBlockView,
} from '../views';
import {
  CommentView,
  CommunityView,
  ModAddCommunityView,
  ModTransferCommunityView,
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
  PersonViewSafe,
} from '../views';

/**
 * Search lemmy for different types of data.
 */
export interface Search {
  /**
   * The search query string.
   */
  q: string;

  /**
   * The [[SearchType]].
   */
  type_?: string;
  community_id?: number;
  community_name?: string;
  creator_id?: number;
  /**
   * The [[SortType]].
   */
  sort?: string;
  /**
   * The [[ListingType]].
   */
  listing_type?: string;
  page?: number;
  limit?: number;
  auth?: string;
}

export interface SearchResponse {
  /**
   * The [[SearchType]].
   */
  type_: string;
  comments: CommentView[];
  posts: PostView[];
  communities: CommunityView[];
  users: PersonViewSafe[];
}

export interface GetModlog {
  mod_person_id?: number;
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
  transferred_to_community: ModTransferCommunityView[];
  added: ModAddView[];
  admin_purged_persons: AdminPurgePersonView[];
  admin_purged_communities: AdminPurgeCommunityView[];
  admin_purged_posts: AdminPurgePostView[];
  admin_purged_comments: AdminPurgeCommentView[];
}

export interface CreateSite {
  name: string;
  sidebar?: string;
  description?: string;
  icon?: string;
  banner?: string;
  enable_downvotes?: boolean;
  open_registration?: boolean;
  enable_nsfw?: boolean;
  community_creation_admin_only?: boolean;
  auth: string;
}

export interface EditSite {
  name?: string;
  sidebar?: string;
  description?: string;
  icon?: string;
  banner?: string;
  enable_downvotes?: boolean;
  open_registration?: boolean;
  enable_nsfw?: boolean;
  community_creation_admin_only?: boolean;
  auth: string;
}

export interface GetSite {
  auth?: string;
}

export interface SiteResponse {
  site_view: SiteView;
}

export interface GetSiteResponse {
  /**
   * Optional, because the site might not be set up yet.
   */
  site_view?: SiteView;
  admins: PersonViewSafe[];
  banned: PersonViewSafe[];
  online: number;
  version: string;
  /**
   * If you're logged in, you'll get back extra user info.
   */
  my_user?: MyUserInfo;
  federated_instances?: FederatedInstances;
}

/**
 * Your user info, such as blocks, follows, etc.
 */
export interface MyUserInfo {
  local_user_view: LocalUserSettingsView;
  follows: CommunityFollowerView[];
  moderates: CommunityModeratorView[];
  community_blocks: CommunityBlockView[];
  person_blocks: PersonBlockView[];
}

export interface TransferSite {
  person_id: number;
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
  allowed?: string[];
  blocked?: string[];
}

export interface ResolveObject {
  q: string;
  auth?: string;
}

export interface ResolveObjectResponse {
  comment?: CommentView;
  post?: PostView;
  community?: CommunityView;
  person?: PersonViewSafe;
}

export interface PurgePerson {
  person_id: number;
  remove_images: boolean;
  reason?: string;
  auth: string;
}

export interface PurgeCommunity {
  community_id: number;
  remove_images: boolean;
  reason?: string;
  auth: string;
}

export interface PurgePost {
  post_id: number;
  reason?: string;
  auth: string;
}

export interface PurgeComment {
  comment_id: number;
  reason?: string;
  auth: string;
}

export interface PurgeItemResponse {
  success: boolean;
}
