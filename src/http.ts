const fetch: typeof globalThis.fetch = async (...args) => {
  if (globalThis?.fetch) {
    return await globalThis.fetch(...args);
  } else {
    const nodeFetch = (await dynamicImport("node-fetch")).default;
    return await nodeFetch(...args);
  }
};

import {
  CommentReportResponse,
  CommentResponse,
  CreateComment,
  CreateCommentLike,
  CreateCommentReport,
  DeleteComment,
  EditComment,
  GetComments,
  GetCommentsResponse,
  ListCommentReports,
  ListCommentReportsResponse,
  RemoveComment,
  ResolveCommentReport,
  SaveComment,
} from "./interfaces/api/comment";
import {
  AddModToCommunity,
  AddModToCommunityResponse,
  BanFromCommunity,
  BanFromCommunityResponse,
  BlockCommunity,
  BlockCommunityResponse,
  CommunityResponse,
  CreateCommunity,
  DeleteCommunity,
  EditCommunity,
  FollowCommunity,
  GetCommunity,
  GetCommunityResponse,
  ListCommunities,
  ListCommunitiesResponse,
  RemoveCommunity,
  TransferCommunity,
} from "./interfaces/api/community";
import {
  AddAdmin,
  AddAdminResponse,
  BannedPersonsResponse,
  BanPerson,
  BanPersonResponse,
  BlockPerson,
  BlockPersonResponse,
  ChangePassword,
  CreatePrivateMessage,
  CreatePrivateMessageReport,
  DeleteAccount,
  DeleteAccountResponse,
  DeletePrivateMessage,
  EditPrivateMessage,
  GetBannedPersons,
  GetCaptchaResponse,
  GetPersonDetails,
  GetPersonDetailsResponse,
  GetPersonMentions,
  GetPersonMentionsResponse,
  GetPrivateMessages,
  GetReplies,
  GetRepliesResponse,
  GetReportCount,
  GetReportCountResponse,
  GetUnreadCount,
  GetUnreadCountResponse,
  ListPrivateMessageReports,
  ListPrivateMessageReportsResponse,
  Login,
  LoginResponse,
  MarkAllAsRead,
  MarkCommentReplyAsRead,
  MarkPersonMentionAsRead,
  MarkPrivateMessageAsRead,
  PasswordChange,
  PasswordReset,
  PasswordResetResponse,
  PersonMentionResponse,
  PrivateMessageReportResponse,
  PrivateMessageResponse,
  PrivateMessagesResponse,
  Register,
  ResolvePrivateMessageReport,
  SaveUserSettings,
  VerifyEmail,
  VerifyEmailResponse,
} from "./interfaces/api/person";
import {
  CreatePost,
  CreatePostLike,
  CreatePostReport,
  DeletePost,
  EditPost,
  FeaturePost,
  GetPost,
  GetPostResponse,
  GetPosts,
  GetPostsResponse,
  GetSiteMetadata,
  GetSiteMetadataResponse,
  ListPostReports,
  ListPostReportsResponse,
  LockPost,
  MarkPostAsRead,
  PostReportResponse,
  PostResponse,
  RemovePost,
  ResolvePostReport,
  SavePost,
} from "./interfaces/api/post";
import {
  ApproveRegistrationApplication,
  CreateSite,
  EditSite,
  GetModlog,
  GetModlogResponse,
  GetSite,
  GetSiteResponse,
  GetUnreadRegistrationApplicationCount,
  GetUnreadRegistrationApplicationCountResponse,
  LeaveAdmin,
  ListRegistrationApplications,
  ListRegistrationApplicationsResponse,
  PurgeComment,
  PurgeCommunity,
  PurgeItemResponse,
  PurgePerson,
  PurgePost,
  RegistrationApplicationResponse,
  ResolveObject,
  ResolveObjectResponse,
  Search,
  SearchResponse,
  SiteResponse,
} from "./interfaces/api/site";
import { UploadImage, UploadImageResponse, VERSION } from "./interfaces/others";
import { dynamicImport } from "./utils";

