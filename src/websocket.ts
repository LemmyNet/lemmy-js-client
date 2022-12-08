import { ClassConstructor, deserialize, serialize } from "class-transformer";

import {
  AddAdminInput,
  AddModToCommunityInput,
  ApproveRegistrationApplicationInput,
  BanFromCommunityInput,
  BanPersonInput,
  BlockCommunityInput,
  BlockPersonInput,
  ChangePasswordInput,
  CommunityJoinInput,
  CreateCommentInput,
  CreateCommentLikeInput,
  CreateCommentReportInput,
  CreateCommunityInput,
  CreatePostInput,
  CreatePostLikeInput,
  CreatePostReportInput,
  CreatePrivateMessageInput,
  CreatePrivateMessageReportInput,
  CreateSiteInput,
  DeleteAccountInput,
  DeleteCommentInput,
  DeleteCommunityInput,
  DeletePostInput,
  DeletePrivateMessageInput,
  EditCommentInput,
  EditCommunityInput,
  EditPostInput,
  EditPrivateMessageInput,
  EditSiteInput,
  FollowCommunityInput,
  GetBannedPersonsInput,
  GetCommentsInput,
  GetCommunityInput,
  GetModlogInput,
  GetPersonDetailsInput,
  GetPersonMentionsInput,
  GetPostInput,
  GetPostsInput,
  GetPrivateMessagesInput,
  GetRepliesInput,
  GetReportCountInput,
  GetSiteInput,
  GetSiteMetadataInput,
  GetUnreadCountInput,
  GetUnreadRegistrationApplicationCountInput,
  LeaveAdminInput,
  ListCommentReportsInput,
  ListCommunitiesInput,
  ListPostReportsInput,
  ListPrivateMessageReportsInput,
  ListRegistrationApplicationsInput,
  LockPostInput,
  LoginInput,
  MarkAllAsReadInput,
  MarkCommentReplyAsReadInput,
  MarkPersonMentionAsReadInput,
  MarkPostAsReadInput,
  MarkPrivateMessageAsReadInput,
  PasswordChangeInput,
  PasswordResetInput,
  PostJoinInput,
  PurgeCommentInput,
  PurgeCommunityInput,
  PurgePersonInput,
  PurgePostInput,
  RegisterInput,
  RemoveCommentInput,
  RemoveCommunityInput,
  RemovePostInput,
  ResolveCommentReportInput,
  ResolveObjectInput,
  ResolvePostReportInput,
  ResolvePrivateMessageReportInput,
  SaveCommentInput,
  SavePostInput,
  SaveUserSettingsInput,
  SearchInput,
  StickyPostInput,
  TransferCommunityInput,
  UserJoinInput,
  VerifyEmailInput,
} from "./inputTypes";
import { UserOperation } from "./interfaces/others";

/**
 * Helps build lemmy websocket message requests, that you can use in your Websocket sends.
 *
 * You'll receive back a [[WebSocketResponse]].
 *
 * The return types for these are given in [[LemmyHttp]]
 */
export class LemmyWebsocket {
  constructor() {}

  /**
   * Log into lemmy.
   */
  login(form: LoginInput): string {
    return wrapper(UserOperation.Login, form);
  }

  /**
   * A websocket join for your user.
   *
   * Allows your user to receive private messages and notifications.
   */
  userJoin(form: UserJoinInput): string {
    return wrapper(UserOperation.UserJoin, form);
  }

  /**
   * A websocket join for the current post room.
   *
   * Allows your user to receive new comments and updates for that post.
   */
  postJoin(form: PostJoinInput): string {
    return wrapper(UserOperation.PostJoin, form);
  }

  /**
   * A websocket join for a given community.
   *
   * Allows your user to receive community updates.
   *
   * Note: community_id: 0, is your front page.
   */
  communityJoin(form: CommunityJoinInput): string {
    return wrapper(UserOperation.CommunityJoin, form);
  }

  /**
   * Register a new user.
   */
  register(register: RegisterInput) {
    return wrapper(UserOperation.Register, register);
  }

  /**
   * Fetch a Captcha.
   */
  getCaptcha() {
    return wrapper(UserOperation.GetCaptcha, {});
  }

  /**
   * Create a new community.
   */
  createCommunity(form: CreateCommunityInput) {
    return wrapper(UserOperation.CreateCommunity, form);
  }

  /**
   * Edit a community.
   */
  editCommunity(form: EditCommunityInput) {
    return wrapper(UserOperation.EditCommunity, form);
  }

