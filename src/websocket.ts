import {
  CreateComment,
  CreateCommentLike,
  DeleteComment,
  EditComment,
  GetComments,
  MarkCommentAsRead,
  RemoveComment,
  SaveComment,
} from './interfaces/api/comment';
import {
  AddModToCommunity,
  BanFromCommunity,
  BlockCommunity,
  CreateCommunity,
  DeleteCommunity,
  EditCommunity,
  FollowCommunity,
  GetCommunity,
  ListCommunities,
  RemoveCommunity,
  TransferCommunity,
} from './interfaces/api/community';
import {
  CreatePost,
  CreatePostLike,
  DeletePost,
  EditPost,
  GetPost,
  GetPosts,
  GetSiteMetadata,
  LockPost,
  RemovePost,
  SavePost,
  StickyPost,
} from './interfaces/api/post';
import {
  CreateSite,
  EditSite,
  GetModlog,
  GetSite,
  GetSiteConfig,
  ResolveObject,
  SaveSiteConfig,
  Search,
  TransferSite,
} from './interfaces/api/site';
import {
  AddAdmin,
  BanPerson,
  CreatePrivateMessage,
  DeleteAccount,
  DeletePrivateMessage,
  EditPrivateMessage,
  GetPrivateMessages,
  GetReplies,
  GetPersonDetails,
  GetPersonMentions,
  Login,
  MarkAllAsRead,
  MarkPrivateMessageAsRead,
  MarkPersonMentionAsRead,
  PasswordChange,
  PasswordReset,
  Register,
  SaveUserSettings,
  ChangePassword,
  BlockPerson,
} from './interfaces/api/person';
import { UserJoin, PostJoin, CommunityJoin } from './interfaces/api/websocket';
import { UserOperation } from './interfaces/others';

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
  getCaptcha() {
    return wrapper(UserOperation.GetCaptcha, {});
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
  markCommentAsRead(form: MarkCommentAsRead) {
    return wrapper(UserOperation.MarkCommentAsRead, form);
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
   * A moderator can sticky a post ( IE stick it to the top of a community ).
   */
  stickyPost(form: StickyPost) {
    return wrapper(UserOperation.StickyPost, form);
  }

  /**
   * Save a post.
   */
  savePost(form: SavePost) {
    return wrapper(UserOperation.SavePost, form);
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
   * Transfer your site to another user.
   */
  transferSite(form: TransferSite) {
    return wrapper(UserOperation.TransferSite, form);
  }

  /**
   * Ban a person from your site.
   */
  banPerson(form: BanPerson) {
    return wrapper(UserOperation.BanPerson, form);
  }

  /**
   * Add an admin to your site.
   */
  addAdmin(form: AddAdmin) {
    return wrapper(UserOperation.AddAdmin, form);
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
  getSite(form: GetSite = {}) {
    return wrapper(UserOperation.GetSite, form);
  }

  /**
   * Get your site configuration.
   */
  getSiteConfig(form: GetSiteConfig) {
    return wrapper(UserOperation.GetSiteConfig, form);
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
  passwordChange(form: PasswordChange) {
    return wrapper(UserOperation.PasswordChange, form);
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
   * Save your site config.
   */
  saveSiteConfig(form: SaveSiteConfig) {
    return wrapper(UserOperation.SaveSiteConfig, form);
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
}

function wrapper<MessageType>(op: UserOperation, data: MessageType) {
  let send = { op: UserOperation[op], data: data };
  console.log(send);
  return JSON.stringify(send);
}