enum HttpType {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
}

/**
 * Helps build lemmy HTTP requests.
 */
export class LemmyHttp {
  private apiUrl: string;
  private headers: { [key: string]: string } = {};
  private pictrsUrl: string;

  /**
   * Generates a new instance of LemmyHttp.
   * @param baseUrl the base url, without the vX version: https://lemmy.ml -> goes to https://lemmy.ml/api/vX
   * @param headers optional headers. Should contain `x-real-ip` and `x-forwarded-for` .
   */
  constructor(baseUrl: string, headers?: { [key: string]: string }) {
    this.apiUrl = `${baseUrl}/api/${VERSION}`;
    this.pictrsUrl = `${baseUrl}/pictrs/image`;

    if (headers) {
      this.headers = headers;
    }
  }

  /**
   * Gets the site, and your user data.
   *
   * `HTTP.GET /site`
   */
  async getSite(form: GetSite) {
    return await this.wrapper<GetSite, GetSiteResponse>(
      HttpType.Get,
      "/site",
      form
    );
  }

  /**
   * Create your site.
   *
   * `HTTP.POST /site`
   */
  async createSite(form: CreateSite) {
    return await this.wrapper<CreateSite, SiteResponse>(
      HttpType.Post,
      "/site",
      form
    );
  }

  /**
   * Edit your site.
   *
   * `HTTP.PUT /site`
   */
  async editSite(form: EditSite) {
    return await this.wrapper<EditSite, SiteResponse>(
      HttpType.Put,
      "/site",
      form
    );
  }

  /**
   * Leave the Site admins.
   *
   * `HTTP.POST /user/leave_admin`
   */
  async leaveAdmin(form: LeaveAdmin) {
    return await this.wrapper<LeaveAdmin, GetSiteResponse>(
      HttpType.Post,
      "/user/leave_admin",
      form
    );
  }

  /**
   * Get the modlog.
   *
   * `HTTP.GET /modlog`
   */
  async getModlog(form: GetModlog) {
    return await this.wrapper<GetModlog, GetModlogResponse>(
      HttpType.Get,
      "/modlog",
      form
    );
  }

  /**
   * Search lemmy.
   *
   * `HTTP.GET /search`
   */
  async search(form: Search) {
    return await this.wrapper<Search, SearchResponse>(
      HttpType.Get,
      "/search",
      form
    );
  }

  /**
   * Fetch a non-local / federated object.
   *
   * `HTTP.GET /resolve_object`
   */
  async resolveObject(form: ResolveObject) {
    return await this.wrapper<ResolveObject, ResolveObjectResponse>(
      HttpType.Get,
      "/resolve_object",
      form
    );
  }

  /**
   * Create a new community.
   *
   * `HTTP.POST /community`
   */
  async createCommunity(form: CreateCommunity) {
    return await this.wrapper<CreateCommunity, CommunityResponse>(
      HttpType.Post,
      "/community",
      form
    );
  }

  /**
   * Get / fetch a community.
   *
   * `HTTP.GET /community`
   */
  async getCommunity(form: GetCommunity) {
    return await this.wrapper<GetCommunity, GetCommunityResponse>(
      HttpType.Get,
      "/community",
      form
    );
  }

  /**
   * Edit a community.
   *
   * `HTTP.PUT /community`
   */
  async editCommunity(form: EditCommunity) {
    return await this.wrapper<EditCommunity, CommunityResponse>(
      HttpType.Put,
      "/community",
      form
    );
  }

  /**
   * List communities, with various filters.
   *
   * `HTTP.GET /community/list`
   */
  async listCommunities(form: ListCommunities) {
    return await this.wrapper<ListCommunities, ListCommunitiesResponse>(
      HttpType.Get,
      "/community/list",
      form
    );
  }

