import { CommentSortType, ListingType, SortType } from "../others";
import {
  CommentReplyView,
  CommentView,
  CommunityModeratorView,
  PersonMentionView,
  PersonView,
  PostView,
  PrivateMessageReportView,
  PrivateMessageView,
} from "../views";

export interface Login {
  username_or_email: string;
  password: string;
  /**
   * If your user has 2fa set up, they must provide the token, otherwise you will receive the error "missing_totp_token"
   */
  totp_2fa_token?: string;
}

/**
 * Register a new user.
 *
 * Only the first user to register will be able to be the admin.
 */
export interface Register {
  username: string;
  /**
   * Email is mandatory if email verification is enabled on the server
   */
  email?: string;
  password: string;
  password_verify: string;
  show_nsfw: boolean;
  /**
   * Captcha is only checked if these are enabled in the server.
   */
  captcha_uuid?: string;
  captcha_answer?: string;
  honeypot?: string;
  /**
   * An answer is mandatory if require application is enabled on the server
   */
  answer?: string;
}

export interface GetCaptcha {}

export interface GetCaptchaResponse {
  /**
   * Will be undefined if captchas are disabled.
   */
  ok?: CaptchaResponse;
}

export interface CaptchaResponse {
  /**
   * A Base64 encoded png.
   */
  png: string;

  /**
   * A Base64 encoded wav file.
   */
  wav?: string;

  /**
   * A UUID to match the one given on request.
   */
  uuid: string;
}

export interface SaveUserSettings {
  show_nsfw?: boolean;

  /**
   * Default for this is `browser`.
   */
  theme?: string;

  /**
   * The [[SortType]].
   *
   * The Sort types from above, zero indexed as a number
   */
  default_sort_type?: SortType;

  /**
   * The [[ListingType]].
   *
   * Post listing types are `All, Subscribed, Community`
   */
  default_listing_type?: ListingType;
  interface_language?: string;
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
  discussion_languages?: number[];
  /**
   * If this is set to true, lemmy will generate or regenerate a 2-factor (totp) authentication secret.
   * You can then use the `totp_2fa_url` from [[LocalUserSettings]] to set up your authenticator app.
   *
   * If this is set to false, it will remove 2-factor for your account.
   *
   * If this is undefined, it leaves your 2-factor setup as is.
   */
  generate_totp_2fa?: boolean;
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
  /**
   * This is None in response to `Register` if email verification is enabled, or the server requires registration applications.
   */
  jwt?: string;
  verify_email_sent: boolean;
  registration_created: boolean;
}

export interface GetPersonDetails {
  person_id?: number;
  /**
   * To get details for a federated user, use `person@instance.tld`.
   */
  username?: string;
  sort?: SortType;
  page?: number;
  limit?: number;
  community_id?: number;
  saved_only?: boolean;
  auth?: string;
}

export interface GetPersonDetailsResponse {
  person_view: PersonView;
  comments: CommentView[];
  posts: PostView[];
  moderates: CommunityModeratorView[];
}

export interface GetRepliesResponse {
  replies: CommentReplyView[];
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
  admins: PersonView[];
}

export interface BanPerson {
  person_id: number;
  ban: boolean;

  /**
   * Removes/Restores their comments, posts, and communities
   */
  remove_data?: boolean;
  reason?: string;
  /**
   * The expire time in Unix seconds
   */
  expires?: number;
  auth: string;
}

export interface BanPersonResponse {
  person_view: PersonView;
  banned: boolean;
}

export interface GetReplies {
  sort?: CommentSortType;
  page?: number;
  limit?: number;
  unread_only?: boolean;
  auth: string;
}

export interface GetPersonMentions {
  sort?: CommentSortType;
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

export interface MarkCommentReplyAsRead {
  comment_reply_id: number;
  read: boolean;
  auth: string;
}

export interface CommentReplyResponse {
  comment_reply_view: CommentReplyView;
}

/**
 * Permanently deletes your posts and comments
 */
export interface DeleteAccount {
  password: string;
  auth: string;
}

export interface DeleteAccountResponse {}

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

export interface CreatePrivateMessageReport {
  private_message_id: number;
  reason: string;
  auth: string;
}

export interface PrivateMessageReportResponse {
  private_message_report_view: PrivateMessageReportView;
}

export interface ResolvePrivateMessageReport {
  report_id: number;
  resolved: boolean;
  auth: string;
}

export interface ListPrivateMessageReports {
  page?: number;
  limit?: number;
  /// Only shows the unresolved reports
  unresolved_only?: boolean;
  auth: string;
}

export interface ListPrivateMessageReportsResponse {
  private_message_reports: PrivateMessageReportView[];
}

export interface GetReportCount {
  /**
   * If a community is supplied, returns the report count for only that community, otherwise returns the report count for all communities the user moderates.
   */
  community_id?: number;
  auth: string;
}

export interface GetReportCountResponse {
  community_id?: number;
  comment_reports: number;
  post_reports: number;
  private_message_reports?: number;
}

export interface GetUnreadCount {
  auth: string;
}

export interface GetUnreadCountResponse {
  replies: number;
  mentions: number;
  private_messages: number;
}

export interface VerifyEmail {
  token: string;
}

export interface VerifyEmailResponse {}

export interface BlockPerson {
  person_id: number;
  block: boolean;
  auth: string;
}

export interface BlockPersonResponse {
  person_view: PersonView;
  blocked: boolean;
}

export interface GetBannedPersons {
  auth: string;
}

export interface BannedPersonsResponse {
  banned: PersonView[];
}
