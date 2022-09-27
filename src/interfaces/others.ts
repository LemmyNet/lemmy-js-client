import { Option } from "@sniptt/monads";
import { Expose, Transform } from "class-transformer";
import { toOption, toUndefined } from "../utils";
export const VERSION = "v3";

/**
 * All of the websocket operations available.
 */
export enum UserOperation {
  Login,
  Register,
  GetCaptcha,
  CreateCommunity,
  CreatePost,
  ListCommunities,
  GetPost,
  GetCommunity,
  CreateComment,
  EditComment,
  DeleteComment,
  RemoveComment,
  SaveComment,
  CreateCommentLike,
  GetPosts,
  CreatePostLike,
  EditPost,
  DeletePost,
  RemovePost,
  LockPost,
  StickyPost,
  MarkPostAsRead,
  SavePost,
  EditCommunity,
  DeleteCommunity,
  RemoveCommunity,
  FollowCommunity,
  GetPersonDetails,
  GetReplies,
  GetPersonMentions,
  MarkPersonMentionAsRead,
  MarkCommentReplyAsRead,
  GetModlog,
  BanFromCommunity,
  AddModToCommunity,
  CreateSite,
  EditSite,
  GetSite,
  AddAdmin,
  GetUnreadRegistrationApplicationCount,
  ListRegistrationApplications,
  ApproveRegistrationApplication,
  BanPerson,
  GetBannedPersons,
  Search,
  ResolveObject,
  MarkAllAsRead,
  SaveUserSettings,
  TransferCommunity,
  LeaveAdmin,
  DeleteAccount,
  PasswordReset,
  PasswordChange,
  CreatePrivateMessage,
  EditPrivateMessage,
  DeletePrivateMessage,
  MarkPrivateMessageAsRead,
  GetPrivateMessages,
  UserJoin,
  GetComments,
  PostJoin,
  CommunityJoin,
  ChangePassword,
  GetSiteMetadata,
  BlockCommunity,
  BlockPerson,
  PurgePerson,
  PurgeCommunity,
  PurgePost,
  PurgeComment,
  CreateCommentReport,
  ResolveCommentReport,
  ListCommentReports,
  CreatePostReport,
  ResolvePostReport,
  ListPostReports,
  GetReportCount,
  GetUnreadCount,
  VerifyEmail,
}

/**
 * Different post sort types used in lemmy.
 */
export enum SortType {
  /**
   * Posts sorted by hot, but bumped by new comments up to 2 days
   */
  Active = "Active",
  /**
   * Posts sorted by a decaying rank.
   */
  Hot = "Hot",
  /**
   * Posts sorted by the published time.
   */
  New = "New",
  /**
   * Posts sorted by the published time ascending
   */
  Old = "Old",
  /**
   * The top posts for this last day.
   */
  TopDay = "TopDay",
  /**
   * The top posts for this last week.
   */
  TopWeek = "TopWeek",
  /**
   * The top posts for this last month.
   */
  TopMonth = "TopMonth",
  /**
   * The top posts for this last year.
   */
  TopYear = "TopYear",
  /**
   * The top posts of all time.
   */
  TopAll = "TopAll",
  /**
   * Posts sorted by the most comments.
   */
  MostComments = "MostComments",
  /**
   * Posts sorted by the newest comments, with no necrobumping. IE a forum sort.
   */
  NewComments = "NewComments",
}

/**
 * Different comment sort types used in lemmy.
 */
export enum CommentSortType {
  /**
   * Comments sorted by a decaying rank.
   */
  Hot = "Hot",
  /**
   * Comments sorted by top score.
   */
  Top = "Top",
  /**
   * Comments sorted by new.
   */
  New = "New",
  /**
   * Comments sorted by old.
   */
  Old = "Old",
}

/**
 * The different listing types for post and comment fetches.
 */
export enum ListingType {
  All = "All",
  Local = "Local",
  Subscribed = "Subscribed",
  Community = "Community",
}

/**
 * Search types for lemmy's search.
 */
export enum SearchType {
  All = "All",
  Comments = "Comments",
  Posts = "Posts",
  Communities = "Communities",
  Users = "Users",
  Url = "Url",
}

/**
 * Mod log action types
 */
export enum ModlogActionType {
  All = "All",
  ModRemovePost = "ModRemovePost",
  ModLockPost = "ModLockPost",
  ModStickyPost = "ModStickyPost",
  ModRemoveComment = "ModRemoveComment",
  ModRemoveCommunity = "ModRemoveCommunity",
  ModBanFromCommunity = "ModBanFromCommunity",
  ModAddCommunity = "ModAddCommunity",
  ModTransferCommunity = "ModTransferCommunity",
  ModAdd = "ModAdd",
  ModBan = "ModBan",
  ModHideCommunity = "ModHideCommunity",
  AdminPurgePerson = "AdminPurgePerson",
  AdminPurgeCommunity = "AdminPurgeCommunity",
  AdminPurgePost = "AdminPurgePost",
  AdminPurgeComment = "AdminPurgeComment",
}

/**
 * Different Subscribed states
 */
export enum SubscribedType {
  Subscribed = "Subscribed",
  NotSubscribed = "NotSubscribed",
  Pending = "Pending",
}

/**
 * A holder for a site's metadata ( such as opengraph tags ), used for post links.
 */
export class SiteMetadata {
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  title: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  description: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  image: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  html: Option<string>;

  constructor(init: SiteMetadata) {
    Object.assign(this, init);
  }
}