  /**
   * Follow / subscribe to a community.
   *
   * `HTTP.POST /community/follow`
   */
  async followCommunity(form: FollowCommunity) {
    return await this.wrapper<FollowCommunity, CommunityResponse>(
      HttpType.Post,
      "/community/follow",
      form
    );
  }

  /**
   * Block a community.
   *
   * `HTTP.POST /community/block`
   */
  async blockCommunity(form: BlockCommunity) {
    return await this.wrapper<BlockCommunity, BlockCommunityResponse>(
      HttpType.Post,
      "/community/block",
      form
    );
  }

  /**
   * Delete a community.
   *
   * `HTTP.POST /community/delete`
   */
  async deleteCommunity(form: DeleteCommunity) {
    return await this.wrapper<DeleteCommunity, CommunityResponse>(
      HttpType.Post,
      "/community/delete",
      form
    );
  }

  /**
   * A moderator remove for a community.
   *
   * `HTTP.POST /community/remove`
   */
  async removeCommunity(form: RemoveCommunity) {
    return await this.wrapper<RemoveCommunity, CommunityResponse>(
      HttpType.Post,
      "/community/remove",
      form
    );
  }

  /**
   * Transfer your community to an existing moderator.
   *
   * `HTTP.POST /community/transfer`
   */
  async transferCommunity(form: TransferCommunity) {
    return await this.wrapper<TransferCommunity, GetCommunityResponse>(
      HttpType.Post,
      "/community/transfer",
      form
    );
  }

  /**
   * Ban a user from a community.
   *
   * `HTTP.POST /community/ban_user`
   */
  async banFromCommunity(form: BanFromCommunity) {
    return await this.wrapper<BanFromCommunity, BanFromCommunityResponse>(
      HttpType.Post,
      "/community/ban_user",
      form
    );
  }

  /**
   * Add a moderator to your community.
   *
   * `HTTP.POST /community/mod`
   */
  async addModToCommunity(form: AddModToCommunity) {
    return await this.wrapper<AddModToCommunity, AddModToCommunityResponse>(
      HttpType.Post,
      "/community/mod",
      form
    );
  }

  /**
   * Create a post.
   *
   * `HTTP.POST /post`
   */
  async createPost(form: CreatePost) {
    return await this.wrapper<CreatePost, PostResponse>(
      HttpType.Post,
      "/post",
      form
    );
  }

  /**
   * Get / fetch a post.
   *
   * `HTTP.GET /post`
   */
  async getPost(form: GetPost) {
    return await this.wrapper<GetPost, GetPostResponse>(
      HttpType.Get,
      "/post",
      form
    );
  }

  /**
   * Edit a post.
   *
   * `HTTP.PUT /post`
   */
  async editPost(form: EditPost) {
    return await this.wrapper<EditPost, PostResponse>(
      HttpType.Put,
      "/post",
      form
    );
  }

  /**
   * Delete a post.
   *
   * `HTTP.POST /post/delete`
   */
  async deletePost(form: DeletePost) {
    return await this.wrapper<DeletePost, PostResponse>(
      HttpType.Post,
      "/post/delete",
      form
    );
  }

  /**
   * A moderator remove for a post.
   *
   * `HTTP.POST /post/remove`
   */
  async removePost(form: RemovePost) {
    return await this.wrapper<RemovePost, PostResponse>(
      HttpType.Post,
      "/post/remove",
      form
    );
  }

  /**
   * Mark a post as read.
   *
   * `HTTP.POST /post/mark_as_read`
   */
  async markPostAsRead(form: MarkPostAsRead) {
    return await this.wrapper<MarkPostAsRead, PostResponse>(
      HttpType.Post,
      "/post/mark_as_read",
      form
    );
  }

  /**
   * A moderator can lock a post ( IE disable new comments ).
   *
   * `HTTP.POST /post/lock`
   */
  async lockPost(form: LockPost) {
    return await this.wrapper<LockPost, PostResponse>(
      HttpType.Post,
      "/post/lock",
      form
    );
  }

