import {
  AddAdmin,
  AddModToCommunity,
  ApproveRegistrationApplication,
  BanFromCommunity,
  BanPerson,
  BlockCommunity,
  BlockPerson,
  ChangePassword,
  CommunityJoin,
  CreateComment,
  CreateCommentLike,
  CreateCommentReport,
  CreateCommunity,
  CreatePost,
  CreatePostLike,
  CreatePostReport,
  CreatePrivateMessage,
  CreatePrivateMessageReport,
  CreateSite,
  DeleteAccount,
  DeleteComment,
  DeleteCommunity,
  DeletePost,
  DeletePrivateMessage,
  EditComment,
  EditCommunity,
  EditPost,
  EditPrivateMessage,
  EditSite,
  FollowCommunity,
  GetBannedPersons,
  GetComments,
  GetCommunity,
  GetModlog,
  GetPersonDetails,
  GetPersonMentions,
  GetPost,
  GetPosts,
  GetPrivateMessages,
  GetReplies,
  GetReportCount,
  GetSite,
  GetSiteMetadata,
  GetUnreadCount,
  GetUnreadRegistrationApplicationCount,
  LeaveAdmin,
  ListCommentReports,
  ListCommunities,
  ListPostReports,
  ListPrivateMessageReports,
  ListRegistrationApplications,
  LockPost,
  Login,
  MarkAllAsRead,
  MarkCommentReplyAsRead,
  MarkPersonMentionAsRead,
  MarkPostAsRead,
  MarkPrivateMessageAsRead,
  PasswordChange,
  PasswordReset,
  PostJoin,
  PurgeComment,
  PurgeCommunity,
  PurgePerson,
  PurgePost,
  Register,
  RemoveComment,
  RemoveCommunity,
  RemovePost,
  ResolveCommentReport,
  ResolveObject,
  ResolvePostReport,
  ResolvePrivateMessageReport,
  SaveComment,
  SavePost,
  SaveUserSettings,
  Search,
  StickyPost,
  TransferCommunity,
  UserJoin,
  VerifyEmail,
} from "./interfaces";
import { UnwrapOptions } from "./utils";

export type GetSiteInput = UnwrapOptions<GetSite>;
export type CreateSiteInput = UnwrapOptions<CreateSite>;
export type EditSiteInput = UnwrapOptions<EditSite>;
export type LeaveAdminInput = UnwrapOptions<UnwrapOptions<LeaveAdmin>>;
export type GetModlogInput = UnwrapOptions<GetModlog>;
export type SearchInput = UnwrapOptions<Search>;
export type ResolveObjectInput = UnwrapOptions<ResolveObject>;
export type CreateCommunityInput = UnwrapOptions<CreateCommunity>;
export type GetCommunityInput = UnwrapOptions<GetCommunity>;
export type EditCommunityInput = UnwrapOptions<EditCommunity>;
export type ListCommunitiesInput = UnwrapOptions<ListCommunities>;
export type FollowCommunityInput = UnwrapOptions<FollowCommunity>;
export type BlockCommunityInput = UnwrapOptions<BlockCommunity>;
export type DeleteCommunityInput = UnwrapOptions<DeleteCommunity>;
export type RemoveCommunityInput = UnwrapOptions<RemoveCommunity>;
export type TransferCommunityInput = UnwrapOptions<TransferCommunity>;
export type BanFromCommunityInput = UnwrapOptions<BanFromCommunity>;
export type AddModToCommunityInput = UnwrapOptions<AddModToCommunity>;
export type CreatePostInput = UnwrapOptions<CreatePost>;
export type GetPostInput = UnwrapOptions<GetPost>;
export type EditPostInput = UnwrapOptions<EditPost>;
export type DeletePostInput = UnwrapOptions<DeletePost>;
export type RemovePostInput = UnwrapOptions<RemovePost>;
export type MarkPostAsReadInput = UnwrapOptions<MarkPostAsRead>;
export type LockPostInput = UnwrapOptions<LockPost>;
export type StickyPostInput = UnwrapOptions<StickyPost>;
export type GetPostsInput = UnwrapOptions<GetPosts>;
export type CreatePostLikeInput = UnwrapOptions<CreatePostLike>;
export type SavePostInput = UnwrapOptions<SavePost>;
export type CreatePostReportInput = UnwrapOptions<CreatePostReport>;
export type ResolvePostReportInput = UnwrapOptions<ResolvePostReport>;
export type ListPostReportsInput = UnwrapOptions<ListPostReports>;
export type GetSiteMetadataInput = UnwrapOptions<GetSiteMetadata>;
export type CreateCommentInput = UnwrapOptions<CreateComment>;
export type EditCommentInput = UnwrapOptions<EditComment>;
export type DeleteCommentInput = UnwrapOptions<DeleteComment>;
export type RemoveCommentInput = UnwrapOptions<RemoveComment>;
export type MarkCommentReplyAsReadInput = UnwrapOptions<MarkCommentReplyAsRead>;
export type CreateCommentLikeInput = UnwrapOptions<CreateCommentLike>;
export type SaveCommentInput = UnwrapOptions<SaveComment>;
export type GetCommentsInput = UnwrapOptions<GetComments>;
export type CreateCommentReportInput = UnwrapOptions<CreateCommentReport>;
export type ResolveCommentReportInput = UnwrapOptions<ResolveCommentReport>;
export type ListCommentReportsInput = UnwrapOptions<ListCommentReports>;
export type GetPrivateMessagesInput = UnwrapOptions<GetPrivateMessages>;
export type CreatePrivateMessageInput = UnwrapOptions<CreatePrivateMessage>;
export type EditPrivateMessageInput = UnwrapOptions<EditPrivateMessage>;
export type DeletePrivateMessageInput = UnwrapOptions<DeletePrivateMessage>;
export type MarkPrivateMessageAsReadInput =
  UnwrapOptions<MarkPrivateMessageAsRead>;
