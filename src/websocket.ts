import {
  MessageType,
  LoginForm,
  RegisterForm,
  UserOperation,
  CommunityForm,
  DeleteCommunityForm,
  RemoveCommunityForm,
  PostForm,
  DeletePostForm,
  RemovePostForm,
  LockPostForm,
  StickyPostForm,
  SavePostForm,
  CommentForm,
  DeleteCommentForm,
  RemoveCommentForm,
  MarkCommentAsReadForm,
  SaveCommentForm,
  CommentLikeForm,
  GetPostForm,
  GetPostsForm,
  CreatePostLikeForm,
  GetCommunityForm,
  FollowCommunityForm,
  GetFollowedCommunitiesForm,
  GetUserDetailsForm,
  ListCommunitiesForm,
  GetModlogForm,
  BanFromCommunityForm,
  AddModToCommunityForm,
  TransferCommunityForm,
  AddAdminForm,
  TransferSiteForm,
  BanUserForm,
  SiteForm,
  GetRepliesForm,
  GetUserMentionsForm,
  MarkUserMentionAsReadForm,
  SearchForm,
  UserSettingsForm,
  DeleteAccountForm,
  PasswordResetForm,
  PasswordChangeForm,
  PrivateMessageForm,
  EditPrivateMessageForm,
  DeletePrivateMessageForm,
  MarkPrivateMessageAsReadForm,
  GetPrivateMessagesForm,
  GetCommentsForm,
  UserJoinForm,
  GetSiteConfig,
  GetSiteForm,
  SiteConfigForm,
  MarkAllAsReadForm,
} from './interfaces';

export class LemmyWebsocket {
  constructor() {}

  login(form: LoginForm): string {
    return wrapper(UserOperation.Login, form);
  }

  userJoin(form: UserJoinForm): string {
    return wrapper(UserOperation.UserJoin, form);
  }

  register(registerForm: RegisterForm) {
    return wrapper(UserOperation.Register, registerForm);
  }

  getCaptcha() {
    return wrapper(UserOperation.GetCaptcha, {});
  }

  createCommunity(form: CommunityForm) {
    return wrapper(UserOperation.CreateCommunity, form);
  }

  editCommunity(form: CommunityForm) {
    return wrapper(UserOperation.EditCommunity, form);
  }

  deleteCommunity(form: DeleteCommunityForm) {
    return wrapper(UserOperation.DeleteCommunity, form);
  }

  removeCommunity(form: RemoveCommunityForm) {
    return wrapper(UserOperation.RemoveCommunity, form);
  }

  followCommunity(form: FollowCommunityForm) {
    return wrapper(UserOperation.FollowCommunity, form);
  }

  listCommunities(form: ListCommunitiesForm) {
    return wrapper(UserOperation.ListCommunities, form);
  }

  getFollowedCommunities(form: GetFollowedCommunitiesForm) {
    return wrapper(UserOperation.GetFollowedCommunities, form);
  }

  listCategories() {
    return wrapper(UserOperation.ListCategories, {});
  }

  createPost(form: PostForm) {
    return wrapper(UserOperation.CreatePost, form);
  }

  getPost(form: GetPostForm) {
    return wrapper(UserOperation.GetPost, form);
  }

  getCommunity(form: GetCommunityForm) {
    return wrapper(UserOperation.GetCommunity, form);
  }

  createComment(form: CommentForm) {
    return wrapper(UserOperation.CreateComment, form);
  }

  editComment(form: CommentForm) {
    return wrapper(UserOperation.EditComment, form);
  }

  deleteComment(form: DeleteCommentForm) {
    return wrapper(UserOperation.DeleteComment, form);
  }

  removeComment(form: RemoveCommentForm) {
    return wrapper(UserOperation.RemoveComment, form);
  }

  markCommentAsRead(form: MarkCommentAsReadForm) {
    return wrapper(UserOperation.MarkCommentAsRead, form);
  }

  likeComment(form: CommentLikeForm) {
    return wrapper(UserOperation.CreateCommentLike, form);
  }

  saveComment(form: SaveCommentForm) {
    return wrapper(UserOperation.SaveComment, form);
  }

  getPosts(form: GetPostsForm) {
    return wrapper(UserOperation.GetPosts, form);
  }

  getComments(form: GetCommentsForm) {
    return wrapper(UserOperation.GetComments, form);
  }