  /**
   * A moderator can feature a community post ( IE stick it to the top of a community ).
   *
   * `HTTP.POST /post/feature`
   */
  async featurePost(form: FeaturePost) {
    return await this.wrapper<FeaturePost, PostResponse>(
      HttpType.Post,
      "/post/feature",
      form
    );
  }

  /**
   * Get / fetch posts, with various filters.
   *
   * `HTTP.GET /post/list`
   */
  async getPosts(form: GetPosts) {
    return await this.wrapper<GetPosts, GetPostsResponse>(
      HttpType.Get,
      "/post/list",
      form
    );
  }

  /**
   * Like / vote on a post.
   *
   * `HTTP.POST /post/like`
   */
  async likePost(form: CreatePostLike) {
    return await this.wrapper<CreatePostLike, PostResponse>(
      HttpType.Post,
      "/post/like",
      form
    );
  }

  /**
   * Save a post.
   *
   * `HTTP.PUT /post/save`
   */
  async savePost(form: SavePost) {
    return await this.wrapper<SavePost, PostResponse>(
      HttpType.Put,
      "/post/save",
      form
    );
  }

  /**
   * Report a post.
   *
   * `HTTP.POST /post/report`
   */
  async createPostReport(form: CreatePostReport) {
    return await this.wrapper<CreatePostReport, PostReportResponse>(
      HttpType.Post,
      "/post/report",
      form
    );
  }

  /**
   * Resolve a post report. Only a mod can do this.
   *
   * `HTTP.PUT /post/report/resolve`
   */
  async resolvePostReport(form: ResolvePostReport) {
    return await this.wrapper<ResolvePostReport, PostReportResponse>(
      HttpType.Put,
      "/post/report/resolve",
      form
    );
  }

  /**
   * List post reports.
   *
   * `HTTP.GET /post/report/list`
   */
  async listPostReports(form: ListPostReports) {
    return await this.wrapper<ListPostReports, ListPostReportsResponse>(
      HttpType.Get,
      "/post/report/list",
      form
    );
  }

  /**
   * Fetch metadata for any given site.
   *
   * `HTTP.GET /post/site_metadata`
   */
  async getSiteMetadata(form: GetSiteMetadata) {
    return await this.wrapper<GetSiteMetadata, GetSiteMetadataResponse>(
      HttpType.Get,
      "/post/site_metadata",
      form
    );
  }

  /**
   * Create a comment.
   *
   * `HTTP.POST /comment`
   */
  async createComment(form: CreateComment) {
    return await this.wrapper<CreateComment, CommentResponse>(
      HttpType.Post,
      "/comment",
      form
    );
  }

  /**
   * Edit a comment.
   *
   * `HTTP.PUT /comment`
   */
  async editComment(form: EditComment) {
    return await this.wrapper<EditComment, CommentResponse>(
      HttpType.Put,
      "/comment",
      form
    );
  }

  /**
   * Delete a comment.
   *
   * `HTTP.POST /comment/delete`
   */
  async deleteComment(form: DeleteComment) {
    return await this.wrapper<DeleteComment, CommentResponse>(
      HttpType.Post,
      "/comment/delete",
      form
    );
  }

  /**
   * A moderator remove for a comment.
   *
   * `HTTP.POST /comment/remove`
   */
  async removeComment(form: RemoveComment) {
    return await this.wrapper<RemoveComment, CommentResponse>(
      HttpType.Post,
      "/comment/remove",
      form
    );
  }

  /**
   * Mark a comment as read.
   *
   * `HTTP.POST /comment/mark_as_read`
   */
  async markCommentReplyAsRead(form: MarkCommentReplyAsRead) {
    return await this.wrapper<MarkCommentReplyAsRead, CommentResponse>(
      HttpType.Post,
      "/comment/mark_as_read",
      form
    );
  }