export type CreatePrivateMessageReportInput =
  UnwrapOptions<CreatePrivateMessageReport>;
export type ResolvePrivateMessageReportInput =
  UnwrapOptions<ResolvePrivateMessageReport>;
export type ListPrivateMessageReportsInput =
  UnwrapOptions<ListPrivateMessageReports>;
export type RegisterInput = UnwrapOptions<Register>;
export type LoginInput = UnwrapOptions<Login>;
export type GetPersonDetailsInput = UnwrapOptions<GetPersonDetails>;
export type GetPersonMentionsInput = UnwrapOptions<GetPersonMentions>;
export type MarkPersonMentionAsReadInput =
  UnwrapOptions<MarkPersonMentionAsRead>;
export type GetRepliesInput = UnwrapOptions<GetReplies>;
export type BanPersonInput = UnwrapOptions<BanPerson>;
export type GetBannedPersonsInput = UnwrapOptions<GetBannedPersons>;
export type BlockPersonInput = UnwrapOptions<BlockPerson>;
export type DeleteAccountInput = UnwrapOptions<DeleteAccount>;
export type PasswordResetInput = UnwrapOptions<PasswordReset>;
export type PasswordChangeInput = UnwrapOptions<PasswordChange>;
export type MarkAllAsReadInput = UnwrapOptions<MarkAllAsRead>;
export type SaveUserSettingsInput = UnwrapOptions<SaveUserSettings>;
export type ChangePasswordInput = UnwrapOptions<ChangePassword>;
export type GetReportCountInput = UnwrapOptions<GetReportCount>;
export type GetUnreadCountInput = UnwrapOptions<GetUnreadCount>;
export type VerifyEmailInput = UnwrapOptions<VerifyEmail>;
export type AddAdminInput = UnwrapOptions<AddAdmin>;
export type GetUnreadRegistrationApplicationCountInput =
  UnwrapOptions<GetUnreadRegistrationApplicationCount>;
export type ListRegistrationApplicationsInput =
  UnwrapOptions<ListRegistrationApplications>;
export type ApproveRegistrationApplicationInput =
  UnwrapOptions<ApproveRegistrationApplication>;
export type PurgePersonInput = UnwrapOptions<PurgePerson>;
export type PurgeCommunityInput = UnwrapOptions<PurgeCommunity>;
export type PurgePostInput = UnwrapOptions<PurgePost>;
export type PurgeCommentInput = UnwrapOptions<PurgeComment>;
export type UserJoinInput = UnwrapOptions<UserJoin>;
export type PostJoinInput = UnwrapOptions<PostJoin>;
export type CommunityJoinInput = UnwrapOptions<CommunityJoin>;
