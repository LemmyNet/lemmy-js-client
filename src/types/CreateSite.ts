// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { LanguageId } from "./LanguageId";
import type { ListingType } from "./ListingType";
import type { PostListingMode } from "./PostListingMode";
import type { RegistrationMode } from "./RegistrationMode";
import type { SortType } from "./SortType";

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
  application_question?: string;
  private_instance?: boolean;
  default_theme?: string;
  default_post_listing_type?: ListingType;
  default_sort_type?: SortType;
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
  allowed_instances?: Array<string>;
  blocked_instances?: Array<string>;
  taglines?: Array<string>;
  registration_mode?: RegistrationMode;
  oauth_registration?: boolean;
  content_warning?: string;
  default_post_listing_mode?: PostListingMode;
}
