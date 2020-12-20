import {
  CommentResponse,
  CreateComment,
  DeleteComment,
  EditComment,
  MarkCommentAsRead,
  RemoveComment,
  SaveComment,
} from './api/comment';
import {
  AddModToCommunity,
  AddModToCommunityResponse,
  BanFromCommunity,
  BanFromCommunityResponse,
  CommunityJoin,
  CommunityJoinResponse,
  CommunityResponse,
  CreateCommunity,
  DeleteCommunity,
  FollowCommunity,
  GetCommunity,
  GetFollowedCommunities,
  GetFollowedCommunitiesResponse,
  ListCommunities,
  ListCommunitiesResponse,
  RemoveCommunity,
  TransferCommunity,
} from './api/community';
import {
  CreatePostLike,
  DeletePost,
  GetPost,
  GetPosts,
  GetPostsResponse,
  LockPost,
  PostJoin,
  PostJoinResponse,
  PostResponse,
  RemovePost,
  StickyPost,
} from './api/post';
import {
  CreateSite,
  EditSite,
  GetModlog,
  GetModlogResponse,
  GetSite,
  GetSiteConfig,
  GetSiteConfigResponse,
  GetSiteResponse,
  ListCategoriesResponse,
  Search,
  SearchResponse,
  SiteResponse,
  TransferSite,
} from './api/site';
import {
  AddAdmin,
  AddAdminResponse,
  BanUser,
  BanUserResponse,
  DeleteAccount,
  DeletePrivateMessage,
  EditPrivateMessage,
  GetCaptchaResponse,
  GetPrivateMessages,
  GetReplies,
  GetRepliesResponse,
  GetUserDetails,
  GetUserMentions,
  GetUserMentionsResponse,
  Login,
  LoginResponse,
  MarkPrivateMessageAsRead,
  MarkUserMentionAsRead,
  PasswordChange,
  PasswordReset,
  PrivateMessageResponse,
  PrivateMessagesResponse,
  Register,
  SaveUserSettings,
  UserMentionResponse,
} from './api/user';
import { PrivateMessage } from './source';

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

export type MessageType =
  | Login
  | Register
  | CreateCommunity
  | GetCommunity
  | DeleteCommunity
  | RemoveCommunity
  | FollowCommunity
  | ListCommunities
  | GetFollowedCommunities
  | DeletePost
  | RemovePost
  | LockPost
  | StickyPost
  | GetPost
  | GetPosts
  | GetCommunity
  | CreateComment
  | EditComment
  | DeleteComment
  | RemoveComment
  | MarkCommentAsRead
  | SaveComment
  | CreatePostLike
  | BanFromCommunity
  | AddAdmin
  | AddModToCommunity
  | TransferCommunity
  | TransferSite
  | SaveComment
  | BanUser
  | GetUserDetails
  | GetReplies
  | GetUserMentions
  | MarkUserMentionAsRead
  | GetModlog
  | CreateSite
  | EditSite
  | GetSite
  | Search
  | SaveUserSettings
  | DeleteAccount
  | PasswordReset
  | PasswordChange
  | PrivateMessage
  | EditPrivateMessage
  | DeletePrivateMessage
  | MarkPrivateMessageAsRead
  | GetPrivateMessages
  | GetSiteConfig
  | PostJoin
  | CommunityJoin;

type ResponseType =
  | SiteResponse
  | GetFollowedCommunitiesResponse
  | ListCommunitiesResponse
  | GetPostsResponse
  | PostResponse
  | GetRepliesResponse
  | GetUserMentionsResponse
  | ListCategoriesResponse
  | CommunityResponse
  | CommentResponse
  | UserMentionResponse
  | LoginResponse
  | GetCaptchaResponse
  | GetModlogResponse
  | SearchResponse
  | BanFromCommunityResponse
  | AddModToCommunityResponse
  | BanUserResponse
  | AddAdminResponse
  | PrivateMessageResponse
  | PrivateMessagesResponse
  | GetSiteConfigResponse
  | GetSiteResponse
  | PostJoinResponse
  | CommunityJoinResponse;

export interface WebSocketResponse {
  op: UserOperation;
  data: ResponseType;
}

export interface WebSocketJsonResponse {
  op?: string;
  data?: ResponseType;
  error?: string;
  reconnect?: boolean;
}
