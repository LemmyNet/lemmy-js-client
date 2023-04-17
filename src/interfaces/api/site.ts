import {
  ListingType,
  ModlogActionType,
  RegistrationMode,
  SearchType,
  SortType,
} from "../others";
import { Language, Tagline } from "../source";
import {
  AdminPurgeCommentView,
  AdminPurgeCommunityView,
  AdminPurgePersonView,
  AdminPurgePostView,
  CommentView,
  CommunityBlockView,
  CommunityFollowerView,
  CommunityModeratorView,
  CommunityView,
  CustomEmojiView,
  LocalUserSettingsView,
  ModAddCommunityView,
  ModAddView,
  ModBanFromCommunityView,
  ModBanView,
  ModFeaturePostView,
  ModLockPostView,
  ModRemoveCommentView,
  ModRemoveCommunityView,
  ModRemovePostView,
  ModTransferCommunityView,
  PersonBlockView,
  PersonView,
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
  type_?: SearchType;
  community_id?: number;
  community_name?: string;
  creator_id?: number;
  sort?: SortType;
  listing_type?: ListingType;
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
  users: PersonView[];
}

export interface GetModlog {
  mod_person_id?: number;
  community_id?: number;
  page?: number;
  limit?: number;
  auth?: string;
  type_: ModlogActionType;
  other_person_id?: number;
}

export interface GetModlogResponse {
  removed_posts: ModRemovePostView[];
  locked_posts: ModLockPostView[];
  featured_posts: ModFeaturePostView[];
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
  enable_nsfw?: boolean;
  community_creation_admin_only?: boolean;
  require_email_verification?: boolean;
  registration_mode?: RegistrationMode;
  application_question?: string;
  private_instance?: boolean;
  default_theme?: string;
  default_post_listing_type?: ListingType;
  application_email_admins?: boolean;
  reports_email_admins?: boolean;
  hide_modlog_mod_names?: boolean;
  discussion_languages?: number[];
  legal_information?: string;
  slur_filter_regex?: string;
  actor_name_max_length?: number;
  rate_limit_message?: number;
  rate_limit_message_per_second?: number;
  rate_limit_post?: number;
  rate_limit_post_per_second?: number;
  rate_limit_register?: number;
  rate_limit_register_per_second?: number;
  rate_limit_image?: number;
  rate_limit_image_per_second?: number;
  rate_limit_comment?: number;
  rate_limit_comment_per_second?: number;
  rate_limit_search?: number;
  rate_limit_search_per_second?: number;
  federation_enabled?: boolean;
  federation_debug?: boolean;
  federation_worker_count?: number;
  captcha_enabled?: boolean;
  captcha_difficulty?: string;
  allowed_instances?: string[];
  blocked_instances?: string[];
  taglines?: string[];
  auth: string;
}

export interface EditSite {
  name?: string;
  sidebar?: string;
  description?: string;
  icon?: string;
  banner?: string;
  enable_downvotes?: boolean;
  enable_nsfw?: boolean;
  community_creation_admin_only?: boolean;
  require_email_verification?: boolean;
  registration_mode?: RegistrationMode;
  application_question?: string;
  private_instance?: boolean;
  default_theme?: string;
  default_post_listing_type?: ListingType;
  legal_information?: string;
  application_email_admins?: boolean;
  reports_email_admins?: boolean;
  hide_modlog_mod_names?: boolean;
  discussion_languages?: number[];
  slur_filter_regex?: string;
  actor_name_max_length?: number;
  rate_limit_message?: number;
  rate_limit_message_per_second?: number;
  rate_limit_post?: number;
  rate_limit_post_per_second?: number;
  rate_limit_register?: number;
  rate_limit_register_per_second?: number;
  rate_limit_image?: number;
  rate_limit_image_per_second?: number;
  rate_limit_comment?: number;
  rate_limit_comment_per_second?: number;
  rate_limit_search?: number;
  rate_limit_search_per_second?: number;
  federation_enabled?: boolean;
  federation_debug?: boolean;
  federation_worker_count?: number;
  captcha_enabled?: boolean;
  captcha_difficulty?: string;
  allowed_instances?: string[];
  blocked_instances?: string[];
  taglines?: string[];
  auth: string;
}

export interface GetSite {
  auth?: string;
}

export interface SiteResponse {
  site_view: SiteView;
}

export interface GetSiteResponse {
  site_view: SiteView;
  admins: PersonView[];
  online: number;
  version: string;
  /**
   * If you're logged in, you'll get back extra user info.
   */
  my_user?: MyUserInfo;
  federated_instances?: FederatedInstances;
  all_languages: Language[];
  discussion_languages: number[];
  taglines: Tagline[];
  custom_emojis: CustomEmojiView[];
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
  discussion_languages: number[];
}

export interface LeaveAdmin {
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
  person?: PersonView;
}

export interface PurgePerson {
  person_id: number;
  reason?: string;
  auth: string;
}

export interface PurgeCommunity {
  community_id: number;
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
