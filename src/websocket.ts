import { AddAdmin } from "./types/AddAdmin";
import { AddModToCommunity } from "./types/AddModToCommunity";
import { ApproveRegistrationApplication } from "./types/ApproveRegistrationApplication";
import { BanFromCommunity } from "./types/BanFromCommunity";
import { BanPerson } from "./types/BanPerson";
import { BlockCommunity } from "./types/BlockCommunity";
import { BlockPerson } from "./types/BlockPerson";
import { ChangePassword } from "./types/ChangePassword";
import { CommunityJoin } from "./types/CommunityJoin";
import { CreateComment } from "./types/CreateComment";
import { CreateCommentLike } from "./types/CreateCommentLike";
import { CreateCommentReport } from "./types/CreateCommentReport";
import { CreateCommunity } from "./types/CreateCommunity";
import { CreateCustomEmoji } from "./types/CreateCustomEmoji";
import { CreatePost } from "./types/CreatePost";
import { CreatePostLike } from "./types/CreatePostLike";
import { CreatePostReport } from "./types/CreatePostReport";
import { CreatePrivateMessage } from "./types/CreatePrivateMessage";
import { CreatePrivateMessageReport } from "./types/CreatePrivateMessageReport";
import { CreateSite } from "./types/CreateSite";
import { DeleteAccount } from "./types/DeleteAccount";
import { DeleteComment } from "./types/DeleteComment";
import { DeleteCommunity } from "./types/DeleteCommunity";
import { DeleteCustomEmoji } from "./types/DeleteCustomEmoji";
import { DeletePost } from "./types/DeletePost";
import { DeletePrivateMessage } from "./types/DeletePrivateMessage";
import { EditComment } from "./types/EditComment";
import { EditCommunity } from "./types/EditCommunity";
import { EditCustomEmoji } from "./types/EditCustomEmoji";
import { EditPost } from "./types/EditPost";
import { EditPrivateMessage } from "./types/EditPrivateMessage";
import { EditSite } from "./types/EditSite";
import { FeaturePost } from "./types/FeaturePost";
import { FollowCommunity } from "./types/FollowCommunity";
import { GetBannedPersons } from "./types/GetBannedPersons";
import { GetCaptcha } from "./types/GetCaptcha";
import { GetComment } from "./types/GetComment";
import { GetComments } from "./types/GetComments";
import { GetCommunity } from "./types/GetCommunity";
import { GetFederatedInstances } from "./types/GetFederatedInstances";
import { GetModlog } from "./types/GetModlog";
import { GetPersonDetails } from "./types/GetPersonDetails";
import { GetPersonMentions } from "./types/GetPersonMentions";
import { GetPost } from "./types/GetPost";
import { GetPosts } from "./types/GetPosts";
import { GetPrivateMessages } from "./types/GetPrivateMessages";
import { GetReplies } from "./types/GetReplies";
import { GetReportCount } from "./types/GetReportCount";
import { GetSite } from "./types/GetSite";
import { GetSiteMetadata } from "./types/GetSiteMetadata";
import { GetUnreadCount } from "./types/GetUnreadCount";
import { GetUnreadRegistrationApplicationCount } from "./types/GetUnreadRegistrationApplicationCount";
import { LeaveAdmin } from "./types/LeaveAdmin";
import { ListCommentReports } from "./types/ListCommentReports";
import { ListCommunities } from "./types/ListCommunities";
import { ListPostReports } from "./types/ListPostReports";
import { ListPrivateMessageReports } from "./types/ListPrivateMessageReports";
import { ListRegistrationApplications } from "./types/ListRegistrationApplications";
import { LockPost } from "./types/LockPost";
import { Login } from "./types/Login";
import { MarkAllAsRead } from "./types/MarkAllAsRead";
import { MarkCommentReplyAsRead } from "./types/MarkCommentReplyAsRead";
import { MarkPersonMentionAsRead } from "./types/MarkPersonMentionAsRead";
import { MarkPostAsRead } from "./types/MarkPostAsRead";
import { MarkPrivateMessageAsRead } from "./types/MarkPrivateMessageAsRead";
import { UserOperation } from "./types/others";
import { PasswordChangeAfterReset } from "./types/PasswordChangeAfterReset";
import { PasswordReset } from "./types/PasswordReset";
import { PostJoin } from "./types/PostJoin";
import { PurgeComment } from "./types/PurgeComment";
import { PurgeCommunity } from "./types/PurgeCommunity";
import { PurgePerson } from "./types/PurgePerson";
import { PurgePost } from "./types/PurgePost";
import { Register } from "./types/Register";
import { RemoveComment } from "./types/RemoveComment";
import { RemoveCommunity } from "./types/RemoveCommunity";
import { RemovePost } from "./types/RemovePost";
import { ResolveCommentReport } from "./types/ResolveCommentReport";
import { ResolveObject } from "./types/ResolveObject";
import { ResolvePostReport } from "./types/ResolvePostReport";
import { ResolvePrivateMessageReport } from "./types/ResolvePrivateMessageReport";
import { SaveComment } from "./types/SaveComment";
import { SavePost } from "./types/SavePost";
import { SaveUserSettings } from "./types/SaveUserSettings";
import { Search } from "./types/Search";
import { TransferCommunity } from "./types/TransferCommunity";
import { UserJoin } from "./types/UserJoin";
import { VerifyEmail } from "./types/VerifyEmail";

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
  login(form: Login): string {
    return wrapper(UserOperation.Login, form);
  }

  /**
   * A websocket join for your user.
   *
   * Allows your user to receive private messages and notifications.
   */
  userJoin(form: UserJoin): string {
    return wrapper(UserOperation.UserJoin, form);
  }

  /**
   * A websocket join for the current post room.
   *
   * Allows your user to receive new comments and updates for that post.
   */
  postJoin(form: PostJoin): string {
    return wrapper(UserOperation.PostJoin, form);
  }

  /**
   * A websocket join for a given community.
   *
   * Allows your user to receive community updates.
   *
   * Note: community_id: 0, is your front page.
   */
  communityJoin(form: CommunityJoin): string {
    return wrapper(UserOperation.CommunityJoin, form);
  }

  /**
   * Register a new user.
   */
  register(register: Register) {
    return wrapper(UserOperation.Register, register);
  }

  /**
   * Fetch a Captcha.
   */
  getCaptcha(form: GetCaptcha) {
    return wrapper(UserOperation.GetCaptcha, form);
  }

  /**
   * Create a new community.
   */
  createCommunity(form: CreateCommunity) {
    return wrapper(UserOperation.CreateCommunity, form);
  }

  /**
   * Edit a community.
   */
  editCommunity(form: EditCommunity) {
    return wrapper(UserOperation.EditCommunity, form);
  }

  /**
   * Delete a community.
   */
  deleteCommunity(form: DeleteCommunity) {
    return wrapper(UserOperation.DeleteCommunity, form);
  }

  /**
   * A moderator remove for a community.
   */
  removeCommunity(form: RemoveCommunity) {
    return wrapper(UserOperation.RemoveCommunity, form);
  }

  /**
   * Follow / subscribe to a community.
   */
  followCommunity(form: FollowCommunity) {
    return wrapper(UserOperation.FollowCommunity, form);
  }

  /**
   * List communities, with various filters.
   */
  listCommunities(form: ListCommunities) {
    return wrapper(UserOperation.ListCommunities, form);
  }

  /**
   * Create a post.
   */
  createPost(form: CreatePost) {
    return wrapper(UserOperation.CreatePost, form);
  }

  /**
   * Get / fetch a post.
   */
  getPost(form: GetPost) {
    return wrapper(UserOperation.GetPost, form);
  }

  /**
   * Get / fetch a community.
   */
  getCommunity(form: GetCommunity) {
    return wrapper(UserOperation.GetCommunity, form);
  }

  /**
   * Create a comment.
   */
  createComment(form: CreateComment) {
    return wrapper(UserOperation.CreateComment, form);
  }

  /**
   * Edit a comment.
   */
  editComment(form: EditComment) {
    return wrapper(UserOperation.EditComment, form);
  }

  /**
   * Delete a comment.
   */
  deleteComment(form: DeleteComment) {
    return wrapper(UserOperation.DeleteComment, form);
  }

  /**
   * A moderator remove for a comment.
   */
  removeComment(form: RemoveComment) {
    return wrapper(UserOperation.RemoveComment, form);
  }

  /**
   * Mark a comment as read.
   */
  markCommentReplyAsRead(form: MarkCommentReplyAsRead) {
    return wrapper(UserOperation.MarkCommentReplyAsRead, form);
  }

  /**
   * Like / vote on a comment.
   */
  likeComment(form: CreateCommentLike) {
    return wrapper(UserOperation.CreateCommentLike, form);
  }

  /**
   * Save a comment.
   */
  saveComment(form: SaveComment) {
    return wrapper(UserOperation.SaveComment, form);
  }

  /**
   * Report a comment.
   */
  createCommentReport(form: CreateCommentReport) {
    return wrapper(UserOperation.CreateCommentReport, form);
  }

  /**
   * Resolve a comment report. Only a mod can do this.
   */
  resolveCommentReport(form: ResolveCommentReport) {
    return wrapper(UserOperation.ResolveCommentReport, form);
  }

  /**
   * List comment reports.
   */
  listCommentReports(form: ListCommentReports) {
    return wrapper(UserOperation.ListCommentReports, form);
  }

  /**
   * Get / fetch posts, with various filters.
   */
  getPosts(form: GetPosts) {
    return wrapper(UserOperation.GetPosts, form);
  }

  /**
   * Get / fetch comments.
   */
  getComments(form: GetComments) {
    return wrapper(UserOperation.GetComments, form);
  }

  /**
   * Get / fetch comment.
   */
  getComment(form: GetComment) {
    return wrapper(UserOperation.GetComment, form);
  }

  /**
   * Like / vote on a post.
   */
  likePost(form: CreatePostLike) {
    return wrapper(UserOperation.CreatePostLike, form);
  }

  /**
   * Edit a post.
   */
  editPost(form: EditPost) {
    return wrapper(UserOperation.EditPost, form);
  }

  /**
   * Delete a post.
   */
  deletePost(form: DeletePost) {
    return wrapper(UserOperation.DeletePost, form);
  }

  /**
   * A moderator remove for a post.
   */
  removePost(form: RemovePost) {
    return wrapper(UserOperation.RemovePost, form);
  }

  /**
   * A moderator can lock a post ( IE disable new comments ).
   */
  lockPost(form: LockPost) {
    return wrapper(UserOperation.LockPost, form);
  }

  /**
   * A moderator can feature a post ( IE stick it to the top of a community ).
   */
  featurePost(form: FeaturePost) {
    return wrapper(UserOperation.FeaturePost, form);
  }

  /**
   * Mark a post as read.
   */
  markPostAsRead(form: MarkPostAsRead) {
    return wrapper(UserOperation.MarkPostAsRead, form);
  }

  /**
   * Save a post.
   */
  savePost(form: SavePost) {
    return wrapper(UserOperation.SavePost, form);
  }

  /**
   * Report a post.
   */
  createPostReport(form: CreatePostReport) {
    return wrapper(UserOperation.CreatePostReport, form);
  }

  /**
   * Resolve a post report. Only a mod can do this.
   */
  resolvePostReport(form: ResolvePostReport) {
    return wrapper(UserOperation.ResolvePostReport, form);
  }

  /**
   * List post reports.
   */
  listPostReports(form: ListPostReports) {
    return wrapper(UserOperation.ListPostReports, form);
  }

  /**
   * Fetch metadata for any given site.
   */
  getSiteMetadata(form: GetSiteMetadata) {
    return wrapper(UserOperation.GetSiteMetadata, form);
  }

  /**
   * Ban a user from a community.
   */
  banFromCommunity(form: BanFromCommunity) {
    return wrapper(UserOperation.BanFromCommunity, form);
  }

  /**
   * Add a moderator to your community.
   */
  addModToCommunity(form: AddModToCommunity) {
    return wrapper(UserOperation.AddModToCommunity, form);
  }

  /**
   * Transfer your community to an existing moderator.
   */
  transferCommunity(form: TransferCommunity) {
    return wrapper(UserOperation.TransferCommunity, form);
  }

  /**
   * Leave the Site admins.
   */
  leaveAdmin(form: LeaveAdmin) {
    return wrapper(UserOperation.LeaveAdmin, form);
  }

  /**
   * Ban a person from your site.
   */
  banPerson(form: BanPerson) {
    return wrapper(UserOperation.BanPerson, form);
  }

  /**
   * Get a list of banned users
   */
  getBannedPersons(form: GetBannedPersons) {
    return wrapper(UserOperation.GetBannedPersons, form);
  }

  /**
   * Add an admin to your site.
   */
  addAdmin(form: AddAdmin) {
    return wrapper(UserOperation.AddAdmin, form);
  }

  /**
   * Get the unread registration applications count.
   */
  getUnreadRegistrationApplicationCount(
    form: GetUnreadRegistrationApplicationCount
  ) {
    return wrapper(UserOperation.GetUnreadRegistrationApplicationCount, form);
  }

  /**
   * List the unread registration applications.
   */
  listRegistrationApplications(form: ListRegistrationApplications) {
    return wrapper(UserOperation.ListRegistrationApplications, form);
  }

  /**
   * Approve a registration application
   */
  approveRegistrationApplication(form: ApproveRegistrationApplication) {
    return wrapper(UserOperation.ApproveRegistrationApplication, form);
  }

  /**
   * Get the details for a person.
   */
  getPersonDetails(form: GetPersonDetails) {
    return wrapper(UserOperation.GetPersonDetails, form);
  }

  /**
   * Get comment replies.
   */
  getReplies(form: GetReplies) {
    return wrapper(UserOperation.GetReplies, form);
  }

  /**
   * Get mentions for your user.
   */
  getPersonMentions(form: GetPersonMentions) {
    return wrapper(UserOperation.GetPersonMentions, form);
  }

  /**
   * Mark a person mention as read.
   */
  markPersonMentionAsRead(form: MarkPersonMentionAsRead) {
    return wrapper(UserOperation.MarkPersonMentionAsRead, form);
  }

  /**
   * Get the modlog.
   */
  getModlog(form: GetModlog) {
    return wrapper(UserOperation.GetModlog, form);
  }

  /**
   * Create your site.
   */
  createSite(form: CreateSite) {
    return wrapper(UserOperation.CreateSite, form);
  }

  /**
   * Edit your site.
   */
  editSite(form: EditSite) {
    return wrapper(UserOperation.EditSite, form);
  }

  /**
   * Gets the site, and your user data.
   */
  getSite(form: GetSite) {
    return wrapper(UserOperation.GetSite, form);
  }

  /**
   * Search lemmy.
   */
  search(form: Search) {
    return wrapper(UserOperation.Search, form);
  }

  /**
   * Fetch a non-local / federated object.
   */
  resolveObject(form: ResolveObject) {
    return wrapper(UserOperation.ResolveObject, form);
  }

  /**
   * Mark all replies as read.
   */
  markAllAsRead(form: MarkAllAsRead) {
    return wrapper(UserOperation.MarkAllAsRead, form);
  }

  /**
   * Save your user settings.
   */
  saveUserSettings(form: SaveUserSettings) {
    return wrapper(UserOperation.SaveUserSettings, form);
  }

  /**
   * Change your user password.
   */
  changePassword(form: ChangePassword) {
    return wrapper(UserOperation.ChangePassword, form);
  }

  /**
   * Get counts for your reports
   */
  getReportCount(form: GetReportCount) {
    return wrapper(UserOperation.GetReportCount, form);
  }

  /**
   * Get your unread counts
   */
  getUnreadCount(form: GetUnreadCount) {
    return wrapper(UserOperation.GetUnreadCount, form);
  }

  /**
   * Verify your email
   */
  verifyEmail(form: VerifyEmail) {
    return wrapper(UserOperation.VerifyEmail, form);
  }

  /**
   * Delete your account.
   */
  deleteAccount(form: DeleteAccount) {
    return wrapper(UserOperation.DeleteAccount, form);
  }

  /**
   * Reset your password.
   */
  passwordReset(form: PasswordReset) {
    return wrapper(UserOperation.PasswordReset, form);
  }

  /**
   * Change your password from an email / token based reset.
   */
  passwordChange(form: PasswordChangeAfterReset) {
    return wrapper(UserOperation.PasswordChangeAfterReset, form);
  }

  /**
   * Create a private message.
   */
  createPrivateMessage(form: CreatePrivateMessage) {
    return wrapper(UserOperation.CreatePrivateMessage, form);
  }

  /**
   * Edit a private message.
   */
  editPrivateMessage(form: EditPrivateMessage) {
    return wrapper(UserOperation.EditPrivateMessage, form);
  }

  /**
   * Delete a private message.
   */
  deletePrivateMessage(form: DeletePrivateMessage) {
    return wrapper(UserOperation.DeletePrivateMessage, form);
  }

  /**
   * Mark a private message as read.
   */
  markPrivateMessageAsRead(form: MarkPrivateMessageAsRead) {
    return wrapper(UserOperation.MarkPrivateMessageAsRead, form);
  }

  /**
   * Get / fetch private messages.
   */
  getPrivateMessages(form: GetPrivateMessages) {
    return wrapper(UserOperation.GetPrivateMessages, form);
  }

  /**
   * Create a report for a private message.
   */
  createPrivateMessageReport(form: CreatePrivateMessageReport) {
    return wrapper(UserOperation.CreatePrivateMessageReport, form);
  }

  /**
   * Resolve a report for a private message.
   */
  resolvePrivateMessageReport(form: ResolvePrivateMessageReport) {
    return wrapper(UserOperation.ResolvePrivateMessageReport, form);
  }

  /**
   * List private message reports.
   */
  listPrivateMessageReports(form: ListPrivateMessageReports) {
    return wrapper(UserOperation.ListPrivateMessageReports, form);
  }

  /**
   * Block a person.
   */
  blockPerson(form: BlockPerson) {
    return wrapper(UserOperation.BlockPerson, form);
  }

  /**
   * Block a community.
   */
  blockCommunity(form: BlockCommunity) {
    return wrapper(UserOperation.BlockCommunity, form);
  }

  /**
   * Purge / Delete a person from the database.
   */
  purgePerson(form: PurgePerson) {
    return wrapper(UserOperation.PurgePerson, form);
  }

  /**
   * Purge / Delete a community from the database.
   */
  purgeCommunity(form: PurgeCommunity) {
    return wrapper(UserOperation.PurgeCommunity, form);
  }

  /**
   * Purge / Delete a post from the database.
   */
  purgePost(form: PurgePost) {
    return wrapper(UserOperation.PurgePost, form);
  }

  /**
   * Purge / Delete a comment from the database.
   */
  purgeComment(form: PurgeComment) {
    return wrapper(UserOperation.PurgeComment, form);
  }

  /**
   * Create a custom emoji
   */
  createCustomEmoji(form: CreateCustomEmoji) {
    return wrapper(UserOperation.CreateCustomEmoji, form);
  }

  /**
   * Edit a custom emoji
   */
  editCustomEmoji(form: EditCustomEmoji) {
    return wrapper(UserOperation.EditCustomEmoji, form);
  }

  /**
   * Delete a custom emoji
   */
  deleteCustomEmoji(form: DeleteCustomEmoji) {
    return wrapper(UserOperation.DeleteCustomEmoji, form);
  }

  /**
   * Fetch federated instances.
   */
  getFederatedInstances(form: GetFederatedInstances) {
    return wrapper(UserOperation.GetFederatedInstances, form);
  }
}

function wrapper<MessageType>(op: UserOperation, data: MessageType) {
  let send = JSON.stringify({ op: UserOperation[op], data }, (_, val) =>
    typeof val === "bigint" ? val.toString() : val
  );
  return send;
}

export function wsUserOp(msg: any): UserOperation {
  let opStr: string = msg.op;
  return UserOperation[opStr as keyof typeof UserOperation];
}

/**
 * Converts a websocket string response to a usable result
 */
// TODO is this still necessary?
export function wsJsonToRes<ResponseType>(msg: any): ResponseType {
  // Have to deserialize the response again into the correct class
  return msg.data as ResponseType;
}