  /**
   * Like / vote on a comment.
   *
   * `HTTP.POST /comment/like`
   */
  async likeComment(form: CreateCommentLike) {
    return await this.wrapper<CreateCommentLike, CommentResponse>(
      HttpType.Post,
      "/comment/like",
      form
    );
  }

  /**
   * Save a comment.
   *
   * `HTTP.PUT /comment/save`
   */
  async saveComment(form: SaveComment) {
    return await this.wrapper<SaveComment, CommentResponse>(
      HttpType.Put,
      "/comment/save",
      form
    );
  }

  /**
   * Get / fetch comments.
   *
   * `HTTP.GET /comment/list`
   */
  async getComments(form: GetComments) {
    return await this.wrapper<GetComments, GetCommentsResponse>(
      HttpType.Get,
      "/comment/list",
      form
    );
  }

  /**
   * Report a comment.
   *
   * `HTTP.POST /comment/report`
   */
  async createCommentReport(form: CreateCommentReport) {
    return await this.wrapper<CreateCommentReport, CommentReportResponse>(
      HttpType.Post,
      "/comment/report",
      form
    );
  }

  /**
   * Resolve a comment report. Only a mod can do this.
   *
   * `HTTP.PUT /comment/report/resolve`
   */
  async resolveCommentReport(form: ResolveCommentReport) {
    return await this.wrapper<ResolveCommentReport, CommentReportResponse>(
      HttpType.Put,
      "/comment/report/resolve",
      form
    );
  }

  /**
   * List comment reports.
   *
   * `HTTP.GET /comment/report/list`
   */
  async listCommentReports(form: ListCommentReports) {
    return await this.wrapper<ListCommentReports, ListCommentReportsResponse>(
      HttpType.Get,
      "/comment/report/list",
      form
    );
  }

  /**
   * Get / fetch private messages.
   *
   * `HTTP.GET /private_message/list`
   */
  async getPrivateMessages(form: GetPrivateMessages) {
    return await this.wrapper<GetPrivateMessages, PrivateMessagesResponse>(
      HttpType.Get,
      "/private_message/list",
      form
    );
  }

  /**
   * Create a private message.
   *
   * `HTTP.POST /private_message`
   */
  async createPrivateMessage(form: CreatePrivateMessage) {
    return await this.wrapper<CreatePrivateMessage, PrivateMessageResponse>(
      HttpType.Post,
      "/private_message",
      form
    );
  }

  /**
   * Edit a private message.
   *
   * `HTTP.PUT /private_message`
   */
  async editPrivateMessage(form: EditPrivateMessage) {
    return await this.wrapper<EditPrivateMessage, PrivateMessageResponse>(
      HttpType.Put,
      "/private_message",
      form
    );
  }

  /**
   * Delete a private message.
   *
   * `HTTP.POST /private_message/delete`
   */
  async deletePrivateMessage(form: DeletePrivateMessage) {
    return await this.wrapper<DeletePrivateMessage, PrivateMessageResponse>(
      HttpType.Post,
      "/private_message/delete",
      form
    );
  }

  /**
   * Mark a private message as read.
   *
   * `HTTP.POST /private_message/mark_as_read`
   */
  async markPrivateMessageAsRead(form: MarkPrivateMessageAsRead) {
    return await this.wrapper<MarkPrivateMessageAsRead, PrivateMessageResponse>(
      HttpType.Post,
      "/private_message/mark_as_read",
      form
    );
  }

  /**
   * Create a report for a private message.
   *
   * `HTTP.POST /private_message/report`
   */
  async createPrivateMessageReport(form: CreatePrivateMessageReport) {
    return await this.wrapper<
      CreatePrivateMessageReport,
      PrivateMessageReportResponse
    >(HttpType.Post, "/private_message/report", form);
  }

  /**
   * Resolve a report for a private message.
   *
   * `HTTP.PUT /private_message/report/resolve`
   */
  async resolvePrivateMessageReport(form: ResolvePrivateMessageReport) {
    return await this.wrapper<
      ResolvePrivateMessageReport,
      PrivateMessageReportResponse
    >(HttpType.Put, "/private_message/report/resolve", form);
  }

