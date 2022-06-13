import { Option, Some } from "@sniptt/monads";
import { Expose, Transform } from "class-transformer";
import { toUndefined } from "../../utils";
import { ListingType, SearchType, SortType } from "../others";
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
export class Search {
  /**
   * The search query string.
   */
  q: string;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  type_: Option<SearchType>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_id: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_name: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  creator_id: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  sort: Option<SortType>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  listing_type: Option<ListingType>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;

  constructor(
    q: string,
    type_: Option<SearchType>,
    community_id: Option<number>,
    community_name: Option<string>,
    creator_id: Option<number>,
    sort: Option<SortType>,
    listing_type: Option<ListingType>,
    page: Option<number>,
    limit: Option<number>,
    auth: Option<string>
  ) {
    this.q = q;
    this.type_ = type_;
    this.community_id = community_id;
    this.community_name = community_name;
    this.creator_id = creator_id;
    this.sort = sort;
    this.listing_type = listing_type;
    this.page = page;
    this.limit = limit;
    this.auth = auth;
  }
}

export class SearchResponse {
  /**
   * The [[SearchType]].
   */
  type_: string;
  comments: CommentView[];
  posts: PostView[];
  communities: CommunityView[];
  users: PersonViewSafe[];
}

export class GetModlog {
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  mod_person_id: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_id: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;

  constructor(
    mod_person_id: Option<number>,
    community_id: Option<number>,
    page: Option<number>,
    limit: Option<number>,
    auth: Option<string>
  ) {
    this.mod_person_id = mod_person_id;
    this.community_id = community_id;
    this.page = page;
    this.limit = limit;
    this.auth = auth;
  }
}

export class GetModlogResponse {
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

export class CreateSite {
  name: string;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  sidebar: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  description: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  icon: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banner: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  enable_downvotes: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  open_registration: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  enable_nsfw: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_creation_admin_only: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  require_email_verification: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  require_application: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  application_question: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  private_instance: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  default_theme: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  default_post_listing_type: Option<string>;
  auth: string;

  constructor(
    name: string,
    sidebar: Option<string>,
    description: Option<string>,
    icon: Option<string>,
    banner: Option<string>,
    enable_downvotes: Option<boolean>,
    open_registration: Option<boolean>,
    enable_nsfw: Option<boolean>,
    community_creation_admin_only: Option<boolean>,
    require_email_verification: Option<boolean>,
    require_application: Option<boolean>,
    application_question: Option<string>,
    private_instance: Option<boolean>,
    default_theme: Option<string>,
    default_post_listing_type: Option<string>,
    auth: string
  ) {
    this.name = name;
    this.sidebar = sidebar;
    this.description = description;
    this.icon = icon;
    this.banner = banner;
    this.enable_downvotes = enable_downvotes;
    this.open_registration = open_registration;
    this.enable_nsfw = enable_nsfw;
    this.community_creation_admin_only = community_creation_admin_only;
    this.require_email_verification = require_email_verification;
    this.require_application = require_application;
    this.application_question = application_question;
    this.private_instance = private_instance;
    this.default_theme = default_theme;
    this.default_post_listing_type = default_post_listing_type;
    this.auth = auth;
  }
}

export class EditSite {
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  name: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  sidebar: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  description: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  icon: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banner: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  enable_downvotes: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  open_registration: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  enable_nsfw: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_creation_admin_only: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  require_email_verification: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  require_application: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  application_question: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  private_instance: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  default_theme: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  legal_information: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  default_post_listing_type: Option<string>;
  auth: string;

  constructor(
    name: Option<string>,
    sidebar: Option<string>,
    description: Option<string>,
    icon: Option<string>,
    banner: Option<string>,
    enable_downvotes: Option<boolean>,
    open_registration: Option<boolean>,
    enable_nsfw: Option<boolean>,
    community_creation_admin_only: Option<boolean>,
    require_email_verification: Option<boolean>,
    require_application: Option<boolean>,
    application_question: Option<string>,
    private_instance: Option<boolean>,
    default_theme: Option<string>,
    legal_information: Option<string>,
    default_post_listing_type: Option<string>,
    auth: string
  ) {
    this.name = name;
    this.sidebar = sidebar;
    this.description = description;
    this.icon = icon;
    this.banner = banner;
    this.enable_downvotes = enable_downvotes;
    this.open_registration = open_registration;
    this.enable_nsfw = enable_nsfw;
    this.community_creation_admin_only = community_creation_admin_only;
    this.require_email_verification = require_email_verification;
    this.require_application = require_application;
    this.application_question = application_question;
    this.private_instance = private_instance;
    this.default_theme = default_theme;
    this.legal_information = legal_information;
    this.default_post_listing_type = default_post_listing_type;
    this.auth = auth;
  }
}

export class GetSite {
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;

  constructor(auth: Option<string>) {
    this.auth = auth;
  }
}

export class SiteResponse {
  site_view: SiteView;
}

export class GetSiteResponse {
  /**
   * Optional, because the site might not be set up yet.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  site_view: Option<SiteView>;
  admins: PersonViewSafe[];
  online: number;
  version: string;
  /**
   * If you're logged in, you'll get back extra user info.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  my_user: Option<MyUserInfo>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  federated_instances: Option<FederatedInstances>;
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

export class LeaveAdmin {
  auth: string;

  constructor(auth: string) {
    this.auth = auth;
  }
}

export class GetSiteConfig {
  auth: string;

  constructor(auth: string) {
    this.auth = auth;
  }
}

export class GetSiteConfigResponse {
  config_hjson: string;
}

export class SaveSiteConfig {
  config_hjson: string;
  auth: string;

  constructor(config_hjson: string, auth: string) {
    this.config_hjson = config_hjson;
    this.auth = auth;
  }
}

export class FederatedInstances {
  linked: string[];
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  allowed: Option<string[]>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  blocked: Option<string[]>;
}

export class ResolveObject {
  q: string;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;

  constructor(q: string, auth: Option<string>) {
    this.q = q;
    this.auth = auth;
  }
}

export class ResolveObjectResponse {
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  comment: Option<CommentView>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  post: Option<PostView>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community: Option<CommunityView>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  person: Option<PersonViewSafe>;
}

export class ListRegistrationApplications {
  /**
   * Only shows the unread applications (IE those without an admin actor)
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  unread_only: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  auth: string;

  constructor(
    unread_only: Option<boolean>,
    page: Option<number>,
    limit: Option<number>,
    auth: string
  ) {
    this.unread_only = unread_only;
    this.page = page;
    this.limit = limit;
    this.auth = auth;
  }
}

export class ListRegistrationApplicationsResponse {
  registration_applications: RegistrationApplicationView[];
}

export class ApproveRegistrationApplication {
  id: number;
  approve: boolean;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  deny_reason: Option<string>;
  auth: string;

  constructor(
    id: number,
    approve: boolean,
    deny_reason: Option<string>,
    auth: string
  ) {
    this.id = id;
    this.approve = approve;
    this.deny_reason = deny_reason;
    this.auth = auth;
  }
}

export class RegistrationApplicationResponse {
  registration_application: RegistrationApplicationView;
}

export class GetUnreadRegistrationApplicationCount {
  auth: string;

  constructor(auth: string) {
    this.auth = auth;
  }
}

export class GetUnreadRegistrationApplicationCountResponse {
  registration_applications: number;
}
