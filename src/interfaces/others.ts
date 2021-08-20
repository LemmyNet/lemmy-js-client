export const VERSION = 'v3';

/**
 * All of the websocket operations available
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

export enum SortType {
  Active = 'Active',
  Hot = 'Hot',
  New = 'New',
  TopDay = 'TopDay',
  TopWeek = 'TopWeek',
  TopMonth = 'TopMonth',
  TopYear = 'TopYear',
  TopAll = 'TopAll',
  MostComments = 'MostComments',
  NewComments = 'NewComments',
}

export enum ListingType {
  All = 'All',
  Local = 'Local',
  Subscribed = 'Subscribed',
  Community = 'Community',
}

export enum SearchType {
  All = 'All',
  Comments = 'Comments',
  Posts = 'Posts',
  Communities = 'Communities',
  Users = 'Users',
  Url = 'Url',
}

export interface WebSocketResponse<ResponseType> {
  op: UserOperation;
  data: ResponseType;
}

export interface WebSocketJsonResponse<ResponseType> {
  op?: string;
  data?: ResponseType;
  error?: string;
  reconnect?: boolean;
}

export interface SiteMetadata {
  title?: string;
  description?: string;
  image?: string;
  html?: string;
}
