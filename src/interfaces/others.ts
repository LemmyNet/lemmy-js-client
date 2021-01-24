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
  ListCategories,
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
  GetFollowedCommunities,
  GetUserDetails,
  GetReplies,
  GetUserMentions,
  MarkUserMentionAsRead,
  GetModlog,
  BanFromCommunity,
  AddModToCommunity,
  CreateSite,
  EditSite,
  GetSite,
  AddAdmin,
  BanUser,
  Search,
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