  /**
   * List private message reports.
   *
   * `HTTP.GET /private_message/report/list`
   */
  async listPrivateMessageReports(form: ListPrivateMessageReports) {
    return await this.wrapper<
      ListPrivateMessageReports,
      ListPrivateMessageReportsResponse
    >(HttpType.Get, "/private_message/report/list", form);
  }

  /**
   * Register a new user.
   *
   * `HTTP.POST /user/register`
   */
  async register(form: Register) {
    return await this.wrapper<Register, LoginResponse>(
      HttpType.Post,
      "/user/register",
      form
    );
  }

  /**
   * Log into lemmy.
   *
   * `HTTP.POST /user/login`
   */
  async login(form: Login) {
    return await this.wrapper<Login, LoginResponse>(
      HttpType.Post,
      "/user/login",
      form
    );
  }

  /**
   * Get the details for a person.
   *
   * `HTTP.GET /user`
   */
  async getPersonDetails(form: GetPersonDetails) {
    return await this.wrapper<GetPersonDetails, GetPersonDetailsResponse>(
      HttpType.Get,
      "/user",
      form
    );
  }

  /**
   * Get mentions for your user.
   *
   * `HTTP.GET /user/mention`
   */
  async getPersonMentions(form: GetPersonMentions) {
    return await this.wrapper<GetPersonMentions, GetPersonMentionsResponse>(
      HttpType.Get,
      "/user/mention",
      form
    );
  }

  /**
   * Mark a person mention as read.
   *
   * `HTTP.POST /user/mention/mark_as_read`
   */
  async markPersonMentionAsRead(form: MarkPersonMentionAsRead) {
    return await this.wrapper<MarkPersonMentionAsRead, PersonMentionResponse>(
      HttpType.Post,
      "/user/mention/mark_as_read",
      form
    );
  }

  /**
   * Get comment replies.
   *
   * `HTTP.GET /user/replies`
   */
  async getReplies(form: GetReplies) {
    return await this.wrapper<GetReplies, GetRepliesResponse>(
      HttpType.Get,
      "/user/replies",
      form
    );
  }

  /**
   * Ban a person from your site.
   *
   * `HTTP.POST /user/ban`
   */
  async banPerson(form: BanPerson) {
    return await this.wrapper<BanPerson, BanPersonResponse>(
      HttpType.Post,
      "/user/ban",
      form
    );
  }

  /**
   * Get a list of banned users
   *
   * `HTTP.GET /user/banned`
   */
  async getBannedPersons(form: GetBannedPersons) {
    return await this.wrapper<GetBannedPersons, BannedPersonsResponse>(
      HttpType.Get,
      "/user/banned",
      form
    );
  }

  /**
   * Block a person.
   *
   * `HTTP.POST /user/block`
   */
  async blockPerson(form: BlockPerson) {
    return await this.wrapper<BlockPerson, BlockPersonResponse>(
      HttpType.Post,
      "/user/block",
      form
    );
  }

  /**
   * Fetch a Captcha.
   *
   * `HTTP.GET /user/get_captcha`
   */
  async getCaptcha() {
    return await this.wrapper<any, GetCaptchaResponse>(
      HttpType.Get,
      "/user/get_captcha",
      {}
    );
  }

  /**
   * Delete your account.
   *
   * `HTTP.POST /user/delete_account`
   */
  async deleteAccount(form: DeleteAccount) {
    return await this.wrapper<DeleteAccount, DeleteAccountResponse>(
      HttpType.Post,
      "/user/delete_account",
      form
    );
  }

  /**
   * Reset your password.
   *
   * `HTTP.POST /user/password_reset`
   */
  async passwordReset(form: PasswordReset) {
    return await this.wrapper<PasswordReset, PasswordResetResponse>(
      HttpType.Post,
      "/user/password_reset",
      form
    );
  }

