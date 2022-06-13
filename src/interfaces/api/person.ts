import { Option, Some } from "@sniptt/monads";
import { Expose, Transform } from "class-transformer";
import { toUndefined } from "../../utils";
import { SortType } from "../others";
import {
  CommentView,
  CommunityModeratorView,
  PersonMentionView,
  PersonViewSafe,
  PostView,
  PrivateMessageView,
} from "../views";

export class Login {
  username_or_email: string;
  password: string;

  constructor(username_or_email: string, password: string) {
    this.username_or_email = username_or_email;
    this.password = password;
  }
}

/**
 * Register a new user.
 *
 * Only the first user to register will be able to be the admin.
 */
export class Register {
  username: string;
  /**
   * Email is mandatory if email verification is enabled on the server
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  email: Option<string>;
  password: string;
  password_verify: string;
  show_nsfw: boolean;
  /**
   * Captcha is only checked if these are enabled in the server.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  captcha_uuid: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  captcha_answer: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  honeypot: Option<string>;
  /**
   * An answer is mandatory if require application is enabled on the server
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  answer: Option<string>;

  constructor(
    username: string,
    email: Option<string>,
    password: string,
    password_verify: string,
    show_nsfw: boolean,
    captcha_uuid: Option<string>,
    captcha_answer: Option<string>,
    honeypot: Option<string>,
    answer: Option<string>
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.password_verify = password_verify;
    this.show_nsfw = show_nsfw;
    this.captcha_uuid = captcha_uuid;
    this.captcha_answer = captcha_answer;
    this.honeypot = honeypot;
    this.answer = answer;
  }
}

export class GetCaptcha {}

export class GetCaptchaResponse {
  /**
   * Will be undefined if captchas are disabled.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  ok: Option<CaptchaResponse>;
}

export class CaptchaResponse {
  /**
   * A Base64 encoded png.
   */
  png: string;

  /**
   * A Base64 encoded wav file.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  wav: Option<string>;

  /**
   * A UUID to match the one given on request.
   */
  uuid: string;
}

export class SaveUserSettings {
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  show_nsfw: Option<boolean>;

  /**
   * Default for this is `browser`.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  theme: Option<string>;

  /**
   * The [[SortType]].
   *
   * The Sort types from above, zero indexed as a number
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  default_sort_type: Option<number>;

  /**
   * The [[ListingType]].
   *
   * Post listing types are `All, Subscribed, Community`
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  default_listing_type: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  lang: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  avatar: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banner: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  display_name: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  email: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  bio: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  matrix_user_id: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  show_avatars: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  show_scores: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  send_notifications_to_email: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  bot_account: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  show_bot_accounts: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  show_read_posts: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  show_new_post_notifs: Option<boolean>;
  auth: string;

  constructor(
    show_nsfw: Option<boolean>,
    theme: Option<string>,
    default_sort_type: Option<number>,
    default_listing_type: Option<number>,
    lang: Option<string>,
    avatar: Option<string>,
    banner: Option<string>,
    display_name: Option<string>,
    email: Option<string>,
    bio: Option<string>,
    matrix_user_id: Option<string>,
    show_avatars: Option<boolean>,
    show_scores: Option<boolean>,
    send_notifications_to_email: Option<boolean>,
    bot_account: Option<boolean>,
    show_bot_accounts: Option<boolean>,
    show_read_posts: Option<boolean>,
    show_new_post_notifs: Option<boolean>,
    auth: string
  ) {
    this.show_nsfw = show_nsfw;
    this.theme = theme;
    this.default_sort_type = default_sort_type;
    this.default_listing_type = default_listing_type;
    this.lang = lang;
    this.avatar = avatar;
    this.banner = banner;
    this.display_name = display_name;
    this.email = email;
    this.bio = bio;
    this.matrix_user_id = matrix_user_id;
    this.show_avatars = show_avatars;
    this.show_scores = show_scores;
    this.send_notifications_to_email = send_notifications_to_email;
    this.bot_account = bot_account;
    this.show_bot_accounts = show_bot_accounts;
    this.show_read_posts = show_read_posts;
    this.show_new_post_notifs = show_new_post_notifs;
    this.auth = auth;
  }
}

export class ChangePassword {
  new_password: string;
  new_password_verify: string;
  old_password: string;
  auth: string;

  constructor(
    new_password: string,
    new_password_verify: string,
    old_password: string,
    auth: string
  ) {
    this.new_password = new_password;
    this.new_password_verify = new_password_verify;
    this.old_password = old_password;
    this.auth = auth;
  }
}

/**
 * The `jwt` string should be stored and used anywhere `auth` is called for.
 */
export class LoginResponse {
  /**
   * This is None in response to `Register` if email verification is enabled, or the server requires registration applications.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  jwt: Option<string>;
  verify_email_sent: boolean;
  registration_created: boolean;
}

export class GetPersonDetails {
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  person_id: Option<number>;
  /**
   * To get details for a federated user, use `person@instance.tld`.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  username: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  sort: Option<SortType>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_id: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  saved_only: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;

  constructor(
    person_id: Option<number>,
    username: Option<string>,
    sort: Option<SortType>,
    page: Option<number>,
    limit: Option<number>,
    community_id: Option<number>,
    saved_only: Option<boolean>,
    auth: Option<string>
  ) {
    this.person_id = person_id;
    this.username = username;
    this.sort = sort;
    this.page = page;
    this.limit = limit;
    this.community_id = community_id;
    this.saved_only = saved_only;
    this.auth = auth;
  }
}

export class GetPersonDetailsResponse {
  person_view: PersonViewSafe;
  comments: CommentView[];
  posts: PostView[];
  moderates: CommunityModeratorView[];
}

export class GetRepliesResponse {
  replies: CommentView[];
}

export class GetPersonMentionsResponse {
  mentions: PersonMentionView[];
}

export class MarkAllAsRead {
  auth: string;

  constructor(auth: string) {
    this.auth = auth;
  }
}

export class AddAdmin {
  person_id: number;
  added: boolean;
  auth: string;

  constructor(person_id: number, added: boolean, auth: string) {
    this.person_id = person_id;
    this.added = added;
    this.auth = auth;
  }
}

export class AddAdminResponse {
  admins: PersonViewSafe[];
}

export class BanPerson {
  person_id: number;
  ban: boolean;

  /**
   * Removes/Restores their comments, posts, and communities
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  remove_data: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  /**
   * The expire time in Unix seconds
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  expires: Option<number>;
  auth: string;

  constructor(
    person_id: number,
    ban: boolean,
    remove_data: Option<boolean>,
    reason: Option<string>,
    expires: Option<number>,
    auth: string
  ) {
    this.person_id = person_id;
    this.ban = ban;
    this.remove_data = remove_data;
    this.reason = reason;
    this.expires = expires;
    this.auth = auth;
  }
}

export class BanPersonResponse {
  person_view: PersonViewSafe;
  banned: boolean;
}

export class GetReplies {
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  sort: Option<SortType>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  unread_only: Option<boolean>;
  auth: string;

  constructor(
    sort: Option<SortType>,
    page: Option<number>,
    limit: Option<number>,
    unread_only: Option<boolean>,
    auth: string
  ) {
    this.sort = sort;
    this.page = page;
    this.limit = limit;
    this.unread_only = unread_only;
    this.auth = auth;
  }
}

export class GetPersonMentions {
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  sort: Option<SortType>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  unread_only: Option<boolean>;
  auth: string;

  constructor(
    sort: Option<SortType>,
    page: Option<number>,
    limit: Option<number>,
    unread_only: Option<boolean>,
    auth: string
  ) {
    this.sort = sort;
    this.page = page;
    this.limit = limit;
    this.unread_only = unread_only;
    this.auth = auth;
  }
}

export class MarkPersonMentionAsRead {
  person_mention_id: number;
  read: boolean;
  auth: string;

  constructor(person_mention_id: number, read: boolean, auth: string) {
    this.person_mention_id = person_mention_id;
    this.read = read;
    this.auth = auth;
  }
}

export class PersonMentionResponse {
  person_mention_view: PersonMentionView;
}

/**
 * Permanently deletes your posts and comments
 */
export class DeleteAccount {
  password: string;
  auth: string;

