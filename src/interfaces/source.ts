import { ListingType, SortType } from './others';

export interface UserSafe {
  id: number;
  name: string;
  preferred_username?: string;
  avatar?: string;
  admin: boolean;
  banned: boolean;
  published: Date;
  updated?: Date;
  matrix_user_id?: string;
  actor_id: string;
  bio?: string;
  local: boolean;
  banner?: string;
  deleted: boolean;
}

export interface UserSafeSettings {
  id: number;
  name: string;
  preferred_username?: string;
  email?: string;
  avatar?: string;
  admin: boolean;
  banned: boolean;
  published: Date;
  updated?: Date;
  show_nsfw: boolean;
  theme: string;
  default_sort_type: number;
  default_listing_type: number;
  lang: string;
  show_avatars: boolean;
  send_notifications_to_email: boolean;
  matrix_user_id?: string;
  actor_id: string;
  bio?: string;
  local: boolean;
  last_refreshed_at: string;
  banner?: string;
  deleted: boolean;
}

export interface Site {
  id: number;
  name: string;
  description?: string;
  creator_id: number;
  published: Date;
  updated?: Date;
  enable_downvotes: boolean;
  open_registration: boolean;
  enable_nsfw: boolean;
  icon?: string;
  banner?: string;
}

export interface PrivateMessage {
  id: number;
  creator_id: number;
  recipient_id: number;
  content: string;
  deleted: boolean;
  read: boolean;
  published: Date;
  updated?: Date;
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
  published: Date;
  updated?: Date;
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
  published: Date;
  updated?: Date;
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
  user_id: number;
  token_encrypted: string;
  published: Date;
}

export interface ModRemovePost {
  id: number;
  mod_user_id: number;
  post_id: number;
  reason?: string;
  removed?: boolean;
  when_: Date;
}

export interface ModLockPost {
  id: number;
  mod_user_id: number;
  post_id: number;
  locked?: boolean;
  when_: Date;
}

export interface ModStickyPost {
  id: number;
  mod_user_id: number;
  post_id: number;
  stickied?: boolean;
  when_: Date;
}

export interface ModRemoveComment {
  id: number;
  mod_user_id: number;
  comment_id: number;
  reason?: string;
  removed?: boolean;
  when_: Date;
}

export interface ModRemoveCommunity {
  id: number;
  mod_user_id: number;
  community_id: number;
  reason?: string;
  removed?: boolean;
  expires?: string;
  when_: Date;
}

export interface ModBanFromCommunity {
  id: number;
  mod_user_id: number;
  other_user_id: number;
  community_id: number;
  reason?: string;
  banned?: boolean;
  expires?: string;
  when_: Date;
}

export interface ModBan {
  id: number;
  mod_user_id: number;
  other_user_id: number;
  reason?: string;
  banned?: boolean;
  expires?: string;
  when_: Date;
}

export interface ModAddCommunity {
  id: number;
  mod_user_id: number;
  other_user_id: number;
  community_id: number;
  removed?: boolean;
  when_: Date;
}

export interface ModAdd {
  id: number;
  mod_user_id: number;
  other_user_id: number;
  removed?: boolean;
  when_: Date;
}

export interface CommunitySafe {
  id: number;
  name: string;
  title: string;
  description?: string;
  category_id: number;
  creator_id: number;
  removed: boolean;
  published: Date;
  updated?: Date;
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
  published: Date;
  updated?: Date;
}

export interface Comment {
  id: number;
  creator_id: number;
  post_id: number;
  parent_id?: number;
  content: string;
  removed: boolean;
  read: boolean; // Whether the recipient has read the comment or not
  published: Date;
  updated?: Date;
  deleted: boolean;
  ap_id: string;
  local: boolean;
}

export interface Category {
  id: number;
  name: string;
}

export interface UserMention {
  id: number;
  recipient_id: number;
  comment_id: number;
  read: boolean;
  published: Date;
}
