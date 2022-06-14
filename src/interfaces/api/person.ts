import { Option, Some } from "@sniptt/monads";
import { Expose, Transform, Type } from "class-transformer";
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

  constructor(init: Login) {
    Object.assign(this, init);
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

  constructor(init: Register) {
    Object.assign(this, init);
  }
}

export class GetCaptcha {}

export class GetCaptchaResponse {
  /**
   * Will be undefined if captchas are disabled.
   */
  @Type(() => CaptchaResponse)
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

  constructor(init: SaveUserSettings) {
    Object.assign(this, init);
  }
}

export class ChangePassword {
  new_password: string;
  new_password_verify: string;
  old_password: string;
  auth: string;

  constructor(init: ChangePassword) {
    Object.assign(this, init);
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

  constructor(init: GetPersonDetails) {
    Object.assign(this, init);
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

  constructor(init: AddAdmin) {
    Object.assign(this, init);
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

  constructor(init: BanPerson) {
    Object.assign(this, init);
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

  constructor(init: GetReplies) {
    Object.assign(this, init);
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

  constructor(init: GetPersonMentions) {
    Object.assign(this, init);
  }
}

export class MarkPersonMentionAsRead {
  person_mention_id: number;
  read: boolean;
  auth: string;

  constructor(init: MarkPersonMentionAsRead) {
    Object.assign(this, init);
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

  constructor(init: DeleteAccount) {
    Object.assign(this, init);
  }
}

export class DeleteAccountResponse {}

export class PasswordReset {
  email: string;

  constructor(init: PasswordReset) {
    Object.assign(this, init);
  }
}

export class PasswordResetResponse {}

export class PasswordChange {
  token: string;
  password: string;
  password_verify: string;

  constructor(init: PasswordChange) {
    Object.assign(this, init);
  }
}

export class CreatePrivateMessage {
  content: string;
  recipient_id: number;
  auth: string;

  constructor(init: CreatePrivateMessage) {
    Object.assign(this, init);
  }
}

export class EditPrivateMessage {
  private_message_id: number;
  content: string;
  auth: string;

  constructor(init: EditPrivateMessage) {
    Object.assign(this, init);
  }
}

export class DeletePrivateMessage {
  private_message_id: number;
  deleted: boolean;
  auth: string;

  constructor(init: DeletePrivateMessage) {
    Object.assign(this, init);
  }
}

export class MarkPrivateMessageAsRead {
  private_message_id: number;
  read: boolean;
  auth: string;

  constructor(init: MarkPrivateMessageAsRead) {
    Object.assign(this, init);
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

  constructor(init: GetPrivateMessages) {
    Object.assign(this, init);
  }
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

  constructor(init: GetReportCount) {
    Object.assign(this, init);
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

  constructor(init: GetUnreadCount) {
    Object.assign(this, init);
  }
}

export class GetUnreadCountResponse {
  replies: number;
  mentions: number;
  private_messages: number;
}

export class VerifyEmail {
  token: string;

  constructor(init: VerifyEmail) {
    Object.assign(this, init);
  }
}

export class VerifyEmailResponse {}

export class BlockPerson {
  person_id: number;
  block: boolean;
  auth: string;

  constructor(init: BlockPerson) {
    Object.assign(this, init);
  }
}

export class BlockPersonResponse {
  person_view: PersonViewSafe;
  blocked: boolean;
}

export class GetBannedPersons {
  auth: string;

  constructor(init: GetBannedPersons) {
    Object.assign(this, init);
  }
}

export class BannedPersonsResponse {
  banned: PersonViewSafe[];
}
