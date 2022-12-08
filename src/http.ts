import { ClassConstructor, deserialize, serialize } from "class-transformer";
import fetch from "node-fetch";

import {
  AddAdminInput,
  AddModToCommunityInput,
  ApproveRegistrationApplicationInput,
  BanFromCommunityInput,
  BanPersonInput,
  BlockCommunityInput,
  BlockPersonInput,
  ChangePasswordInput,
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
  VerifyEmailInput,
} from "./inputTypes";
import {
  CommentReportResponse,
  CommentResponse,
  GetCommentsResponse,
  ListCommentReportsResponse,
} from "./interfaces/api/comment";
import {
  AddModToCommunityResponse,
  BanFromCommunityResponse,
  BlockCommunityResponse,
  CommunityResponse,
  GetCommunityResponse,
  ListCommunitiesResponse,
} from "./interfaces/api/community";
import {
  AddAdminResponse,
  BanPersonResponse,
  BannedPersonsResponse,
  BlockPersonResponse,
  DeleteAccountResponse,
  GetCaptchaResponse,
  GetPersonDetailsResponse,
  GetPersonMentionsResponse,
  GetRepliesResponse,
  GetReportCountResponse,
  GetUnreadCountResponse,
  ListPrivateMessageReportsResponse,
  LoginResponse,
  PasswordResetResponse,
  PersonMentionResponse,
  PrivateMessageReportResponse,
  PrivateMessageResponse,
  PrivateMessagesResponse,
  VerifyEmailResponse,
} from "./interfaces/api/person";
import {
  GetPostResponse,
  GetPostsResponse,
  GetSiteMetadataResponse,
  ListPostReportsResponse,
  PostReportResponse,
  PostResponse,
} from "./interfaces/api/post";
import {
  GetModlogResponse,
  GetSiteResponse,
  GetUnreadRegistrationApplicationCountResponse,
  ListRegistrationApplicationsResponse,
  PurgeItemResponse,
  RegistrationApplicationResponse,
  ResolveObjectResponse,
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
  async getSite(form: GetSiteInput = {}) {
    return this.wrapper(HttpType.Get, "/site", form, GetSiteResponse);
  }

  /**
   * Create your site.
   *
   * `HTTP.POST /site`
   */
  async createSite(form: CreateSiteInput) {
    return this.wrapper(HttpType.Post, "/site", form, SiteResponse);
  }

  /**
   * Edit your site.
   *
   * `HTTP.PUT /site`
   */
  async editSite(form: EditSiteInput) {
    return this.wrapper(HttpType.Put, "/site", form, SiteResponse);
  }

  /**
   * Leave the Site admins.
   *
   * `HTTP.POST /user/leave_admin`
   */
  async leaveAdmin(form: LeaveAdminInput) {
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
  async getModlog(form: GetModlogInput) {
    return this.wrapper(HttpType.Get, "/modlog", form, GetModlogResponse);
  }

  /**
   * Search lemmy.
   *
   * `HTTP.GET /search`
   */
  async search(form: SearchInput) {
    return this.wrapper(HttpType.Get, "/search", form, SearchResponse);
  }

  /**
   * Fetch a non-local / federated object.
   *
   * `HTTP.GET /resolve_object`
   */
  async resolveObject(form: ResolveObjectInput) {
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
  async createCommunity(form: CreateCommunityInput) {
    return this.wrapper(HttpType.Post, "/community", form, CommunityResponse);
  }

  /**
   * Get / fetch a community.
   *
   * `HTTP.GET /community`
   */
  async getCommunity(form: GetCommunityInput = {}) {
    return this.wrapper(HttpType.Get, "/community", form, GetCommunityResponse);
  }

  /**
   * Edit a community.
   *
   * `HTTP.PUT /community`
   */
  async editCommunity(form: EditCommunityInput) {
    return this.wrapper(HttpType.Put, "/community", form, CommunityResponse);
  }

  /**
   * List communities, with various filters.
   *
   * `HTTP.GET /community/list`
   */
  async listCommunities(form: ListCommunitiesInput = {}) {
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
  async followCommunity(form: FollowCommunityInput) {
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
  async blockCommunity(form: BlockCommunityInput) {
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
  async deleteCommunity(form: DeleteCommunityInput) {
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
  async removeCommunity(form: RemoveCommunityInput) {
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
  async transferCommunity(form: TransferCommunityInput) {
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
  async banFromCommunity(form: BanFromCommunityInput) {
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
  async addModToCommunity(form: AddModToCommunityInput) {
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
  async createPost(form: CreatePostInput) {
    return this.wrapper(HttpType.Post, "/post", form, PostResponse);
  }

  /**
   * Get / fetch a post.
   *
   * `HTTP.GET /post`
   */
  async getPost(form: GetPostInput = {}) {
    return this.wrapper(HttpType.Get, "/post", form, GetPostResponse);
  }

  /**
   * Edit a post.
   *
   * `HTTP.PUT /post`
   */
  async editPost(form: EditPostInput) {
    return this.wrapper(HttpType.Put, "/post", form, PostResponse);
  }

  /**
   * Delete a post.
   *
   * `HTTP.POST /post/delete`
   */
  async deletePost(form: DeletePostInput) {
    return this.wrapper(HttpType.Post, "/post/delete", form, PostResponse);
  }

  /**
   * A moderator remove for a post.
   *
   * `HTTP.POST /post/remove`
   */
  async removePost(form: RemovePostInput) {
    return this.wrapper(HttpType.Post, "/post/remove", form, PostResponse);
  }

  /**
   * Mark a post as read.
   *
   * `HTTP.POST /post/mark_as_read`
   */
  async markPostAsRead(form: MarkPostAsReadInput) {
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
  async lockPost(form: LockPostInput) {
    return this.wrapper(HttpType.Post, "/post/lock", form, PostResponse);
  }

  /**
   * A moderator can sticky a post ( IE stick it to the top of a community ).
   *
   * `HTTP.POST /post/sticky`
   */
  async stickyPost(form: StickyPostInput) {
    return this.wrapper(HttpType.Post, "/post/sticky", form, PostResponse);
  }

  /**
   * Get / fetch posts, with various filters.
   *
   * `HTTP.GET /post/list`
   */
  async getPosts(form: GetPostsInput = {}) {
    return this.wrapper(HttpType.Get, "/post/list", form, GetPostsResponse);
  }

  /**
   * Like / vote on a post.
   *
   * `HTTP.POST /post/like`
   */
  async likePost(form: CreatePostLikeInput) {
    return this.wrapper(HttpType.Post, "/post/like", form, PostResponse);
  }

  /**
   * Save a post.
   *
   * `HTTP.PUT /post/save`
   */
  async savePost(form: SavePostInput) {
    return this.wrapper(HttpType.Put, "/post/save", form, PostResponse);
  }

  /**
   * Report a post.
   *
   * `HTTP.POST /post/report`
   */
  async createPostReport(form: CreatePostReportInput) {
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
  async resolvePostReport(form: ResolvePostReportInput) {
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
  async listPostReports(form: ListPostReportsInput) {
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
  async getSiteMetadata(form: GetSiteMetadataInput) {
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
  async createComment(form: CreateCommentInput) {
    return this.wrapper(HttpType.Post, "/comment", form, CommentResponse);
  }

  /**
   * Edit a comment.
   *
   * `HTTP.PUT /comment`
   */
  async editComment(form: EditCommentInput) {
    return this.wrapper(HttpType.Put, "/comment", form, CommentResponse);
  }

  /**
   * Delete a comment.
   *
   * `HTTP.POST /comment/delete`
   */
  async deleteComment(form: DeleteCommentInput) {
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
  async removeComment(form: RemoveCommentInput) {
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
  async markCommentReplyAsRead(form: MarkCommentReplyAsReadInput) {
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
  async likeComment(form: CreateCommentLikeInput) {
    return this.wrapper(HttpType.Post, "/comment/like", form, CommentResponse);
  }

  /**
   * Save a comment.
   *
   * `HTTP.PUT /comment/save`
   */
  async saveComment(form: SaveCommentInput) {
    return this.wrapper(HttpType.Put, "/comment/save", form, CommentResponse);
  }

  /**
   * Get / fetch comments.
   *
   * `HTTP.GET /comment/list`
   */
  async getComments(form: GetCommentsInput = {}) {
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
  async createCommentReport(form: CreateCommentReportInput) {
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
  async resolveCommentReport(form: ResolveCommentReportInput) {
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
  async listCommentReports(form: ListCommentReportsInput) {
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
  async getPrivateMessages(form: GetPrivateMessagesInput) {
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
  async createPrivateMessage(form: CreatePrivateMessageInput) {
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
  async editPrivateMessage(form: EditPrivateMessageInput) {
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
  async deletePrivateMessage(form: DeletePrivateMessageInput) {
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
  async markPrivateMessageAsRead(form: MarkPrivateMessageAsReadInput) {
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
  async createPrivateMessageReport(form: CreatePrivateMessageReportInput) {
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
  async resolvePrivateMessageReport(form: ResolvePrivateMessageReportInput) {
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
  async listPrivateMessageReports(form: ListPrivateMessageReportsInput) {
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
  async register(form: RegisterInput) {
    return this.wrapper(HttpType.Post, "/user/register", form, LoginResponse);
  }

  /**
   * Log into lemmy.
   *
   * `HTTP.POST /user/login`
   */
  async login(form: LoginInput) {
    return this.wrapper(HttpType.Post, "/user/login", form, LoginResponse);
  }

  /**
   * Get the details for a person.
   *
   * `HTTP.GET /user`
   */
  async getPersonDetails(form: GetPersonDetailsInput = {}) {
    return this.wrapper(HttpType.Get, "/user", form, GetPersonDetailsResponse);
  }

  /**
   * Get mentions for your user.
   *
   * `HTTP.GET /user/mention`
   */
  async getPersonMentions(form: GetPersonMentionsInput) {
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
  async markPersonMentionAsRead(form: MarkPersonMentionAsReadInput) {
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
  async getReplies(form: GetRepliesInput) {
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
  async banPerson(form: BanPersonInput) {
    return this.wrapper(HttpType.Post, "/user/ban", form, BanPersonResponse);
  }

  /**
   * Get a list of banned users
   *
   * `HTTP.GET /user/banned`
   */
  async getBannedPersons(form: GetBannedPersonsInput) {
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
  async blockPerson(form: BlockPersonInput) {
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
  async deleteAccount(form: DeleteAccountInput) {
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
  async passwordReset(form: PasswordResetInput) {
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
  async passwordChange(form: PasswordChangeInput) {
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
  async markAllAsRead(form: MarkAllAsReadInput) {
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
  async saveUserSettings(form: SaveUserSettingsInput) {
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
  async changePassword(form: ChangePasswordInput) {
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
  async getReportCount(form: GetReportCountInput) {
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
  async getUnreadCount(form: GetUnreadCountInput) {
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
  async verifyEmail(form: VerifyEmailInput) {
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
  async addAdmin(form: AddAdminInput) {
    return this.wrapper(HttpType.Post, "/admin/add", form, AddAdminResponse);
  }

  /**
   * Get the unread registration applications count.
   *
   * `HTTP.GET /admin/registration_application/count`
   */
  async getUnreadRegistrationApplicationCount(
    form: GetUnreadRegistrationApplicationCountInput
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
  async listRegistrationApplications(form: ListRegistrationApplicationsInput) {
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
  async approveRegistrationApplication(
    form: ApproveRegistrationApplicationInput
  ) {
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
  async purgePerson(form: PurgePersonInput) {
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
  async purgeCommunity(form: PurgeCommunityInput) {
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
  async purgePost(form: PurgePostInput) {
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
  async purgeComment(form: PurgeCommentInput) {
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
