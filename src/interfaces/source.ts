export interface LocalUserSettings {
  id: number;
  person_id: number;
  email?: string;
  show_nsfw: boolean;
  theme: string;
  default_sort_type: number;
  default_listing_type: number;
  lang: string;
  show_avatars: boolean;
  send_notifications_to_email: boolean;
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
  shared_inbox_url: string;
  matrix_user_id?: string;
  admin: boolean;
  bot_account: boolean;
  ban_expires?: string;
}

export interface Site {
  id: number;
  name: string;
  sidebar?: string;
  creator_id: number;
  published: string;
  updated?: string;
  enable_downvotes: boolean;
  open_registration: boolean;
  enable_nsfw: boolean;
  icon?: string;
  banner?: string;
  description?: string;
  community_creation_admin_only: boolean;
  require_email_verification: boolean;
  require_application: boolean;
  application_question?: string;
  private_instance: boolean;
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
  stickied: boolean;
  embed_title?: string;
  embed_description?: string;
  embed_html?: string;
  thumbnail_url?: string;
  ap_id: string;
  local: boolean;
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

export interface ModStickyPost {
  id: number;
  mod_person_id: number;
  post_id: number;
  stickied?: boolean;
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
  parent_id?: number;
  content: string;
  removed: boolean;
  read: boolean; // Whether the recipient has read the comment or not
  published: string;
  updated?: string;
  deleted: boolean;
  ap_id: string;
  local: boolean;
}

export interface PersonMention {
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
