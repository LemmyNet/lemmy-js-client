// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentSortType } from "./CommentSortType";
import type { FederationMode } from "./FederationMode";
import type { LanguageId } from "./LanguageId";
import type { ListingType } from "./ListingType";
import type { PostListingMode } from "./PostListingMode";
import type { PostSortType } from "./PostSortType";
import type { RegistrationMode } from "./RegistrationMode";

/**
 * Creates a site. Should be done after first running lemmy.
 */
export type CreateSite = {
  name: string;
  sidebar?: string;
  description?: string;
  enable_nsfw?: boolean;
  community_creation_admin_only?: boolean;
  require_email_verification?: boolean;
  application_question?: string;
  private_instance?: boolean;
  default_theme?: string;
  default_post_listing_type?: ListingType;
  default_post_listing_mode?: PostListingMode;
  default_post_sort_type?: PostSortType;
  default_comment_sort_type?: CommentSortType;
  legal_information?: string;
  application_email_admins?: boolean;
  hide_modlog_mod_names?: boolean;
  discussion_languages?: Array<LanguageId>;
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
  captcha_enabled?: boolean;
  captcha_difficulty?: string;
  registration_mode?: RegistrationMode;
  oauth_registration?: boolean;
  content_warning?: string;
  post_upvotes?: FederationMode;
  post_downvotes?: FederationMode;
  comment_upvotes?: FederationMode;
  comment_downvotes?: FederationMode;
};
