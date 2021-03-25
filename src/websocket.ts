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
  CreateCommunity,
  DeleteCommunity,
  EditCommunity,
  FollowCommunity,
  GetCommunity,
  GetFollowedCommunities,
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
} from './interfaces/api/person';
import { UserJoin, PostJoin, CommunityJoin } from './interfaces/api/websocket';
import { UserOperation } from './interfaces/others';

/**
 * Helps build lemmy websocket message requests, that you can use in your Websocket sends
 */
export class LemmyWebsocket {
  constructor() {}

  login(form: Login): string {
    return wrapper(UserOperation.Login, form);
  }

  userJoin(form: UserJoin): string {
    return wrapper(UserOperation.UserJoin, form);
  }

  postJoin(form: PostJoin): string {
    return wrapper(UserOperation.PostJoin, form);
  }

  communityJoin(form: CommunityJoin): string {
    return wrapper(UserOperation.CommunityJoin, form);
  }

  register(register: Register) {
    return wrapper(UserOperation.Register, register);
  }

  getCaptcha() {
    return wrapper(UserOperation.GetCaptcha, {});
  }

  createCommunity(form: CreateCommunity) {
    return wrapper(UserOperation.CreateCommunity, form);
  }

  editCommunity(form: EditCommunity) {
    return wrapper(UserOperation.EditCommunity, form);
  }

  deleteCommunity(form: DeleteCommunity) {
    return wrapper(UserOperation.DeleteCommunity, form);
  }

  removeCommunity(form: RemoveCommunity) {
    return wrapper(UserOperation.RemoveCommunity, form);
  }

  followCommunity(form: FollowCommunity) {
    return wrapper(UserOperation.FollowCommunity, form);
  }

  listCommunities(form: ListCommunities) {
    return wrapper(UserOperation.ListCommunities, form);
  }

  getFollowedCommunities(form: GetFollowedCommunities) {
    return wrapper(UserOperation.GetFollowedCommunities, form);
  }

  createPost(form: CreatePost) {
    return wrapper(UserOperation.CreatePost, form);
  }

  getPost(form: GetPost) {
    return wrapper(UserOperation.GetPost, form);
  }

  getCommunity(form: GetCommunity) {
    return wrapper(UserOperation.GetCommunity, form);
  }

  createComment(form: CreateComment) {
    return wrapper(UserOperation.CreateComment, form);
  }

  editComment(form: EditComment) {
    return wrapper(UserOperation.EditComment, form);
  }

  deleteComment(form: DeleteComment) {
    return wrapper(UserOperation.DeleteComment, form);
  }

  removeComment(form: RemoveComment) {
    return wrapper(UserOperation.RemoveComment, form);
  }

  markCommentAsRead(form: MarkCommentAsRead) {
    return wrapper(UserOperation.MarkCommentAsRead, form);
  }

  likeComment(form: CreateCommentLike) {
    return wrapper(UserOperation.CreateCommentLike, form);
  }

  saveComment(form: SaveComment) {
    return wrapper(UserOperation.SaveComment, form);
  }

  getPosts(form: GetPosts) {
    return wrapper(UserOperation.GetPosts, form);
  }

  getComments(form: GetComments) {
    return wrapper(UserOperation.GetComments, form);
  }

  likePost(form: CreatePostLike) {
    return wrapper(UserOperation.CreatePostLike, form);
  }

  editPost(form: EditPost) {
    return wrapper(UserOperation.EditPost, form);
  }

  deletePost(form: DeletePost) {
    return wrapper(UserOperation.DeletePost, form);
  }

  removePost(form: RemovePost) {
    return wrapper(UserOperation.RemovePost, form);
  }

  lockPost(form: LockPost) {
    return wrapper(UserOperation.LockPost, form);
  }

  stickyPost(form: StickyPost) {
    return wrapper(UserOperation.StickyPost, form);
  }

  savePost(form: SavePost) {
    return wrapper(UserOperation.SavePost, form);
  }

  banFromCommunity(form: BanFromCommunity) {
    return wrapper(UserOperation.BanFromCommunity, form);
  }

  addModToCommunity(form: AddModToCommunity) {
    return wrapper(UserOperation.AddModToCommunity, form);
  }

  transferCommunity(form: TransferCommunity) {
    return wrapper(UserOperation.TransferCommunity, form);
  }

  transferSite(form: TransferSite) {
    return wrapper(UserOperation.TransferSite, form);
  }

  banPerson(form: BanPerson) {
    return wrapper(UserOperation.BanPerson, form);
  }

  addAdmin(form: AddAdmin) {
    return wrapper(UserOperation.AddAdmin, form);
  }

  getPersonDetails(form: GetPersonDetails) {
    return wrapper(UserOperation.GetPersonDetails, form);
  }

  getReplies(form: GetReplies) {
    return wrapper(UserOperation.GetReplies, form);
  }

  getPersonMentions(form: GetPersonMentions) {
    return wrapper(UserOperation.GetPersonMentions, form);
  }

  markPersonMentionAsRead(form: MarkPersonMentionAsRead) {
    return wrapper(UserOperation.MarkPersonMentionAsRead, form);
  }

  getModlog(form: GetModlog) {
    return wrapper(UserOperation.GetModlog, form);
  }

  createSite(form: CreateSite) {
    return wrapper(UserOperation.CreateSite, form);
  }

  editSite(form: EditSite) {
    return wrapper(UserOperation.EditSite, form);
  }

  getSite(form: GetSite = {}) {
    return wrapper(UserOperation.GetSite, form);
  }

  getSiteConfig(form: GetSiteConfig) {
    return wrapper(UserOperation.GetSiteConfig, form);
  }

  search(form: Search) {
    return wrapper(UserOperation.Search, form);
  }

  markAllAsRead(form: MarkAllAsRead) {
    return wrapper(UserOperation.MarkAllAsRead, form);
  }

  saveUserSettings(form: SaveUserSettings) {
    return wrapper(UserOperation.SaveUserSettings, form);
  }

  deleteAccount(form: DeleteAccount) {
    return wrapper(UserOperation.DeleteAccount, form);
  }

  passwordReset(form: PasswordReset) {
    return wrapper(UserOperation.PasswordReset, form);
  }

  passwordChange(form: PasswordChange) {
    return wrapper(UserOperation.PasswordChange, form);
  }

  createPrivateMessage(form: CreatePrivateMessage) {
    return wrapper(UserOperation.CreatePrivateMessage, form);
  }

  editPrivateMessage(form: EditPrivateMessage) {
    return wrapper(UserOperation.EditPrivateMessage, form);
  }

  deletePrivateMessage(form: DeletePrivateMessage) {
    return wrapper(UserOperation.DeletePrivateMessage, form);
  }

  markPrivateMessageAsRead(form: MarkPrivateMessageAsRead) {
    return wrapper(UserOperation.MarkPrivateMessageAsRead, form);
  }

  getPrivateMessages(form: GetPrivateMessages) {
    return wrapper(UserOperation.GetPrivateMessages, form);
  }

  saveSiteConfig(form: SaveSiteConfig) {
    return wrapper(UserOperation.SaveSiteConfig, form);
  }
}

function wrapper<MessageType>(op: UserOperation, data: MessageType) {
  let send = { op: UserOperation[op], data: data };
  console.log(send);
  return JSON.stringify(send);
}