  constructor(password: string, auth: string) {
    this.password = password;
    this.auth = auth;
  }
}

export class DeleteAccountResponse {}

export class PasswordReset {
  email: string;

  constructor(email: string) {
    this.email = email;
  }
}

export class PasswordResetResponse {}

export class PasswordChange {
  token: string;
  password: string;
  password_verify: string;

  constructor(token: string, password: string, password_verify: string) {
    this.token = token;
    this.password = password;
    this.password_verify = password_verify;
  }
}

export class CreatePrivateMessage {
  content: string;
  recipient_id: number;
  auth: string;

  constructor(content: string, recipient_id: number, auth: string) {
    this.content = content;
    this.recipient_id = recipient_id;
    this.auth = auth;
  }
}

export class EditPrivateMessage {
  private_message_id: number;
  content: string;
  auth: string;

  constructor(private_message_id: number, content: string, auth: string) {
    this.private_message_id = private_message_id;
    this.content = content;
    this.auth = auth;
  }
}

export class DeletePrivateMessage {
  private_message_id: number;
  deleted: boolean;
  auth: string;

  constructor(private_message_id: number, deleted: boolean, auth: string) {
    this.private_message_id = private_message_id;
    this.deleted = deleted;
    this.auth = auth;
  }
}

export class MarkPrivateMessageAsRead {
  private_message_id: number;
  read: boolean;
  auth: string;

  constructor(private_message_id: number, read: boolean, auth: string) {
    this.private_message_id = private_message_id;
    this.read = read;
    this.auth = auth;
  }
}

export class GetPrivateMessages {
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  unread_only: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  auth: string;
}

export class PrivateMessagesResponse {
  private_messages: PrivateMessageView[];
}

export class PrivateMessageResponse {
  private_message_view: PrivateMessageView;
}

export class GetReportCount {
  /**
   * If a community is supplied, returns the report count for only that community, otherwise returns the report count for all communities the user moderates.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_id: Option<number>;
  auth: string;

  constructor(community_id: Option<number>, auth: string) {
    this.community_id = community_id;
    this.auth = auth;
  }
}

export class GetReportCountResponse {
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_id: Option<number>;
  comment_reports: number;
  post_reports: number;
}

export class GetUnreadCount {
  auth: string;

  constructor(auth: string) {
    this.auth = auth;
  }
}

export class GetUnreadCountResponse {
  replies: number;
  mentions: number;
  private_messages: number;
}

export class VerifyEmail {
  token: string;

  constructor(token: string) {
    this.token = token;
  }
}

export class VerifyEmailResponse {}

export class BlockPerson {
  person_id: number;
  block: boolean;
  auth: string;

  constructor(person_id: number, block: boolean, auth: string) {
    this.person_id = person_id;
    this.block = block;
    this.auth = auth;
  }
}

export class BlockPersonResponse {
  person_view: PersonViewSafe;
  blocked: boolean;
}

export class GetBannedPersons {
  auth: string;

  constructor(auth: string) {
    this.auth = auth;
  }
}

export class BannedPersonsResponse {
  banned: PersonViewSafe[];
}
