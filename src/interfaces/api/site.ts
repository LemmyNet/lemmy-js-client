import { Option, Some } from "@sniptt/monads";
import { Expose, Transform, Type } from "class-transformer";
import "reflect-metadata";
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

  constructor(init: Search) {
    Object.assign(this, init);
  }
}

export class SearchResponse {
  /**
   * The [[SearchType]].
   */
  type_: string;
  @Type(() => CommentView)
  comments: CommentView[];
  @Type(() => PostView)
  posts: PostView[];
  @Type(() => CommunityView)
  communities: CommunityView[];
  @Type(() => PersonViewSafe)
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

  constructor(init: GetModlog) {
    Object.assign(this, init);
  }
}

export class GetModlogResponse {
  @Type(() => ModRemovePostView)
  removed_posts: ModRemovePostView[];
  @Type(() => ModLockPostView)
  locked_posts: ModLockPostView[];
  @Type(() => ModStickyPostView)
  stickied_posts: ModStickyPostView[];
  @Type(() => ModRemoveCommentView)
  removed_comments: ModRemoveCommentView[];
  @Type(() => ModRemoveCommunityView)
  removed_communities: ModRemoveCommunityView[];
  @Type(() => ModBanFromCommunityView)
  banned_from_community: ModBanFromCommunityView[];
  @Type(() => ModBanView)
  banned: ModBanView[];
  @Type(() => ModAddCommunityView)
  added_to_community: ModAddCommunityView[];
  @Type(() => ModTransferCommunityView)
  transferred_to_community: ModTransferCommunityView[];
  @Type(() => ModAddView)
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

  constructor(init: CreateSite) {
    Object.assign(this, init);
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

  constructor(init: EditSite) {
    Object.assign(this, init);
  }
}

export class GetSite {
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;

  constructor(init: GetSite) {
    Object.assign(this, init);
  }
}

export class SiteResponse {
  @Type(() => SiteView)
  site_view: SiteView;
}

export class GetSiteResponse {
  /**
   * Optional, because the site might not be set up yet.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => SiteView)
  site_view: Option<SiteView>;
  @Type(() => PersonViewSafe)
  admins: PersonViewSafe[];
  online: number;
  version: string;
  /**
   * If you're logged in, you'll get back extra user info.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => MyUserInfo)
  my_user: Option<MyUserInfo>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => FederatedInstances)
  federated_instances: Option<FederatedInstances>;
}

/**
 * Your user info, such as blocks, follows, etc.
 */
export class MyUserInfo {
  @Type(() => LocalUserSettingsView)
  local_user_view: LocalUserSettingsView;
  @Type(() => CommunityFollowerView)
  follows: CommunityFollowerView[];
  @Type(() => CommunityModeratorView)
  moderates: CommunityModeratorView[];
  @Type(() => CommunityBlockView)
  community_blocks: CommunityBlockView[];
  @Type(() => PersonBlockView)
  person_blocks: PersonBlockView[];
}

export class LeaveAdmin {
  auth: string;

  constructor(init: LeaveAdmin) {
    Object.assign(this, init);
  }
}

export class GetSiteConfig {
  auth: string;

  constructor(init: GetSiteConfig) {
    Object.assign(this, init);
  }
}

export class GetSiteConfigResponse {
  config_hjson: string;
}

export class SaveSiteConfig {
  config_hjson: string;
  auth: string;

  constructor(init: SaveSiteConfig) {
    Object.assign(this, init);
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

  constructor(init: FederatedInstances) {
    Object.assign(this, init);
  }
}

export class ResolveObject {
  q: string;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;

  constructor(init: ResolveObject) {
    Object.assign(this, init);
  }
}

export class ResolveObjectResponse {
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => CommentView)
  comment: Option<CommentView>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => PostView)
  post: Option<PostView>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => CommunityView)
  community: Option<CommunityView>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => PersonViewSafe)
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

  constructor(init: ListRegistrationApplications) {
    Object.assign(this, init);
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

  constructor(init: ApproveRegistrationApplication) {
    Object.assign(this, init);
  }
}

export class RegistrationApplicationResponse {
  @Type(() => RegistrationApplicationView)
  registration_application: RegistrationApplicationView;
}

export class GetUnreadRegistrationApplicationCount {
  auth: string;

  constructor(init: GetUnreadRegistrationApplicationCount) {
    Object.assign(this, init);
  }
}

export class GetUnreadRegistrationApplicationCountResponse {
  registration_applications: number;
}