  /**
   * Delete a community.
   */
  deleteCommunity(form: DeleteCommunityInput) {
    return wrapper(UserOperation.DeleteCommunity, form);
  }

  /**
   * A moderator remove for a community.
   */
  removeCommunity(form: RemoveCommunityInput) {
    return wrapper(UserOperation.RemoveCommunity, form);
  }

  /**
   * Follow / subscribe to a community.
   */
  followCommunity(form: FollowCommunityInput) {
    return wrapper(UserOperation.FollowCommunity, form);
  }

  /**
   * List communities, with various filters.
   */
  listCommunities(form: ListCommunitiesInput = {}) {
    return wrapper(UserOperation.ListCommunities, form);
  }

  /**
   * Create a post.
   */
  createPost(form: CreatePostInput) {
    return wrapper(UserOperation.CreatePost, form);
  }

  /**
   * Get / fetch a post.
   */
  getPost(form: GetPostInput = {}) {
    return wrapper(UserOperation.GetPost, form);
  }

  /**
   * Get / fetch a community.
   */
  getCommunity(form: GetCommunityInput = {}) {
    return wrapper(UserOperation.GetCommunity, form);
  }

  /**
   * Create a comment.
   */
  createComment(form: CreateCommentInput) {
    return wrapper(UserOperation.CreateComment, form);
  }

  /**
   * Edit a comment.
   */
  editComment(form: EditCommentInput) {
    return wrapper(UserOperation.EditComment, form);
  }

  /**
   * Delete a comment.
   */
  deleteComment(form: DeleteCommentInput) {
    return wrapper(UserOperation.DeleteComment, form);
  }

  /**
   * A moderator remove for a comment.
   */
  removeComment(form: RemoveCommentInput) {
    return wrapper(UserOperation.RemoveComment, form);
  }

  /**
   * Mark a comment as read.
   */
  markCommentReplyAsRead(form: MarkCommentReplyAsReadInput) {
    return wrapper(UserOperation.MarkCommentReplyAsRead, form);
  }

  /**
   * Like / vote on a comment.
   */
  likeComment(form: CreateCommentLikeInput) {
    return wrapper(UserOperation.CreateCommentLike, form);
  }

  /**
   * Save a comment.
   */
  saveComment(form: SaveCommentInput) {
    return wrapper(UserOperation.SaveComment, form);
  }

  /**
   * Report a comment.
   */
  createCommentReport(form: CreateCommentReportInput) {
    return wrapper(UserOperation.CreateCommentReport, form);
  }

  /**
   * Resolve a comment report. Only a mod can do this.
   */
  resolveCommentReport(form: ResolveCommentReportInput) {
    return wrapper(UserOperation.ResolveCommentReport, form);
  }

  /**
   * List comment reports.
   */
  listCommentReports(form: ListCommentReportsInput) {
    return wrapper(UserOperation.ListCommentReports, form);
  }

  /**
   * Get / fetch posts, with various filters.
   */
  getPosts(form: GetPostsInput = {}) {
    return wrapper(UserOperation.GetPosts, form);
  }

  /**
   * Get / fetch comments.
   */
  getComments(form: GetCommentsInput = {}) {
    return wrapper(UserOperation.GetComments, form);
  }

  /**
   * Like / vote on a post.
   */
  likePost(form: CreatePostLikeInput) {
    return wrapper(UserOperation.CreatePostLike, form);
  }

  /**
   * Edit a post.
   */
  editPost(form: EditPostInput) {
    return wrapper(UserOperation.EditPost, form);
  }

  /**
   * Delete a post.
   */
  deletePost(form: DeletePostInput) {
    return wrapper(UserOperation.DeletePost, form);
  }

  /**
   * A moderator remove for a post.
   */
  removePost(form: RemovePostInput) {
    return wrapper(UserOperation.RemovePost, form);
  }

  /**
   * A moderator can lock a post ( IE disable new comments ).
   */
  lockPost(form: LockPostInput) {
    return wrapper(UserOperation.LockPost, form);
  }

  /**
   * A moderator can sticky a post ( IE stick it to the top of a community ).
   */
  stickyPost(form: StickyPostInput) {
    return wrapper(UserOperation.StickyPost, form);
  }

  /**
   * Mark a post as read.
   */
  markPostAsRead(form: MarkPostAsReadInput) {
    return wrapper(UserOperation.MarkPostAsRead, form);
  }

  /**
   * Save a post.
   */
  savePost(form: SavePostInput) {
    return wrapper(UserOperation.SavePost, form);
  }

