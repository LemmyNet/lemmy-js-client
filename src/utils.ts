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
} from './interfaces';

export function wsSendLogin(form: LoginForm): string {
  return wsSendWrapper(UserOperation.Login, form);
}

export function wsSendUserJoin(form: UserJoinForm): string {
  return wsSendWrapper(UserOperation.UserJoin, form);
}

export function wsSendRegister(registerForm: RegisterForm) {
  return wsSendWrapper(UserOperation.Register, registerForm);
}

export function wsSendGetCaptcha() {
  return wsSendWrapper(UserOperation.GetCaptcha, {});
}

export function wsSendCreateCommunity(form: CommunityForm) {
  return wsSendWrapper(UserOperation.CreateCommunity, form);
}

export function wsSendEditCommunity(form: CommunityForm) {
  return wsSendWrapper(UserOperation.EditCommunity, form);
}

export function wsSendDeleteCommunity(form: DeleteCommunityForm) {
  return wsSendWrapper(UserOperation.DeleteCommunity, form);
}

export function wsSendRemoveCommunity(form: RemoveCommunityForm) {
  return wsSendWrapper(UserOperation.RemoveCommunity, form);
}

export function wsSendFollowCommunity(form: FollowCommunityForm) {
  return wsSendWrapper(UserOperation.FollowCommunity, form);
}

export function wsSendListCommunities(form: ListCommunitiesForm) {
  return wsSendWrapper(UserOperation.ListCommunities, form);
}

export function wsSendGetFollowedCommunities(form: GetFollowedCommunitiesForm) {
  return wsSendWrapper(UserOperation.GetFollowedCommunities, form);
}

export function wsSendListCategories() {
  return wsSendWrapper(UserOperation.ListCategories, {});
}

export function wsSendCreatePost(form: PostForm) {
  return wsSendWrapper(UserOperation.CreatePost, form);
}

export function wsSendGetPost(form: GetPostForm) {
  return wsSendWrapper(UserOperation.GetPost, form);
}

export function wsSendGetCommunity(form: GetCommunityForm) {
  return wsSendWrapper(UserOperation.GetCommunity, form);
}

export function wsSendCreateComment(form: CommentForm) {
  return wsSendWrapper(UserOperation.CreateComment, form);
}

export function wsSendEditComment(form: CommentForm) {
  return wsSendWrapper(UserOperation.EditComment, form);
}

export function wsSendDeleteComment(form: DeleteCommentForm) {
  return wsSendWrapper(UserOperation.DeleteComment, form);
}

export function wsSendRemoveComment(form: RemoveCommentForm) {
  return wsSendWrapper(UserOperation.RemoveComment, form);
}

export function wsSendMarkCommentAsRead(form: MarkCommentAsReadForm) {
  return wsSendWrapper(UserOperation.MarkCommentAsRead, form);
}

export function wsSendLikeComment(form: CommentLikeForm) {
  return wsSendWrapper(UserOperation.CreateCommentLike, form);
}

export function wsSendSaveComment(form: SaveCommentForm) {
  return wsSendWrapper(UserOperation.SaveComment, form);
}

export function wsSendGetPosts(form: GetPostsForm) {
  return wsSendWrapper(UserOperation.GetPosts, form);
}

export function wsSendGetComments(form: GetCommentsForm) {
  return wsSendWrapper(UserOperation.GetComments, form);
}

export function wsSendLikePost(form: CreatePostLikeForm) {
  return wsSendWrapper(UserOperation.CreatePostLike, form);
}

export function wsSendEditPost(form: PostForm) {
  return wsSendWrapper(UserOperation.EditPost, form);
}

export function wsSendDeletePost(form: DeletePostForm) {
  return wsSendWrapper(UserOperation.DeletePost, form);
}

export function wsSendRemovePost(form: RemovePostForm) {
  return wsSendWrapper(UserOperation.RemovePost, form);
}

export function wsSendLockPost(form: LockPostForm) {
  return wsSendWrapper(UserOperation.LockPost, form);
}

export function wsSendStickyPost(form: StickyPostForm) {
  return wsSendWrapper(UserOperation.StickyPost, form);
}

export function wsSendSavePost(form: SavePostForm) {
  return wsSendWrapper(UserOperation.SavePost, form);
}

