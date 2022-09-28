import { ClassConstructor, deserialize, serialize } from "class-transformer";
import fetch from "node-fetch";
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
  StickyPost,
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
import { VERSION } from "./interfaces/others";

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

  /**
   * Generates a new instance of LemmyHttp.
   * @param baseUrl the base url, without the vX version: https://lemmy.ml -> goes to https://lemmy.ml/api/vX
   * @param headers optional headers. Should contain `x-real-ip` and `x-forwarded-for` .
   */
  constructor(baseUrl: string, headers?: { [key: string]: string }) {
    this.apiUrl = `${baseUrl}/api/${VERSION}`;

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
    return this.wrapper(HttpType.Get, "/site", form, GetSiteResponse);
  }

  /**
   * Create your site.
   *
   * `HTTP.POST /site`
   */
  async createSite(form: CreateSite) {
    return this.wrapper(HttpType.Post, "/site", form, SiteResponse);
  }

  /**
   * Edit your site.
   *
   * `HTTP.PUT /site`
   */
  async editSite(form: EditSite) {
    return this.wrapper(HttpType.Put, "/site", form, SiteResponse);
  }

  /**
   * Leave the Site admins.
   *
   * `HTTP.POST /user/leave_admin`
   */
  async leaveAdmin(form: LeaveAdmin) {
    return this.wrapper(
      HttpType.Post,
      "/user/leave_admin",
      form,
      GetSiteResponse
    );
  }

  /**
   * Get the modlog.
   *
   * `HTTP.GET /modlog`
   */
  async getModlog(form: GetModlog) {
    return this.wrapper(HttpType.Get, "/modlog", form, GetModlogResponse);
  }

  /**
   * Search lemmy.
   *
   * `HTTP.GET /search`
   */
  async search(form: Search) {
    return this.wrapper(HttpType.Get, "/search", form, SearchResponse);
  }

  /**
   * Fetch a non-local / federated object.
   *
   * `HTTP.GET /resolve_object`
   */
  async resolveObject(form: ResolveObject) {
    return this.wrapper(
      HttpType.Get,
      "/resolve_object",
      form,
      ResolveObjectResponse
    );
  }

  /**
   * Create a new community.
   *
   * `HTTP.POST /community`
   */
  async createCommunity(form: CreateCommunity) {
    return this.wrapper(HttpType.Post, "/community", form, CommunityResponse);
  }

  /**
   * Get / fetch a community.
   *
   * `HTTP.GET /community`
   */
  async getCommunity(form: GetCommunity) {
    return this.wrapper(HttpType.Get, "/community", form, GetCommunityResponse);
  }

  /**
   * Edit a community.
   *
   * `HTTP.PUT /community`
   */
  async editCommunity(form: EditCommunity) {
    return this.wrapper(HttpType.Put, "/community", form, CommunityResponse);
  }

  /**
   * List communities, with various filters.
   *
   * `HTTP.GET /community/list`
   */
  async listCommunities(form: ListCommunities) {
    return this.wrapper(
      HttpType.Get,
      "/community/list",
      form,
      ListCommunitiesResponse
    );
  }

  /**
   * Follow / subscribe to a community.
   *
   * `HTTP.POST /community/follow`
   */
  async followCommunity(form: FollowCommunity) {
    return this.wrapper(
      HttpType.Post,
      "/community/follow",
      form,
      CommunityResponse
    );
  }

  /**
   * Block a community.
   *
   * `HTTP.POST /community/block`
   */
  async blockCommunity(form: BlockCommunity) {
    return this.wrapper(
      HttpType.Post,
      "/community/block",
      form,
      BlockCommunityResponse
    );
  }

  /**
   * Delete a community.
   *
   * `HTTP.POST /community/delete`
   */
  async deleteCommunity(form: DeleteCommunity) {
    return this.wrapper(
      HttpType.Post,
      "/community/delete",
      form,
      CommunityResponse
    );
  }

  /**
   * A moderator remove for a community.
   *
   * `HTTP.POST /community/remove`
   */
  async removeCommunity(form: RemoveCommunity) {
    return this.wrapper(
      HttpType.Post,
      "/community/remove",
      form,
      CommunityResponse
    );
  }

  /**
   * Transfer your community to an existing moderator.
   *
   * `HTTP.POST /community/transfer`
   */
  async transferCommunity(form: TransferCommunity) {
    return this.wrapper(
      HttpType.Post,
      "/community/transfer",
      form,
      GetCommunityResponse
    );
  }

  /**
   * Ban a user from a community.
   *
   * `HTTP.POST /community/ban_user`
   */
  async banFromCommunity(form: BanFromCommunity) {
    return this.wrapper(
      HttpType.Post,
      "/community/ban_user",
      form,
      BanFromCommunityResponse
    );
  }

  /**
   * Add a moderator to your community.
   *
   * `HTTP.POST /community/mod`
   */
  async addModToCommunity(form: AddModToCommunity) {
    return this.wrapper(
      HttpType.Post,
      "/community/mod",
      form,
      AddModToCommunityResponse
    );
  }

  /**
   * Create a post.
   *
   * `HTTP.POST /post`
   */
  async createPost(form: CreatePost) {
    return this.wrapper(HttpType.Post, "/post", form, PostResponse);
  }

  /**
   * Get / fetch a post.
   *
   * `HTTP.GET /post`
   */
  async getPost(form: GetPost) {
    return this.wrapper(HttpType.Get, "/post", form, GetPostResponse);
  }

  /**
   * Edit a post.
   *
   * `HTTP.PUT /post`
   */
  async editPost(form: EditPost) {
    return this.wrapper(HttpType.Put, "/post", form, PostResponse);
  }

  /**
   * Delete a post.
   *
   * `HTTP.POST /post/delete`
   */
  async deletePost(form: DeletePost) {
    return this.wrapper(HttpType.Post, "/post/delete", form, PostResponse);
  }

  /**
   * A moderator remove for a post.
   *
   * `HTTP.POST /post/remove`
   */
  async removePost(form: RemovePost) {
    return this.wrapper(HttpType.Post, "/post/remove", form, PostResponse);
  }

  /**
   * Mark a post as read.
   *
   * `HTTP.POST /post/mark_as_read`
   */
  async markPostAsRead(form: MarkPostAsRead) {
    return this.wrapper(
      HttpType.Post,
      "/post/mark_as_read",
      form,
      PostResponse
    );
  }

  /**
   * A moderator can lock a post ( IE disable new comments ).
   *
   * `HTTP.POST /post/lock`
   */
  async lockPost(form: LockPost) {
    return this.wrapper(HttpType.Post, "/post/lock", form, PostResponse);
  }

  /**
   * A moderator can sticky a post ( IE stick it to the top of a community ).
   *
   * `HTTP.POST /post/sticky`
   */
  async stickyPost(form: StickyPost) {
    return this.wrapper(HttpType.Post, "/post/sticky", form, PostResponse);
  }

  /**
   * Get / fetch posts, with various filters.
   *
   * `HTTP.GET /post/list`
   */
  async getPosts(form: GetPosts) {
    return this.wrapper(HttpType.Get, "/post/list", form, GetPostsResponse);
  }

  /**
   * Like / vote on a post.
   *
   * `HTTP.POST /post/like`
   */
  async likePost(form: CreatePostLike) {
    return this.wrapper(HttpType.Post, "/post/like", form, PostResponse);
  }

  /**
   * Save a post.
   *
   * `HTTP.PUT /post/save`
   */
  async savePost(form: SavePost) {
    return this.wrapper(HttpType.Put, "/post/save", form, PostResponse);
  }

  /**
   * Report a post.
   *
   * `HTTP.POST /post/report`
   */
  async createPostReport(form: CreatePostReport) {
    return this.wrapper(
      HttpType.Post,
      "/post/report",
      form,
      PostReportResponse
    );
  }

  /**
   * Resolve a post report. Only a mod can do this.
   *
   * `HTTP.PUT /post/report/resolve`
   */
  async resolvePostReport(form: ResolvePostReport) {
    return this.wrapper(
      HttpType.Put,
      "/post/report/resolve",
      form,
      PostReportResponse
    );
  }

  /**
   * List post reports.
   *
   * `HTTP.GET /post/report/list`
   */
  async listPostReports(form: ListPostReports) {
    return this.wrapper(
      HttpType.Get,
      "/post/report/list",
      form,
      ListPostReportsResponse
    );
  }

  /**
   * Fetch metadata for any given site.
   *
   * `HTTP.GET /post/site_metadata`
   */
  async getSiteMetadata(form: GetSiteMetadata) {
    return this.wrapper(
      HttpType.Get,
      "/post/site_metadata",
      form,
      GetSiteMetadataResponse
    );
  }

  /**
   * Create a comment.
   *
   * `HTTP.POST /comment`
   */
  async createComment(form: CreateComment) {
    return this.wrapper(HttpType.Post, "/comment", form, CommentResponse);
  }

  /**
   * Edit a comment.
   *
   * `HTTP.PUT /comment`
   */
  async editComment(form: EditComment) {
    return this.wrapper(HttpType.Put, "/comment", form, CommentResponse);
  }

  /**
   * Delete a comment.
   *
   * `HTTP.POST /comment/delete`
   */
  async deleteComment(form: DeleteComment) {
    return this.wrapper(
      HttpType.Post,
      "/comment/delete",
      form,
      CommentResponse
    );
  }

  /**
   * A moderator remove for a comment.
   *
   * `HTTP.POST /comment/remove`
   */
  async removeComment(form: RemoveComment) {
    return this.wrapper(
      HttpType.Post,
      "/comment/remove",
      form,
      CommentResponse
    );
  }

  /**
   * Mark a comment as read.
   *
   * `HTTP.POST /comment/mark_as_read`
   */
  async markCommentReplyAsRead(form: MarkCommentReplyAsRead) {
    return this.wrapper(
      HttpType.Post,
      "/comment/mark_as_read",
      form,
      CommentResponse
    );
  }

  /**
   * Like / vote on a comment.
   *
   * `HTTP.POST /comment/like`
   */
  async likeComment(form: CreateCommentLike) {
    return this.wrapper(HttpType.Post, "/comment/like", form, CommentResponse);
  }

  /**
   * Save a comment.
   *
   * `HTTP.PUT /comment/save`
   */
  async saveComment(form: SaveComment) {
    return this.wrapper(HttpType.Put, "/comment/save", form, CommentResponse);
  }

  /**
   * Get / fetch comments.
   *
   * `HTTP.GET /comment/list`
   */
  async getComments(form: GetComments) {
    return this.wrapper(
      HttpType.Get,
      "/comment/list",
      form,
      GetCommentsResponse
    );
  }

  /**
   * Report a comment.
   *
   * `HTTP.POST /comment/report`
   */
  async createCommentReport(form: CreateCommentReport) {
    return this.wrapper(
      HttpType.Post,
      "/comment/report",
      form,
      CommentReportResponse
    );
  }

  /**
   * Resolve a comment report. Only a mod can do this.
   *
   * `HTTP.PUT /comment/report/resolve`
   */
  async resolveCommentReport(form: ResolveCommentReport) {
    return this.wrapper(
      HttpType.Put,
      "/comment/report/resolve",
      form,
      CommentReportResponse
    );
  }

  /**
   * List comment reports.
   *
   * `HTTP.GET /comment/report/list`
   */
  async listCommentReports(form: ListCommentReports) {
    return this.wrapper(
      HttpType.Get,
      "/comment/report/list",
      form,
      ListCommentReportsResponse
    );
  }

  /**
   * Get / fetch private messages.
   *
   * `HTTP.GET /private_message/list`
   */
  async getPrivateMessages(form: GetPrivateMessages) {
    return this.wrapper(
      HttpType.Get,
      "/private_message/list",
      form,
      PrivateMessagesResponse
    );
  }

  /**
   * Create a private message.
   *
   * `HTTP.POST /private_message`
   */
  async createPrivateMessage(form: CreatePrivateMessage) {
    return this.wrapper(
      HttpType.Post,
      "/private_message",
      form,
      PrivateMessageResponse
    );
  }

  /**
   * Edit a private message.
   *
   * `HTTP.PUT /private_message`
   */
  async editPrivateMessage(form: EditPrivateMessage) {
    return this.wrapper(
      HttpType.Put,
      "/private_message",
      form,
      PrivateMessageResponse
    );
  }

  /**
   * Delete a private message.
   *
   * `HTTP.POST /private_message/delete`
   */
  async deletePrivateMessage(form: DeletePrivateMessage) {
    return this.wrapper(
      HttpType.Post,
      "/private_message/delete",
      form,
      PrivateMessageResponse
    );
  }

  /**
   * Mark a private message as read.
   *
   * `HTTP.POST /private_message/mark_as_read`
   */
  async markPrivateMessageAsRead(form: MarkPrivateMessageAsRead) {
    return this.wrapper(
      HttpType.Post,
      "/private_message/mark_as_read",
      form,
      PrivateMessageResponse
    );
  }

  /**
   * Create a report for a private message.
   *
   * `HTTP.POST /private_message/report`
   */
  async createPrivateMessageReport(form: CreatePrivateMessageReport) {
    return this.wrapper(
      HttpType.Post,
      "/private_message/report",
      form,
      PrivateMessageReportResponse
    );
  }

  /**
   * Resolve a report for a private message.
   *
   * `HTTP.PUT /private_message/report/resolve`
   */
  async resolvePrivateMessageReport(form: ResolvePrivateMessageReport) {
    return this.wrapper(
      HttpType.Put,
      "/private_message/report/resolve",
      form,
      PrivateMessageReportResponse
    );
  }

  /**
   * List private message reports.
   *
   * `HTTP.GET /private_message/report/list`
   */
  async listPrivateMessageReports(form: ListPrivateMessageReports) {
    return this.wrapper(
      HttpType.Get,
      "/private_message/report/list",
      form,
      ListPrivateMessageReportsResponse
    );
  }

  /**
   * Register a new user.
   *
   * `HTTP.POST /user/register`
   */
  async register(form: Register) {
    return this.wrapper(HttpType.Post, "/user/register", form, LoginResponse);
  }

  /**
   * Log into lemmy.
   *
   * `HTTP.POST /user/login`
   */
  async login(form: Login) {
    return this.wrapper(HttpType.Post, "/user/login", form, LoginResponse);
  }

  /**
   * Get the details for a person.
   *
   * `HTTP.GET /user`
   */
  async getPersonDetails(form: GetPersonDetails) {
    return this.wrapper(HttpType.Get, "/user", form, GetPersonDetailsResponse);
  }

  /**
   * Get mentions for your user.
   *
   * `HTTP.GET /user/mention`
   */
  async getPersonMentions(form: GetPersonMentions) {
    return this.wrapper(
      HttpType.Get,
      "/user/mention",
      form,
      GetPersonMentionsResponse
    );
  }

  /**
   * Mark a person mention as read.
   *
   * `HTTP.POST /user/mention/mark_as_read`
   */
  async markPersonMentionAsRead(form: MarkPersonMentionAsRead) {
    return this.wrapper(
      HttpType.Post,
      "/user/mention/mark_as_read",
      form,
      PersonMentionResponse
    );
  }

  /**
   * Get comment replies.
   *
   * `HTTP.GET /user/replies`
   */
  async getReplies(form: GetReplies) {
    return this.wrapper(
      HttpType.Get,
      "/user/replies",
      form,
      GetRepliesResponse
    );
  }

  /**
   * Ban a person from your site.
   *
   * `HTTP.POST /user/ban`
   */
  async banPerson(form: BanPerson) {
    return this.wrapper(HttpType.Post, "/user/ban", form, BanPersonResponse);
  }

  /**
   * Get a list of banned users
   *
   * `HTTP.GET /user/banned`
   */
  async getBannedPersons(form: GetBannedPersons) {
    return this.wrapper(
      HttpType.Get,
      "/user/banned",
      form,
      BannedPersonsResponse
    );
  }

  /**
   * Block a person.
   *
   * `HTTP.POST /user/block`
   */
  async blockPerson(form: BlockPerson) {
    return this.wrapper(
      HttpType.Post,
      "/user/block",
      form,
      BlockPersonResponse
    );
  }

  /**
   * Fetch a Captcha.
   *
   * `HTTP.GET /user/get_captcha`
   */
  async getCaptcha() {
    return this.wrapper(
      HttpType.Get,
      "/user/get_captcha",
      {},
      GetCaptchaResponse
    );
  }

  /**
   * Delete your account.
   *
   * `HTTP.POST /user/delete_account`
   */
  async deleteAccount(form: DeleteAccount) {
    return this.wrapper(
      HttpType.Post,
      "/user/delete_account",
      form,
      DeleteAccountResponse
    );
  }

  /**
   * Reset your password.
   *
   * `HTTP.POST /user/password_reset`
   */
  async passwordReset(form: PasswordReset) {
    return this.wrapper(
      HttpType.Post,
      "/user/password_reset",
      form,
      PasswordResetResponse
    );
  }

  /**
   * Change your password from an email / token based reset.
   *
   * `HTTP.POST /user/password_change`
   */
  async passwordChange(form: PasswordChange) {
    return this.wrapper(
      HttpType.Post,
      "/user/password_change",
      form,
      LoginResponse
    );
  }

  /**
   * Mark all replies as read.
   *
   * `HTTP.POST /user/mark_all_as_read`
   */
  async markAllAsRead(form: MarkAllAsRead) {
    return this.wrapper(
      HttpType.Post,
      "/user/mark_all_as_read",
      form,
      GetRepliesResponse
    );
  }

  /**
   * Save your user settings.
   *
   * `HTTP.PUT /user/save_user_settings`
   */
  async saveUserSettings(form: SaveUserSettings) {
    return this.wrapper(
      HttpType.Put,
      "/user/save_user_settings",
      form,
      LoginResponse
    );
  }

  /**
   * Change your user password.
   *
   * `HTTP.PUT /user/change_password`
   */
  async changePassword(form: ChangePassword) {
    return this.wrapper(
      HttpType.Put,
      "/user/change_password",
      form,
      LoginResponse
    );
  }

  /**
   * Get counts for your reports
   *
   * `HTTP.GET /user/report_count`
   */
  async getReportCount(form: GetReportCount) {
    return this.wrapper(
      HttpType.Get,
      "/user/report_count",
      form,
      GetReportCountResponse
    );
  }

  /**
   * Get your unread counts
   *
   * `HTTP.GET /user/unread_count`
   */
  async getUnreadCount(form: GetUnreadCount) {
    return this.wrapper(
      HttpType.Get,
      "/user/unread_count",
      form,
      GetUnreadCountResponse
    );
  }

  /**
   * Verify your email
   *
   * `HTTP.POST /user/verify_email`
   */
  async verifyEmail(form: VerifyEmail) {
    return this.wrapper(
      HttpType.Post,
      "/user/verify_email",
      form,
      VerifyEmailResponse
    );
  }

  /**
   * Add an admin to your site.
   *
   * `HTTP.POST /admin/add`
   */
  async addAdmin(form: AddAdmin) {
    return this.wrapper(HttpType.Post, "/admin/add", form, AddAdminResponse);
  }

  /**
   * Get the unread registration applications count.
   *
   * `HTTP.GET /admin/registration_application/count`
   */
  async getUnreadRegistrationApplicationCount(
    form: GetUnreadRegistrationApplicationCount
  ) {
    return this.wrapper(
      HttpType.Get,
      "/admin/registration_application/count",
      form,
      GetUnreadRegistrationApplicationCountResponse
    );
  }

  /**
   * List the registration applications.
   *
   * `HTTP.GET /admin/registration_application/list`
   */
  async listRegistrationApplications(form: ListRegistrationApplications) {
    return this.wrapper(
      HttpType.Get,
      "/admin/registration_application/list",
      form,
      ListRegistrationApplicationsResponse
    );
  }

  /**
   * Approve a registration application
   *
   * `HTTP.PUT /admin/registration_application/approve`
   */
  async approveRegistrationApplication(form: ApproveRegistrationApplication) {
    return this.wrapper(
      HttpType.Put,
      "/admin/registration_application/approve",
      form,
      RegistrationApplicationResponse
    );
  }

  /**
   * Purge / Delete a person from the database.
   *
   * `HTTP.POST /admin/purge/person`
   */
  async purgePerson(form: PurgePerson) {
    return this.wrapper(
      HttpType.Post,
      "/admin/purge/person",
      form,
      PurgeItemResponse
    );
  }

  /**
   * Purge / Delete a community from the database.
   *
   * `HTTP.POST /admin/purge/community`
   */
  async purgeCommunity(form: PurgeCommunity) {
    return this.wrapper(
      HttpType.Post,
      "/admin/purge/community",
      form,
      PurgeItemResponse
    );
  }

  /**
   * Purge / Delete a post from the database.
   *
   * `HTTP.POST /admin/purge/post`
   */
  async purgePost(form: PurgePost) {
    return this.wrapper(
      HttpType.Post,
      "/admin/purge/post",
      form,
      PurgeItemResponse
    );
  }

  /**
   * Purge / Delete a comment from the database.
   *
   * `HTTP.POST /admin/purge/comment`
   */
  async purgeComment(form: PurgeComment) {
    return this.wrapper(
      HttpType.Post,
      "/admin/purge/comment",
      form,
      PurgeItemResponse
    );
  }

  private buildFullUrl(endpoint: string): string {
    return `${this.apiUrl}${endpoint}`;
  }

  private async wrapper<ResponseType, BodyType>(
    type_: HttpType,
    endpoint: string,
    form: BodyType,
    responseClass: ClassConstructor<ResponseType>
  ): Promise<ResponseType> {
    if (type_ == HttpType.Get) {
      let getUrl = `${this.buildFullUrl(endpoint)}?${encodeGetParams(form)}`;
      return fetch(getUrl, {
        method: "GET",
        headers: this.headers,
      }).then(
        d =>
          d
            .text()
            .then(a => deserialize(responseClass, a)) as Promise<ResponseType>
      );
    } else {
      return fetch(this.buildFullUrl(endpoint), {
        method: type_,
        headers: {
          "Content-Type": "application/json",
          ...this.headers,
        },
        body: serialize(form),
      }).then(
        d =>
          d
            .text()
            .then(a => deserialize(responseClass, a)) as Promise<ResponseType>
      );
    }
  }
}

function encodeGetParams<BodyType>(p: BodyType): string {
  // Necessary to remove the Options
  let serialized = JSON.parse(serialize(p));
  return Object.entries(serialized)
    .map(kv => kv.map(encodeURIComponent).join("="))
    .join("&");
}
