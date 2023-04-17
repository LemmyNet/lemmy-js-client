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
  FeaturePost,
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
  CreatePrivateMessageReport,
  ResolvePrivateMessageReport,
  ListPrivateMessageReports,
  GetPrivateMessages,
  UserJoin,
  GetComments,
  GetComment,
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
  CreateCustomEmoji,
  EditCustomEmoji,
  DeleteCustomEmoji,
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
 * The different types of registration modes
 */
export enum RegistrationMode {
  Closed = "Closed",
  RequireApplication = "RequireApplication",
  Open = "Open",
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
  ModFeaturePost = "ModFeaturePost",
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
 * Different Subscribed states
 */
export enum PostFeatureType {
  Local = "Local",
  Community = "Community",
}

/**
 * A holder for a site's metadata ( such as opengraph tags ), used for post links.
 */
export interface SiteMetadata {
  title?: string;
  description?: string;
  image?: string;
  html?: string;
}

export interface UploadImage {
  image: File | Buffer;
  /**
   * Optional if cookie with jwt set is already present. Otherwise, auth is required.
   */
  auth?: string;
}

export interface UploadImageResponse {
  /**
   * Is "ok" if the upload was successful; is something else otherwise.
   */
  msg: string;
  files?: ImageFile[];
  url?: string;
  delete_url?: string;
}

export interface ImageFile {
  file: string;
  delete_token: string;
}
