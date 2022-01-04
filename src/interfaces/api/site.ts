import {
  CommentView,
  CommunityBlockView,
  CommunityFollowerView,
  CommunityModeratorView,
  CommunityView,
  LocalUserSettingsView,
  ModAddCommunityView,
  ModAddView,
  ModBanFromCommunityView,
  ModBanView,
  ModLockPostView,
  ModRemoveCommentView,
  ModRemoveCommunityView,
  ModRemovePostView,
  ModStickyPostView,
  ModTransferCommunityView,
  PersonBlockView,
  PersonViewSafe,
  PostView,
  RegistrationApplicationView,
  SiteView,
} from "../views";

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
  auth?: string;
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
  require_email_verification?: boolean;
  require_application?: boolean;
  application_question?: string;
  private_instance?: boolean;
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
  require_email_verification?: boolean;
  require_application?: boolean;
  application_question?: string;
  private_instance?: boolean;
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

export interface ListRegistrationApplications {
  /**
   * Only shows the unread applications (IE those without an admin actor)
   */
  unread_only?: boolean;
  page?: number;
  limit?: number;
  auth: string;
}

export interface ListRegistrationApplicationsResponse {
  registration_applications: RegistrationApplicationView[];
}

export interface ApproveRegistrationApplication {
  id: number;
  approve: boolean;
  deny_reason?: string;
  auth: string;
}

export interface RegistrationApplicationResponse {
  registration_application: RegistrationApplicationView;
}

export interface GetUnreadRegistrationApplicationCount {
  auth: string;
}

export interface GetUnreadRegistrationApplicationCountResponse {
  registration_applications: number;
}
