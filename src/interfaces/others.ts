export const VERSION = 'v3';

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
  MarkCommentAsRead,
  SaveComment,
  CreateCommentLike,
  GetPosts,
  CreatePostLike,
  EditPost,
  DeletePost,
  RemovePost,
  LockPost,
  StickyPost,
  SavePost,
  EditCommunity,
  DeleteCommunity,
  RemoveCommunity,
  FollowCommunity,
  GetPersonDetails,
  GetReplies,
  GetPersonMentions,
  MarkPersonMentionAsRead,
  GetModlog,
  BanFromCommunity,
  AddModToCommunity,
  CreateSite,
  EditSite,
  GetSite,
  AddAdmin,
  BanPerson,
  Search,
  ResolveObject,
  MarkAllAsRead,
  SaveUserSettings,
  TransferCommunity,
  TransferSite,
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
  GetSiteConfig,
  SaveSiteConfig,
  PostJoin,
  CommunityJoin,
  ChangePassword,
  GetSiteMetadata,
  BlockCommunity,
  BlockPerson,
}

/**
 * Different sort types used in lemmy.
 */
export enum SortType {
  /**
   * Posts sorted by the most recent comment.
   */
  Active = 'Active',
  /**
   * Posts sorted by the published time.
   */
  Hot = 'Hot',
  New = 'New',
  /**
   * The top posts for this last day.
   */
  TopDay = 'TopDay',
  /**
   * The top posts for this last week.
   */
  TopWeek = 'TopWeek',
  /**
   * The top posts for this last month.
   */
  TopMonth = 'TopMonth',
  /**
   * The top posts for this last year.
   */
  TopYear = 'TopYear',
  /**
   * The top posts of all time.
   */
  TopAll = 'TopAll',
  /**
   * Posts sorted by the most comments.
   */
  MostComments = 'MostComments',
  /**
   * Posts sorted by the newest comments, with no necrobumping. IE a forum sort.
   */
  NewComments = 'NewComments',
}

/**
 * The different listing types for post and comment fetches.
 */
export enum ListingType {
  All = 'All',
  Local = 'Local',
  Subscribed = 'Subscribed',
  Community = 'Community',
}

/**
 * Search types for lemmy's search.
 */
export enum SearchType {
  All = 'All',
  Comments = 'Comments',
  Posts = 'Posts',
  Communities = 'Communities',
  Users = 'Users',
  Url = 'Url',
}

/**
 * A websocket response. Includes the return type.
 * Can be used like:
 *
 * ```ts
 * if (op == UserOperation.Search) {
 *   let data = wsJsonToRes<SearchResponse>(msg).data;
 * }
 * ```
 */
export interface WebSocketResponse<ResponseType> {
  op: UserOperation;
  /**
   * This contains the data for a websocket response.
   *
   * The correct response type if given is in [[LemmyHttp]].
   */
  data: ResponseType;
}

/**
 * A websocket JSON response that includes the errors.
 */
export interface WebSocketJsonResponse<ResponseType> {
  op?: string;

  /**
   * This contains the data for a websocket response.
   *
   * The correct response type if given is in [[LemmyHttp]].
   */
  data?: ResponseType;
  error?: string;
  reconnect?: boolean;
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