  likePost(form: CreatePostLikeForm) {
    return wrapper(UserOperation.CreatePostLike, form);
  }

  editPost(form: PostForm) {
    return wrapper(UserOperation.EditPost, form);
  }

  deletePost(form: DeletePostForm) {
    return wrapper(UserOperation.DeletePost, form);
  }

  removePost(form: RemovePostForm) {
    return wrapper(UserOperation.RemovePost, form);
  }

  lockPost(form: LockPostForm) {
    return wrapper(UserOperation.LockPost, form);
  }

  stickyPost(form: StickyPostForm) {
    return wrapper(UserOperation.StickyPost, form);
  }

  savePost(form: SavePostForm) {
    return wrapper(UserOperation.SavePost, form);
  }

  banFromCommunity(form: BanFromCommunityForm) {
    return wrapper(UserOperation.BanFromCommunity, form);
  }

  addModToCommunity(form: AddModToCommunityForm) {
    return wrapper(UserOperation.AddModToCommunity, form);
  }

  transferCommunity(form: TransferCommunityForm) {
    return wrapper(UserOperation.TransferCommunity, form);
  }

  transferSite(form: TransferSiteForm) {
    return wrapper(UserOperation.TransferSite, form);
  }

  banUser(form: BanUserForm) {
    return wrapper(UserOperation.BanUser, form);
  }

  addAdmin(form: AddAdminForm) {
    return wrapper(UserOperation.AddAdmin, form);
  }

  getUserDetails(form: GetUserDetailsForm) {
    return wrapper(UserOperation.GetUserDetails, form);
  }

  getReplies(form: GetRepliesForm) {
    return wrapper(UserOperation.GetReplies, form);
  }

  getUserMentions(form: GetUserMentionsForm) {
    return wrapper(UserOperation.GetUserMentions, form);
  }

  markUserMentionAsRead(form: MarkUserMentionAsReadForm) {
    return wrapper(UserOperation.MarkUserMentionAsRead, form);
  }

  getModlog(form: GetModlogForm) {
    return wrapper(UserOperation.GetModlog, form);
  }

  createSite(form: SiteForm) {
    return wrapper(UserOperation.CreateSite, form);
  }

  editSite(form: SiteForm) {
    return wrapper(UserOperation.EditSite, form);
  }

  getSite(form: GetSiteForm = {}) {
    return wrapper(UserOperation.GetSite, form);
  }

  getSiteConfig(form: GetSiteConfig) {
    return wrapper(UserOperation.GetSiteConfig, form);
  }

  search(form: SearchForm) {
    return wrapper(UserOperation.Search, form);
  }

  markAllAsRead(form: MarkAllAsReadForm) {
    return wrapper(UserOperation.MarkAllAsRead, form);
  }

  saveUserSettings(form: UserSettingsForm) {
    return wrapper(UserOperation.SaveUserSettings, form);
  }

  deleteAccount(form: DeleteAccountForm) {
    return wrapper(UserOperation.DeleteAccount, form);
  }

  passwordReset(form: PasswordResetForm) {
    return wrapper(UserOperation.PasswordReset, form);
  }

  passwordChange(form: PasswordChangeForm) {
    return wrapper(UserOperation.PasswordChange, form);
  }

  createPrivateMessage(form: PrivateMessageForm) {
    return wrapper(UserOperation.CreatePrivateMessage, form);
  }

  editPrivateMessage(form: EditPrivateMessageForm) {
    return wrapper(UserOperation.EditPrivateMessage, form);
  }

  deletePrivateMessage(form: DeletePrivateMessageForm) {
    return wrapper(UserOperation.DeletePrivateMessage, form);
  }

  markPrivateMessageAsRead(form: MarkPrivateMessageAsReadForm) {
    return wrapper(UserOperation.MarkPrivateMessageAsRead, form);
  }

  getPrivateMessages(form: GetPrivateMessagesForm) {
    return wrapper(UserOperation.GetPrivateMessages, form);
  }

  saveSiteConfig(form: SiteConfigForm) {
    return wrapper(UserOperation.SaveSiteConfig, form);
  }
}

function wrapper(op: UserOperation, data: MessageType) {
  let send = { op: UserOperation[op], data: data };
  console.log(send);
  return JSON.stringify(send);
}