  /**
   * Change your password from an email / token based reset.
   *
   * `HTTP.POST /user/password_change`
   */
  async passwordChange(form: PasswordChange) {
    return await this.wrapper<PasswordChange, LoginResponse>(
      HttpType.Post,
      "/user/password_change",
      form
    );
  }

  /**
   * Mark all replies as read.
   *
   * `HTTP.POST /user/mark_all_as_read`
   */
  async markAllAsRead(form: MarkAllAsRead) {
    return await this.wrapper<MarkAllAsRead, GetRepliesResponse>(
      HttpType.Post,
      "/user/mark_all_as_read",
      form
    );
  }

  /**
   * Save your user settings.
   *
   * `HTTP.PUT /user/save_user_settings`
   */
  async saveUserSettings(form: SaveUserSettings) {
    return await this.wrapper<SaveUserSettings, LoginResponse>(
      HttpType.Put,
      "/user/save_user_settings",
      form
    );
  }

  /**
   * Change your user password.
   *
   * `HTTP.PUT /user/change_password`
   */
  async changePassword(form: ChangePassword) {
    return await this.wrapper<ChangePassword, LoginResponse>(
      HttpType.Put,
      "/user/change_password",
      form
    );
  }

  /**
   * Get counts for your reports
   *
   * `HTTP.GET /user/report_count`
   */
  async getReportCount(form: GetReportCount) {
    return await this.wrapper<GetReportCount, GetReportCountResponse>(
      HttpType.Get,
      "/user/report_count",
      form
    );
  }

  /**
   * Get your unread counts
   *
   * `HTTP.GET /user/unread_count`
   */
  async getUnreadCount(form: GetUnreadCount) {
    return await this.wrapper<GetUnreadCount, GetUnreadCountResponse>(
      HttpType.Get,
      "/user/unread_count",
      form
    );
  }

  /**
   * Verify your email
   *
   * `HTTP.POST /user/verify_email`
   */
  async verifyEmail(form: VerifyEmail) {
    return await this.wrapper<VerifyEmail, VerifyEmailResponse>(
      HttpType.Post,
      "/user/verify_email",
      form
    );
  }

  /**
   * Add an admin to your site.
   *
   * `HTTP.POST /admin/add`
   */
  async addAdmin(form: AddAdmin) {
    return await this.wrapper<AddAdmin, AddAdminResponse>(
      HttpType.Post,
      "/admin/add",
      form
    );
  }

  /**
   * Get the unread registration applications count.
   *
   * `HTTP.GET /admin/registration_application/count`
   */
  async getUnreadRegistrationApplicationCount(
    form: GetUnreadRegistrationApplicationCount
  ) {
    return await this.wrapper<
      GetUnreadRegistrationApplicationCount,
      GetUnreadRegistrationApplicationCountResponse
    >(HttpType.Get, "/admin/registration_application/count", form);
  }

  /**
   * List the registration applications.
   *
   * `HTTP.GET /admin/registration_application/list`
   */
  async listRegistrationApplications(form: ListRegistrationApplications) {
    return await this.wrapper<
      ListRegistrationApplications,
      ListRegistrationApplicationsResponse
    >(HttpType.Get, "/admin/registration_application/list", form);
  }

  /**
   * Approve a registration application
   *
   * `HTTP.PUT /admin/registration_application/approve`
   */
  async approveRegistrationApplication(form: ApproveRegistrationApplication) {
    return await this.wrapper<
      ApproveRegistrationApplication,
      RegistrationApplicationResponse
    >(HttpType.Put, "/admin/registration_application/approve", form);
  }

  /**
   * Purge / Delete a person from the database.
   *
   * `HTTP.POST /admin/purge/person`
   */
  async purgePerson(form: PurgePerson) {
    return await this.wrapper<PurgePerson, PurgeItemResponse>(
      HttpType.Post,
      "/admin/purge/person",
      form
    );
  }

