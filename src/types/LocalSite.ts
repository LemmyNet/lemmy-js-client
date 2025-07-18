// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentSortType } from "./CommentSortType";
import type { FederationMode } from "./FederationMode";
import type { ListingType } from "./ListingType";
import type { LocalSiteId } from "./LocalSiteId";
import type { MultiCommunityId } from "./MultiCommunityId";
import type { PersonId } from "./PersonId";
import type { PostListingMode } from "./PostListingMode";
import type { PostSortType } from "./PostSortType";
import type { RegistrationMode } from "./RegistrationMode";
import type { SiteId } from "./SiteId";

/**
 * The local site.
 */
export type LocalSite = {
  id: LocalSiteId;
  site_id: SiteId;
  /**
   * True if the site is set up.
   */
  site_setup: boolean;
  /**
   * Whether only admins can create communities.
   */
  community_creation_admin_only: boolean;
  /**
   * Whether emails are required.
   */
  require_email_verification: boolean;
  /**
   * An optional registration application questionnaire in markdown.
   */
  application_question?: string;
  /**
   * Whether the instance is private or public.
   */
  private_instance: boolean;
  /**
   * The default front-end theme.
   */
  default_theme: string;
  default_post_listing_type: ListingType;
  /**
   * An optional legal disclaimer page.
   */
  legal_information?: string;
  /**
   * Whether new applications email admins.
   */
  application_email_admins: boolean;
  /**
   * An optional regex to filter words.
   */
  slur_filter_regex?: string;
  /**
   * The max actor name length.
   */
  actor_name_max_length: number;
  /**
   * Whether federation is enabled.
   */
  federation_enabled: boolean;
  /**
   * Whether captcha is enabled.
   */
  captcha_enabled: boolean;
  /**
   * The captcha difficulty.
   */
  captcha_difficulty: string;
  published_at: string;
  updated_at?: string;
  registration_mode: RegistrationMode;
  /**
   * Whether to email admins on new reports.
   */
  reports_email_admins: boolean;
  /**
   * Whether to sign outgoing Activitypub fetches with private key of local instance. Some
   * Fediverse instances and platforms require this.
   */
  federation_signed_fetch: boolean;
  /**
   * Default value for [LocalSite.post_listing_mode]
   */
  default_post_listing_mode: PostListingMode;
  /**
   * Default value for [LocalUser.post_sort_type]
   */
  default_post_sort_type: PostSortType;
  /**
   * Default value for [LocalUser.comment_sort_type]
   */
  default_comment_sort_type: CommentSortType;
  /**
   * Whether or not external auth methods can auto-register users.
   */
  oauth_registration: boolean;
  /**
   * What kind of post upvotes your site allows.
   */
  post_upvotes: FederationMode;
  /**
   * What kind of post downvotes your site allows.
   */
  post_downvotes: FederationMode;
  /**
   * What kind of comment upvotes your site allows.
   */
  comment_upvotes: FederationMode;
  /**
   * What kind of comment downvotes your site allows.
   */
  comment_downvotes: FederationMode;
  /**
   * A default time range limit to apply to post sorts, in seconds.
   */
  default_post_time_range_seconds?: number;
  /**
   * Block NSFW content being created
   */
  disallow_nsfw_content: boolean;
  users: number;
  posts: number;
  comments: number;
  communities: number;
  /**
   * The number of users with any activity in the last day.
   */
  users_active_day: number;
  /**
   * The number of users with any activity in the last week.
   */
  users_active_week: number;
  /**
   * The number of users with any activity in the last month.
   */
  users_active_month: number;
  /**
   * The number of users with any activity in the last half year.
   */
  users_active_half_year: number;
  /**
   * Dont send email notifications to users for new replies, mentions etc
   */
  disable_email_notifications: boolean;
  suggested_communities?: MultiCommunityId;
  multi_comm_follower: PersonId;
};
