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
  PasswordChangeAfterReset,
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
