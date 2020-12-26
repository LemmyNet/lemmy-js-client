import {
  CommentView,
  CommunityFollowerView,
  CommunityModeratorView,
  PostView,
  PrivateMessageView,
  UserMentionView,
  UserViewDangerous,
  UserViewSafe,
} from '../views';

export interface Login {
  username_or_email: string;
  password: string;
}

export interface Register {
  username: string;
  email?: string;
  password: string;
  password_verify: string;
  admin: boolean;
  show_nsfw: boolean;
  captcha_uuid?: string;
  captcha_answer?: string;
}

export interface GetCaptcha {}

export interface GetCaptchaResponse {
  ok?: CaptchaResponse;
}

export interface CaptchaResponse {
  png: string; // A Base64 encoded png
  wav?: string; // A Base64 encoded wav aud,
  uuid: string;
}

export interface SaveUserSettings {
  show_nsfw: boolean;
  theme: string;
  default_sort_type: number;
  default_listing_type: number;
  lang: string;
  avatar?: string;
  banner?: string;
  preferred_username?: string;
  email?: string;
  bio?: string;
  matrix_user_id?: string;
  new_password?: string;
  new_password_verify?: string;
  old_password?: string;
  show_avatars: boolean;
  send_notifications_to_email: boolean;
  auth: string;
}

export interface LoginResponse {
  jwt: string;
}

export interface GetUserDetails {
  user_id?: number;
  username?: string;
  sort: string;
  page?: number;
  limit?: number;
  community_id?: number;
  saved_only: boolean;
  auth?: string;
}

export interface GetUserDetailsResponse {
  user_view?: UserViewSafe;
  user_view_dangerous?: UserViewDangerous;
  follows: CommunityFollowerView[];
  moderates: CommunityModeratorView[];
  comments: CommentView[];
  posts: PostView[];
}

export interface GetRepliesResponse {
  replies: CommentView[];
}

export interface GetUserMentionsResponse {
  mentions: UserMentionView[];
}

export interface MarkAllAsRead {
  auth: string;
}

export interface AddAdmin {
  user_id: number;
  added: boolean;
  auth: string;
}

export interface AddAdminResponse {
  admins: UserViewSafe[];
}

export interface BanUser {
  user_id: number;
  ban: boolean;
  remove_data: boolean;
  reason?: string;
  expires?: number;
  auth: string;
}

export interface BanUserResponse {
  user_view: UserViewSafe;
  banned: boolean;
}

export interface GetReplies {
  sort: string;
  page?: number;
  limit?: number;
  unread_only: boolean;
  auth: string;
}

export interface GetUserMentions {
  sort: string;
  page?: number;
  limit?: number;
  unread_only: boolean;
  auth: string;
}

export interface MarkUserMentionAsRead {
  user_mention_id: number;
  read: boolean;
  auth: string;
}

export interface UserMentionResponse {
  user_mention_view: UserMentionView;
}

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
  edit_id: number;
  content: string;
  auth: string;
}

export interface DeletePrivateMessage {
  edit_id: number;
  deleted: boolean;
  auth: string;
}

export interface MarkPrivateMessageAsRead {
  edit_id: number;
  read: boolean;
  auth: string;
}

export interface GetPrivateMessages {
  unread_only: boolean;
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

export interface UserJoin {
  auth: string;
}

export interface UserJoinResponse {
  joined: boolean;
}

export interface GetReportCount {
  community?: number;
  auth: string;
}

export interface GetReportCountResponse {
  community?: number;
  comment_reports: number;
  post_reports: number;
}