  /**
   * Report a post.
   */
  createPostReport(form: CreatePostReportInput) {
    return wrapper(UserOperation.CreatePostReport, form);
  }

  /**
   * Resolve a post report. Only a mod can do this.
   */
  resolvePostReport(form: ResolvePostReportInput) {
    return wrapper(UserOperation.ResolvePostReport, form);
  }

  /**
   * List post reports.
   */
  listPostReports(form: ListPostReportsInput) {
    return wrapper(UserOperation.ListPostReports, form);
  }

  /**
   * Fetch metadata for any given site.
   */
  getSiteMetadata(form: GetSiteMetadataInput) {
    return wrapper(UserOperation.GetSiteMetadata, form);
  }

  /**
   * Ban a user from a community.
   */
  banFromCommunity(form: BanFromCommunityInput) {
    return wrapper(UserOperation.BanFromCommunity, form);
  }

  /**
   * Add a moderator to your community.
   */
  addModToCommunity(form: AddModToCommunityInput) {
    return wrapper(UserOperation.AddModToCommunity, form);
  }

  /**
   * Transfer your community to an existing moderator.
   */
  transferCommunity(form: TransferCommunityInput) {
    return wrapper(UserOperation.TransferCommunity, form);
  }

  /**
   * Leave the Site admins.
   */
  leaveAdmin(form: LeaveAdminInput) {
    return wrapper(UserOperation.LeaveAdmin, form);
  }

  /**
   * Ban a person from your site.
   */
  banPerson(form: BanPersonInput) {
    return wrapper(UserOperation.BanPerson, form);
  }

  /**
   * Get a list of banned users
   */
  getBannedPersons(form: GetBannedPersonsInput) {
    return wrapper(UserOperation.GetBannedPersons, form);
  }

  /**
   * Add an admin to your site.
   */
  addAdmin(form: AddAdminInput) {
    return wrapper(UserOperation.AddAdmin, form);
  }

  /**
   * Get the unread registration applications count.
   */
  getUnreadRegistrationApplicationCount(
    form: GetUnreadRegistrationApplicationCountInput
  ) {
    return wrapper(UserOperation.GetUnreadRegistrationApplicationCount, form);
  }

  /**
   * List the unread registration applications.
   */
  listRegistrationApplications(form: ListRegistrationApplicationsInput) {
    return wrapper(UserOperation.ListRegistrationApplications, form);
  }

  /**
   * Approve a registration application
   */
  approveRegistrationApplication(form: ApproveRegistrationApplicationInput) {
    return wrapper(UserOperation.ApproveRegistrationApplication, form);
  }

  /**
   * Get the details for a person.
   */
  getPersonDetails(form: GetPersonDetailsInput = {}) {
    return wrapper(UserOperation.GetPersonDetails, form);
  }

  /**
   * Get comment replies.
   */
  getReplies(form: GetRepliesInput) {
    return wrapper(UserOperation.GetReplies, form);
  }

  /**
   * Get mentions for your user.
   */
  getPersonMentions(form: GetPersonMentionsInput) {
    return wrapper(UserOperation.GetPersonMentions, form);
  }

  /**
   * Mark a person mention as read.
   */
  markPersonMentionAsRead(form: MarkPersonMentionAsReadInput) {
    return wrapper(UserOperation.MarkPersonMentionAsRead, form);
  }

  /**
   * Get the modlog.
   */
  getModlog(form: GetModlogInput) {
    return wrapper(UserOperation.GetModlog, form);
  }

  /**
   * Create your site.
   */
  createSite(form: CreateSiteInput) {
    return wrapper(UserOperation.CreateSite, form);
  }

  /**
   * Edit your site.
   */
  editSite(form: EditSiteInput) {
    return wrapper(UserOperation.EditSite, form);
  }

  /**
   * Gets the site, and your user data.
   */
  getSite(form: GetSiteInput = {}) {
    return wrapper(UserOperation.GetSite, form);
  }

  /**
   * Search lemmy.
   */
  search(form: SearchInput) {
    return wrapper(UserOperation.Search, form);
  }

  /**
   * Fetch a non-local / federated object.
   */
  resolveObject(form: ResolveObjectInput) {
    return wrapper(UserOperation.ResolveObject, form);
  }

  /**
   * Mark all replies as read.
   */
  markAllAsRead(form: MarkAllAsReadInput) {
    return wrapper(UserOperation.MarkAllAsRead, form);
  }