export function wsSendBanFromCommunity(form: BanFromCommunityForm) {
  return wsSendWrapper(UserOperation.BanFromCommunity, form);
}

export function wsSendAddModToCommunity(form: AddModToCommunityForm) {
  return wsSendWrapper(UserOperation.AddModToCommunity, form);
}

export function wsSendTransferCommunity(form: TransferCommunityForm) {
  return wsSendWrapper(UserOperation.TransferCommunity, form);
}

export function wsSendTransferSite(form: TransferSiteForm) {
  return wsSendWrapper(UserOperation.TransferSite, form);
}

export function wsSendBanUser(form: BanUserForm) {
  return wsSendWrapper(UserOperation.BanUser, form);
}

export function wsSendAddAdmin(form: AddAdminForm) {
  return wsSendWrapper(UserOperation.AddAdmin, form);
}

export function wsSendGetUserDetails(form: GetUserDetailsForm) {
  return wsSendWrapper(UserOperation.GetUserDetails, form);
}

export function wsSendGetReplies(form: GetRepliesForm) {
  return wsSendWrapper(UserOperation.GetReplies, form);
}

export function wsSendGetUserMentions(form: GetUserMentionsForm) {
  return wsSendWrapper(UserOperation.GetUserMentions, form);
}

export function wsSendMarkUserMentionAsRead(form: MarkUserMentionAsReadForm) {
  return wsSendWrapper(UserOperation.MarkUserMentionAsRead, form);
}

export function wsSendGetModlog(form: GetModlogForm) {
  return wsSendWrapper(UserOperation.GetModlog, form);
}

export function wsSendCreateSite(form: SiteForm) {
  return wsSendWrapper(UserOperation.CreateSite, form);
}

export function wsSendEditSite(form: SiteForm) {
  return wsSendWrapper(UserOperation.EditSite, form);
}

export function wsSendGetSite(form: GetSiteForm = {}) {
  return wsSendWrapper(UserOperation.GetSite, form);
}

export function wsSendGetSiteConfig(form: GetSiteConfig) {
  return wsSendWrapper(UserOperation.GetSiteConfig, form);
}

export function wsSendSearch(form: SearchForm) {
  return wsSendWrapper(UserOperation.Search, form);
}

export function wsSendMarkAllAsRead(form: any) {
  return wsSendWrapper(UserOperation.MarkAllAsRead, form);
}

export function wsSendSaveUserSettings(form: UserSettingsForm) {
  return wsSendWrapper(UserOperation.SaveUserSettings, form);
}

export function wsSendDeleteAccount(form: DeleteAccountForm) {
  return wsSendWrapper(UserOperation.DeleteAccount, form);
}

export function wsSendPasswordReset(form: PasswordResetForm) {
  return wsSendWrapper(UserOperation.PasswordReset, form);
}

export function wsSendPasswordChange(form: PasswordChangeForm) {
  return wsSendWrapper(UserOperation.PasswordChange, form);
}

export function wsSendCreatePrivateMessage(form: PrivateMessageForm) {
  return wsSendWrapper(UserOperation.CreatePrivateMessage, form);
}

export function wsSendEditPrivateMessage(form: EditPrivateMessageForm) {
  return wsSendWrapper(UserOperation.EditPrivateMessage, form);
}

export function wsSendDeletePrivateMessage(form: DeletePrivateMessageForm) {
  return wsSendWrapper(UserOperation.DeletePrivateMessage, form);
}

export function wsSendMarkPrivateMessageAsRead(
  form: MarkPrivateMessageAsReadForm
) {
  return wsSendWrapper(UserOperation.MarkPrivateMessageAsRead, form);
}

export function wsSendGetPrivateMessages(form: GetPrivateMessagesForm) {
  return wsSendWrapper(UserOperation.GetPrivateMessages, form);
}

export function wsSendSaveSiteConfig(form: SiteConfigForm) {
  return wsSendWrapper(UserOperation.SaveSiteConfig, form);
}

function wsSendWrapper(op: UserOperation, data: MessageType) {
  let send = { op: UserOperation[op], data: data };
  console.log(send);
  return JSON.stringify(send);
}