  /**
   * Purge / Delete a community from the database.
   *
   * `HTTP.POST /admin/purge/community`
   */
  async purgeCommunity(form: PurgeCommunity) {
    return await this.wrapper<PurgeCommunity, PurgeItemResponse>(
      HttpType.Post,
      "/admin/purge/community",
      form
    );
  }

  /**
   * Purge / Delete a post from the database.
   *
   * `HTTP.POST /admin/purge/post`
   */
  async purgePost(form: PurgePost) {
    return await this.wrapper<PurgePost, PurgeItemResponse>(
      HttpType.Post,
      "/admin/purge/post",
      form
    );
  }

  /**
   * Purge / Delete a comment from the database.
   *
   * `HTTP.POST /admin/purge/comment`
   */
  async purgeComment(form: PurgeComment) {
    return await this.wrapper<PurgeComment, PurgeItemResponse>(
      HttpType.Post,
      "/admin/purge/comment",
      form
    );
  }

  async uploadImage({
    image,
    auth,
  }: UploadImage): Promise<UploadImageResponse> {
    const formData = await createFormData(image);

    // If jwt cookie not already set by browser, set it with passed in auth
    let headers: Record<string, string> | undefined = undefined;
    if (!globalThis?.document?.cookie?.includes("jwt=")) {
      headers = {
        Cookie: `jwt=${auth}`,
      };
    }

    let url: string | undefined = undefined;
    let delete_url: string | undefined = undefined;

    const response = await fetch(this.pictrsUrl, {
      method: HttpType.Post,
      body: formData,
      headers,
    });

    const responseJson = await response.json();

    if (responseJson.msg == "ok") {
      const { file: hash, delete_token: deleteToken } = responseJson.files[0];
      delete_url = `${this.pictrsUrl}/delete/${deleteToken}/${hash}`;
      url = `${this.pictrsUrl}/${hash}`;
    }

    return {
      ...responseJson,
      url,
      delete_url,
    };
  }

  private buildFullUrl(endpoint: string) {
    return `${this.apiUrl}${endpoint}`;
  }

  private async wrapper<BodyType extends object, ResponseType>(
    type_: HttpType,
    endpoint: string,
    form: BodyType
  ): Promise<ResponseType> {
    if (type_ == HttpType.Get) {
      const getUrl = `${this.buildFullUrl(endpoint)}?${encodeGetParams(form)}`;
      const response = await fetch(getUrl, {
        method: HttpType.Get,
        headers: this.headers,
      });

      return await response.json();
    } else {
      const response = await fetch(this.buildFullUrl(endpoint), {
        method: type_,
        headers: {
          "Content-Type": "application/json",
          ...this.headers,
        },
        body: JSON.stringify(form),
      });

      return await response.json();
    }
  }
}

function encodeGetParams<BodyType extends object>(p: BodyType): string {
  return Object.entries(p)
    .filter(kv => !!kv[1])
    .map(kv => kv.map(encodeURIComponent).join("="))
    .join("&");
}

async function createFormData(image: Blob | Buffer) {
  const file = await createFile(image);
  let formData: FormData;

  if (globalThis?.FormData) {
    formData = new FormData();
  } else {
    const FormData = (await dynamicImport("node-fetch")).FormData;
    formData = new FormData();
  }

  formData.append("images[]", file);

  return formData;
}

// The File constructor needs a filename to make a new file, but it doesn't actually
// effect the name or for a name and is smart enough to figure out the filetype without
// looking at the file extension.
const imageFileName = "image.jpg";

async function createFile(image: Blob | Buffer) {
  let file = image;

  if (file.constructor.name !== "File") {
    if (globalThis?.File) {
      file = new File([image], imageFileName);
    } else {
      const File = (await dynamicImport("node-fetch")).File;
      file = new File([image], imageFileName);
    }
  }

  return file as File;
}