  /**
   * Save your user settings.
   */
  saveUserSettings(form: SaveUserSettingsInput) {
    return wrapper(UserOperation.SaveUserSettings, form);
  }

  /**
   * Change your user password.
   */
  changePassword(form: ChangePasswordInput) {
    return wrapper(UserOperation.ChangePassword, form);
  }

  /**
   * Get counts for your reports
   */
  getReportCount(form: GetReportCountInput) {
    return wrapper(UserOperation.GetReportCount, form);
  }

  /**
   * Get your unread counts
   */
  getUnreadCount(form: GetUnreadCountInput) {
    return wrapper(UserOperation.GetUnreadCount, form);
  }

  /**
   * Verify your email
   */
  verifyEmail(form: VerifyEmailInput) {
    return wrapper(UserOperation.VerifyEmail, form);
  }

  /**
   * Delete your account.
   */
  deleteAccount(form: DeleteAccountInput) {
    return wrapper(UserOperation.DeleteAccount, form);
  }

  /**
   * Reset your password.
   */
  passwordReset(form: PasswordResetInput) {
    return wrapper(UserOperation.PasswordReset, form);
  }

  /**
   * Change your password from an email / token based reset.
   */
  passwordChange(form: PasswordChangeInput) {
    return wrapper(UserOperation.PasswordChange, form);
  }

  /**
   * Create a private message.
   */
  createPrivateMessage(form: CreatePrivateMessageInput) {
    return wrapper(UserOperation.CreatePrivateMessage, form);
  }

  /**
   * Edit a private message.
   */
  editPrivateMessage(form: EditPrivateMessageInput) {
    return wrapper(UserOperation.EditPrivateMessage, form);
  }

  /**
   * Delete a private message.
   */
  deletePrivateMessage(form: DeletePrivateMessageInput) {
    return wrapper(UserOperation.DeletePrivateMessage, form);
  }

  /**
   * Mark a private message as read.
   */
  markPrivateMessageAsRead(form: MarkPrivateMessageAsReadInput) {
    return wrapper(UserOperation.MarkPrivateMessageAsRead, form);
  }

  /**
   * Get / fetch private messages.
   */
  getPrivateMessages(form: GetPrivateMessagesInput) {
    return wrapper(UserOperation.GetPrivateMessages, form);
  }

  /**
   * Create a report for a private message.
   */
  createPrivateMessageReport(form: CreatePrivateMessageReportInput) {
    return wrapper(UserOperation.CreatePrivateMessageReport, form);
  }

  /**
   * Resolve a report for a private message.
   */
  resolvePrivateMessageReport(form: ResolvePrivateMessageReportInput) {
    return wrapper(UserOperation.ResolvePrivateMessageReport, form);
  }

  /**
   * List private message reports.
   */
  listPrivateMessageReports(form: ListPrivateMessageReportsInput) {
    return wrapper(UserOperation.ListPrivateMessageReports, form);
  }

  /**
   * Block a person.
   */
  blockPerson(form: BlockPersonInput) {
    return wrapper(UserOperation.BlockPerson, form);
  }

  /**
   * Block a community.
   */
  blockCommunity(form: BlockCommunityInput) {
    return wrapper(UserOperation.BlockCommunity, form);
  }

  /**
   * Purge / Delete a person from the database.
   */
  purgePerson(form: PurgePersonInput) {
    return wrapper(UserOperation.PurgePerson, form);
  }

  /**
   * Purge / Delete a community from the database.
   */
  purgeCommunity(form: PurgeCommunityInput) {
    return wrapper(UserOperation.PurgeCommunity, form);
  }

  /**
   * Purge / Delete a post from the database.
   */
  purgePost(form: PurgePostInput) {
    return wrapper(UserOperation.PurgePost, form);
  }

  /**
   * Purge / Delete a comment from the database.
   */
  purgeComment(form: PurgeCommentInput) {
    return wrapper(UserOperation.PurgeComment, form);
  }
}

function wrapper<MessageType>(op: UserOperation, data: MessageType) {
  let send = serialize({ op: UserOperation[op], data });
  return send;
}

export function wsUserOp(msg: any): UserOperation {
  let opStr: string = msg.op;
  return UserOperation[opStr as keyof typeof UserOperation];
}

/**
 * Converts a websocket string response to a usable result
 */
export function wsJsonToRes<ResponseType>(
  msg: any,
  responseClass: ClassConstructor<ResponseType>
): ResponseType {
  // Have to deserialize the response again into the correct class
  return deserialize(responseClass, serialize(msg.data));
}
