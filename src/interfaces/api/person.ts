import {
  CommentView,
  CommunityFollowerView,
  CommunityModeratorView,
  PostView,
  PrivateMessageView,
  PersonMentionView,
  PersonViewSafe,
  CommunityBlockView,
  PersonBlockView,
} from '../views';

export interface Login {
  username_or_email: string;
  password: string;
}

/**
 * Only the first user will be able to be the admin.
 */
export interface Register {
  username: string;
  email?: string;
  password: string;
  password_verify: string;
  show_nsfw: boolean;
  captcha_uuid?: string; // Only checked if these are enabled in the server
  captcha_answer?: string;
}

export interface GetCaptcha {}

export interface GetCaptchaResponse {
  ok?: CaptchaResponse; // Will be undefined if captchas are disabled
}

export interface CaptchaResponse {
  png: string; // A Base64 encoded png
  wav?: string; // A Base64 encoded wav aud,
  uuid: string;
}

export interface SaveUserSettings {
  show_nsfw?: boolean;
  theme?: string; // Default 'browser'
  default_sort_type?: number; // The Sort types from above, zero indexed as a number
  default_listing_type?: number; // Post listing types are `All, Subscribed, Community`
  lang?: string;
  avatar?: string;
  banner?: string;
  display_name?: string;
  email?: string;
  bio?: string;
  matrix_user_id?: string;
  show_avatars?: boolean;
  show_scores?: boolean;
  send_notifications_to_email?: boolean;
  bot_account?: boolean;
  show_bot_accounts?: boolean;
  show_read_posts?: boolean;
  show_new_post_notifs?: boolean;
  auth: string;
}

export interface ChangePassword {
  new_password: string;
  new_password_verify: string;
  old_password: string;
  auth: string;
}

/**
 * The `jwt` string should be stored and used anywhere `auth` is called for.
 */
export interface LoginResponse {
  jwt: string;
}

/**
 * `username` can only be used for local users. To get details for a federated user, pass `user_id` instead.
 */
export interface GetPersonDetails {
  person_id?: number;
  username?: string;
  sort?: string;
  page?: number;
  limit?: number;
  community_id?: number;
  saved_only?: boolean;
  auth?: string;
}

export interface GetPersonDetailsResponse {
  person_view: PersonViewSafe;
  follows: CommunityFollowerView[];
  community_blocks: CommunityBlockView[];
  person_blocks: PersonBlockView[];
  moderates: CommunityModeratorView[];
  comments: CommentView[];
  posts: PostView[];
}

export interface GetRepliesResponse {
  replies: CommentView[];
}

export interface GetPersonMentionsResponse {
  mentions: PersonMentionView[];
}

export interface MarkAllAsRead {
  auth: string;
}

export interface AddAdmin {
  person_id: number;
  added: boolean;
  auth: string;
}

export interface AddAdminResponse {
  admins: PersonViewSafe[];
}

export interface BanPerson {
  person_id: number;
  ban: boolean;
  remove_data?: boolean; // Removes/Restores their comments, posts, and communities
  reason?: string;
  expires?: number;
  auth: string;
}

export interface BanPersonResponse {
  person_view: PersonViewSafe;
  banned: boolean;
}

export interface GetReplies {
  sort?: string;
  page?: number;
  limit?: number;
  unread_only?: boolean;
  auth: string;
}

export interface GetPersonMentions {
  sort?: string;
  page?: number;
  limit?: number;
  unread_only?: boolean;
  auth: string;
}

export interface MarkPersonMentionAsRead {
  person_mention_id: number;
  read: boolean;
  auth: string;
}

export interface PersonMentionResponse {
  person_mention_view: PersonMentionView;
}

/**
 * Permanently deletes your posts and comments
 */
export interface DeleteAccount {
  password: string;
  auth: string;
}

export interface PasswordReset {
  email: string;
}

export interface PasswordResetResponse {}

export interface PasswordChange {
  token: string;
  password: string;
  password_verify: string;
}

export interface CreatePrivateMessage {
  content: string;
  recipient_id: number;
  auth: string;
}

export interface EditPrivateMessage {
  private_message_id: number;
  content: string;
  auth: string;
}

export interface DeletePrivateMessage {
  private_message_id: number;
  deleted: boolean;
  auth: string;
}

export interface MarkPrivateMessageAsRead {
  private_message_id: number;
  read: boolean;
  auth: string;
}

export interface GetPrivateMessages {
  unread_only?: boolean;
  page?: number;
  limit?: number;
  auth: string;
}

export interface PrivateMessagesResponse {
  private_messages: PrivateMessageView[];
}

export interface PrivateMessageResponse {
  private_message_view: PrivateMessageView;
}

/**
 * If a community is supplied, returns the report count for only that community, otherwise returns the report count for all communities the user moderates.
 */
export interface GetReportCount {
  community?: number;
  auth: string;
}

export interface GetReportCountResponse {
  community?: number;
  comment_reports: number;
  post_reports: number;
}

export interface BlockPerson {
  person_id: number;
  block: boolean;
  auth: string;
}

export interface BlockPersonResponse {
  person_view: PersonViewSafe;
  blocked: boolean;
}
