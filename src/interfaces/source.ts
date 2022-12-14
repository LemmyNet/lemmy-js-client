import { Option } from "@sniptt/monads";
import { Expose, Transform } from "class-transformer";
import { toOption, toUndefined } from "../utils";

export class LocalUserSettings {
  id: number;
  person_id: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  email: Option<string>;
  show_nsfw: boolean;
  theme: string;
  default_sort_type: number;
  default_listing_type: number;
  interface_language: string;
  show_avatars: boolean;
  send_notifications_to_email: boolean;
  validator_time: string;
  show_bot_accounts: boolean;
  show_scores: boolean;
  show_read_posts: boolean;
  show_new_post_notifs: boolean;
  email_verified: boolean;
  accepted_application: boolean;
}

export class PersonSafe {
  id: number;
  name: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  display_name: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  avatar: Option<string>;
  banned: boolean;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
  actor_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  bio: Option<string>;
  local: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banner: Option<string>;
  deleted: boolean;
  inbox_url: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  shared_inbox_url: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  matrix_user_id: Option<string>;
  admin: boolean;
  bot_account: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  ban_expires: Option<string>;
  instance_id: number;
}

export class Site {
  id: number;
  name: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  sidebar: Option<string>;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  icon: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banner: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  description: Option<string>;
  actor_id: string;
  last_refreshed_at: string;
  inbox_url: string;
  private_key: Option<string>;
  public_key: string;
  instance_id: number;
}

export class LocalSite {
  id: number;
  site_id: number;
  site_setup: boolean;
  enable_downvotes: boolean;
  open_registration: boolean;
  enable_nsfw: boolean;
  community_creation_admin_only: boolean;
  require_email_verification: boolean;
  require_application: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  application_question: Option<string>;
  private_instance: boolean;
  default_theme: string;
  default_post_listing_type: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  legal_information: Option<string>;
  hide_modlog_mod_names: boolean;
  application_email_admins: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  slur_filter_regex: Option<string>;
  actor_name_max_length: number;
  federation_enabled: boolean;
  federation_debug: boolean;
  federation_worker_count: number;
  captcha_enabled: boolean;
  captcha_difficulty: string;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
}

export class LocalSiteRateLimit {
  id: number;
  local_site_id: number;
  message: number;
  message_per_second: number;
  post: number;
  post_per_second: number;
  register: number;
  register_per_second: number;
  image: number;
  image_per_second: number;
  comment: number;
  comment_per_second: number;
  search: number;
  search_per_second: number;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
}

export class PrivateMessage {
  id: number;
  creator_id: number;
  recipient_id: number;
  content: string;
  deleted: boolean;
  read: boolean;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
  ap_id: string;
  local: boolean;
}

export class PostReport {
  id: number;
  creator_id: number;
  post_id: number;
  original_post_name: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  original_post_url: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  original_post_body: Option<string>;
  reason: string;
  resolved: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  resolver_id: Option<number>;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
}

export class Post {
  id: number;
  name: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  url: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  body: Option<string>;
  creator_id: number;
  community_id: number;
  removed: boolean;
  locked: boolean;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
  deleted: boolean;
  nsfw: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  embed_title: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  embed_description: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  embed_video_url: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  thumbnail_url: Option<string>;
  ap_id: string;
  local: boolean;
  language_id: number;
  featured_community: boolean;
  featured_local: boolean;
}

export class PasswordResetRequest {
  id: number;
  local_user_id: number;
  token_encrypted: string;
  published: string;
}

export class ModRemovePost {
  id: number;
  mod_person_id: number;
  post_id: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  removed: Option<boolean>;
  when_: string;
}

export class ModLockPost {
  id: number;
  mod_person_id: number;
  post_id: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  locked: Option<boolean>;
  when_: string;
}

export class ModFeaturePost {
  id: number;
  mod_person_id: number;
  post_id: number;
  featured: boolean;
  is_featured_community: boolean;
  when_: string;
}

export class ModRemoveComment {
  id: number;
  mod_person_id: number;
  comment_id: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  removed: Option<boolean>;
  when_: string;
}

export class ModRemoveCommunity {
  id: number;
  mod_person_id: number;
  community_id: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  removed: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  expires: Option<string>;
  when_: string;
}

export class ModBanFromCommunity {
  id: number;
  mod_person_id: number;
  other_person_id: number;
  community_id: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banned: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  expires: Option<string>;
  when_: string;
}

export class ModBan {
  id: number;
  mod_person_id: number;
  other_person_id: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banned: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  expires: Option<string>;
  when_: string;
}

export class ModAddCommunity {
  id: number;
  mod_person_id: number;
  other_person_id: number;
  community_id: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  removed: Option<boolean>;
  when_: string;
}

export class ModTransferCommunity {
  id: number;
  mod_person_id: number;
  other_person_id: number;
  community_id: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  removed: Option<boolean>;
  when_: string;
}

export class ModAdd {
  id: number;
  mod_person_id: number;
  other_person_id: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  removed: Option<boolean>;
  when_: string;
}

export class AdminPurgePerson {
  id: number;
  admin_person_id: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  when_: string;
}

export class AdminPurgeCommunity {
  id: number;
  admin_person_id: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  when_: string;
}

export class AdminPurgePost {
  id: number;
  admin_person_id: number;
  community_id: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  when_: string;
}

export class AdminPurgeComment {
  id: number;
  admin_person_id: number;
  post_id: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  when_: string;
}

export class CommunitySafe {
  id: number;
  name: string;
  title: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  description: Option<string>;
  removed: boolean;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
  deleted: boolean;
  nsfw: boolean;
  actor_id: string;
  local: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  icon: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banner: Option<string>;
  hidden: boolean;
  posting_restricted_to_mods: boolean;
  instance_id: number;
}

export class CommentReport {
  id: number;
  creator_id: number;
  comment_id: number;
  original_comment_text: string;
  reason: string;
  resolved: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  resolver_id: Option<number>;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
}

export class Comment {
  id: number;
  creator_id: number;
  post_id: number;
  content: string;
  removed: boolean;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
  deleted: boolean;
  ap_id: string;
  local: boolean;
  path: string;
  distinguished: boolean;
  language_id: number;
}

export class PersonMention {
  id: number;
  recipient_id: number;
  comment_id: number;
  read: boolean;
  published: string;
}

export class CommentReply {
  id: number;
  recipient_id: number;
  comment_id: number;
  read: boolean;
  published: string;
}

export class RegistrationApplication {
  id: number;
  local_user_id: number;
  answer: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  admin_id: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  deny_reason: Option<string>;
  published: string;
}

export class Language {
  id: number;
  code: string;
  name: string;
}

export class PrivateMessageReport {
  id: number;
  creator_id: number;
  private_message_id: number;
  original_pm_text: string;
  reason: string;
  resolved: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  resolver_id: Option<number>;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
}

export class Tagline {
  id: number;
  local_site_id: number;
  content: string;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
}
