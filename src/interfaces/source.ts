export interface LocalUserSettings {
  id: number;
  person_id: number;
  email?: string;
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

export interface PersonSafe {
  id: number;
  name: string;
  display_name?: string;
  avatar?: string;
  banned: boolean;
  published: string;
  updated?: string;
  actor_id: string;
  bio?: string;
  local: boolean;
  banner?: string;
  deleted: boolean;
  inbox_url: string;
  shared_inbox_url?: string;
  matrix_user_id?: string;
  admin: boolean;
  bot_account: boolean;
  ban_expires?: string;
  instance_id: number;
}

export interface Site {
  id: number;
  name: string;
  sidebar?: string;
  published: string;
  updated?: string;
  icon?: string;
  banner?: string;
  description?: string;
  actor_id: string;
  last_refreshed_at: string;
  inbox_url: string;
  private_key?: string;
  public_key: string;
  instance_id: number;
}

export enum RegistrationMode {
  Closed = "closed",
  RequireApplication = "requireapplication",
  Open = "open",
}

export interface LocalSite {
  id: number;
  site_id: number;
  site_setup: boolean;
  enable_downvotes: boolean;
  registration_mode: RegistrationMode;
  enable_nsfw: boolean;
  community_creation_admin_only: boolean;
  require_email_verification: boolean;
  application_question?: string;
  private_instance: boolean;
  default_theme: string;
  default_post_listing_type: string;
  legal_information?: string;
  hide_modlog_mod_names: boolean;
  application_email_admins: boolean;
  slur_filter_regex?: string;
  actor_name_max_length: number;
  federation_enabled: boolean;
  federation_debug: boolean;
  federation_worker_count: number;
  captcha_enabled: boolean;
  captcha_difficulty: string;
  published: string;
  updated?: string;
}

export interface LocalSiteRateLimit {
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
  updated?: string;
}

export interface PrivateMessage {
  id: number;
  creator_id: number;
  recipient_id: number;
  content: string;
  deleted: boolean;
  read: boolean;
  published: string;
  updated?: string;
  ap_id: string;
  local: boolean;
}

export interface PostReport {
  id: number;
  creator_id: number;
  post_id: number;
  original_post_name: string;
  original_post_url?: string;
  original_post_body?: string;
  reason: string;
  resolved: boolean;
  resolver_id?: number;
  published: string;
  updated?: string;
}

export interface Post {
  id: number;
  name: string;
  url?: string;
  body?: string;
  creator_id: number;
  community_id: number;
  removed: boolean;
  locked: boolean;
  published: string;
  updated?: string;
  deleted: boolean;
  nsfw: boolean;
  embed_title?: string;
  embed_description?: string;
  embed_video_url?: string;
  thumbnail_url?: string;
  ap_id: string;
  local: boolean;
  language_id: number;
  featured_community: boolean;
  featured_local: boolean;
}

export interface PasswordResetRequest {
  id: number;
  local_user_id: number;
  token_encrypted: string;
  published: string;
}

export interface ModRemovePost {
  id: number;
  mod_person_id: number;
  post_id: number;
  reason?: string;
  removed?: boolean;
  when_: string;
}

export interface ModLockPost {
  id: number;
  mod_person_id: number;
  post_id: number;
  locked?: boolean;
  when_: string;
}

export interface ModFeaturePost {
  id: number;
  mod_person_id: number;
  post_id: number;
  featured: boolean;
  is_featured_community: boolean;
  when_: string;
}

export interface ModRemoveComment {
  id: number;
  mod_person_id: number;
  comment_id: number;
  reason?: string;
  removed?: boolean;
  when_: string;
}

export interface ModRemoveCommunity {
  id: number;
  mod_person_id: number;
  community_id: number;
  reason?: string;
  removed?: boolean;
  expires?: string;
  when_: string;
}

export interface ModBanFromCommunity {
  id: number;
  mod_person_id: number;
  other_person_id: number;
  community_id: number;
  reason?: string;
  banned?: boolean;
  expires?: string;
  when_: string;
}

export interface ModBan {
  id: number;
  mod_person_id: number;
  other_person_id: number;
  reason?: string;
  banned?: boolean;
  expires?: string;
  when_: string;
}

export interface ModAddCommunity {
  id: number;
  mod_person_id: number;
  other_person_id: number;
  community_id: number;
  removed?: boolean;
  when_: string;
}

export interface ModTransferCommunity {
  id: number;
  mod_person_id: number;
  other_person_id: number;
  community_id: number;
  removed?: boolean;
  when_: string;
}

export interface ModAdd {
  id: number;
  mod_person_id: number;
  other_person_id: number;
  removed?: boolean;
  when_: string;
}

export interface AdminPurgePerson {
  id: number;
  admin_person_id: number;
  reason?: string;
  when_: string;
}

export interface AdminPurgeCommunity {
  id: number;
  admin_person_id: number;
  reason?: string;
  when_: string;
}

export interface AdminPurgePost {
  id: number;
  admin_person_id: number;
  community_id: number;
  reason?: string;
  when_: string;
}

export interface AdminPurgeComment {
  id: number;
  admin_person_id: number;
  post_id: number;
  reason?: string;
  when_: string;
}

export interface CommunitySafe {
  id: number;
  name: string;
  title: string;
  description?: string;
  removed: boolean;
  published: string;
  updated?: string;
  deleted: boolean;
  nsfw: boolean;
  actor_id: string;
  local: boolean;
  icon?: string;
  banner?: string;
  hidden: boolean;
  posting_restricted_to_mods: boolean;
  instance_id: number;
}

export interface CommentReport {
  id: number;
  creator_id: number;
  comment_id: number;
  original_comment_text: string;
  reason: string;
  resolved: boolean;
  resolver_id?: number;
  published: string;
  updated?: string;
}

export interface Comment {
  id: number;
  creator_id: number;
  post_id: number;
  content: string;
  removed: boolean;
  published: string;
  updated?: string;
  deleted: boolean;
  ap_id: string;
  local: boolean;
  path: string;
  distinguished: boolean;
  language_id: number;
}

export interface PersonMention {
  id: number;
  recipient_id: number;
  comment_id: number;
  read: boolean;
  published: string;
}

export interface CommentReply {
  id: number;
  recipient_id: number;
  comment_id: number;
  read: boolean;
  published: string;
}

export interface RegistrationApplication {
  id: number;
  local_user_id: number;
  answer: string;
  admin_id?: number;
  deny_reason?: string;
  published: string;
}

export interface Language {
  id: number;
  code: string;
  name: string;
}

export interface PrivateMessageReport {
  id: number;
  creator_id: number;
  private_message_id: number;
  original_pm_text: string;
  reason: string;
  resolved: boolean;
  resolver_id?: number;
  published: string;
  updated?: string;
}

export interface Tagline {
  id: number;
  local_site_id: number;
  content: string;
  published: string;
  updated?: string;
}
