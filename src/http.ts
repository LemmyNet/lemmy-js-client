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
  MarkCommentAsRead,
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
  FollowCommunityResponse,
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
  Login,
  LoginResponse,
  MarkAllAsRead,
  MarkPersonMentionAsRead,
  MarkPrivateMessageAsRead,
  PasswordChange,
  PasswordReset,
  PasswordResetResponse,
  PersonMentionResponse,
  PrivateMessageResponse,
  PrivateMessagesResponse,
  Register,
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
  GetSiteConfig,
  GetSiteConfigResponse,
  GetSiteResponse,
  GetUnreadRegistrationApplicationCount,
  GetUnreadRegistrationApplicationCountResponse,
  LeaveAdmin,
  ListRegistrationApplications,
  ListRegistrationApplicationsResponse,
  RegistrationApplicationResponse,
  ResolveObject,
  ResolveObjectResponse,
  SaveSiteConfig,
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
   * `HTTP.GET /site`
   */
  async getSite(form: GetSite): Promise<GetSiteResponse> {
    return this.wrapper(HttpType.Get, "/site", form);
  }

  /**
   * Create your site.
   * `HTTP.POST /site`
   */
  async createSite(form: CreateSite): Promise<SiteResponse> {
    return this.wrapper(HttpType.Post, "/site", form);
  }

  /**
   * Edit your site.
   * `HTTP.PUT /site`
   */
  async editSite(form: EditSite): Promise<SiteResponse> {
    return this.wrapper(HttpType.Put, "/site", form);
  }

  /**
   * Leave the Site admins.
   * `HTTP.POST /user/leave_admin`
   */
  async leaveAdmin(form: LeaveAdmin): Promise<GetSiteResponse> {
    return this.wrapper(HttpType.Post, "/user/leave_admin", form);
  }

  /**
   * Get your site configuration.
   * `HTTP.GET /site/config`
   */
  async getSiteConfig(form: GetSiteConfig): Promise<GetSiteConfigResponse> {
    return this.wrapper(HttpType.Get, "/site/config", form);
  }

  /**
   * Save your site config.
   * `HTTP.PUT /site/config`
   */
  async saveSiteConfig(form: SaveSiteConfig): Promise<GetSiteConfigResponse> {
    return this.wrapper(HttpType.Put, "/site/config", form);
  }

  /**
   * Get the modlog.
   * `HTTP.GET /modlog`
   */
  async getModlog(form: GetModlog): Promise<GetModlogResponse> {
    return this.wrapper(HttpType.Get, "/modlog", form);
  }

  /**
   * Search lemmy.
   * `HTTP.GET /search`
   */
  async search(form: Search): Promise<SearchResponse> {
    return this.wrapper(HttpType.Get, "/search", form);
  }

  /**
   * Fetch a non-local / federated object.
   * `HTTP.GET /resolve_object`
   */
  async resolveObject(form: ResolveObject): Promise<ResolveObjectResponse> {
    return this.wrapper(HttpType.Get, "/resolve_object", form);
  }

  /**
   * Create a new community.
   * `HTTP.POST /community`
   */
  async createCommunity(form: CreateCommunity): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Post, "/community", form);
  }

  /**
   * Get / fetch a community.
   * `HTTP.GET /community`
   */
  async getCommunity(form: GetCommunity): Promise<GetCommunityResponse> {
    return this.wrapper(HttpType.Get, "/community", form);
  }

  /**
   * Edit a community.
   * `HTTP.PUT /community`
   */
  async editCommunity(form: EditCommunity): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Put, "/community", form);
  }

  /**
   * List communities, with various filters.
   * `HTTP.GET /community/list`
   */
  async listCommunities(
    form: ListCommunities
  ): Promise<ListCommunitiesResponse> {
    return this.wrapper(HttpType.Get, "/community/list", form);
  }

  /**
   * Follow / subscribe to a community.
   * `HTTP.POST /community/follow`
   */
  async followCommunity(
    form: FollowCommunity
  ): Promise<FollowCommunityResponse> {
    return this.wrapper(HttpType.Post, "/community/follow", form);
  }

  /**
   * Block a community.
   * `HTTP.POST /community/block`
   */
  async blockCommunity(form: BlockCommunity): Promise<BlockCommunityResponse> {
    return this.wrapper(HttpType.Post, "/community/block", form);
  }

  /**
   * Delete a community.
   * `HTTP.POST /community/delete`
   */
  async deleteCommunity(form: DeleteCommunity): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Post, "/community/delete", form);
  }

  /**
   * A moderator remove for a community.
   * `HTTP.POST /community/remove`
   */
  async removeCommunity(form: RemoveCommunity): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Post, "/community/remove", form);
  }

  /**
   * Transfer your community to an existing moderator.
   * `HTTP.POST /community/transfer`
   */
  async transferCommunity(
    form: TransferCommunity
  ): Promise<GetCommunityResponse> {
    return this.wrapper(HttpType.Post, "/community/transfer", form);
  }

  /**
   * Ban a user from a community.
   * `HTTP.POST /community/ban_user`
   */
  async banFromCommunity(
    form: BanFromCommunity
  ): Promise<BanFromCommunityResponse> {
    return this.wrapper(HttpType.Post, "/community/ban_user", form);
  }

  /**
   * Add a moderator to your community.
   * `HTTP.POST /community/mod`
   */
  async addModToCommunity(
    form: AddModToCommunity
  ): Promise<AddModToCommunityResponse> {
    return this.wrapper(HttpType.Post, "/community/mod", form);
  }

  /**
   * Create a post.
   * `HTTP.POST /post`
   */
  async createPost(form: CreatePost): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, "/post", form);
  }

  /**
   * Get / fetch a post.
   * `HTTP.GET /post`
   */
  async getPost(form: GetPost): Promise<GetPostResponse> {
    return this.wrapper(HttpType.Get, "/post", form);
  }

  /**
   * Edit a post.
   * `HTTP.PUT /post`
   */
  async editPost(form: EditPost): Promise<PostResponse> {
    return this.wrapper(HttpType.Put, "/post", form);
  }

  /**
   * Delete a post.
   * `HTTP.POST /post/delete`
   */
  async deletePost(form: DeletePost): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, "/post/delete", form);
  }

  /**
   * A moderator remove for a post.
   * `HTTP.POST /post/remove`
   */
  async removePost(form: RemovePost): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, "/post/remove", form);
  }

  /**
   * Mark a post as read.
   * `HTTP.POST /post/mark_as_read`
   */
  async markPostAsRead(form: MarkPostAsRead): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, "/post/mark_as_read", form);
  }

  /**
   * A moderator can lock a post ( IE disable new comments ).
   * `HTTP.POST /post/lock`
   */
  async lockPost(form: LockPost): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, "/post/lock", form);
  }

  /**
   * A moderator can sticky a post ( IE stick it to the top of a community ).
   * `HTTP.POST /post/sticky`
   */
  async stickyPost(form: StickyPost): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, "/post/sticky", form);
  }

  /**
   * Get / fetch posts, with various filters.
   * `HTTP.GET /post/list`
   */
  async getPosts(form: GetPosts): Promise<GetPostsResponse> {
    return this.wrapper(HttpType.Get, "/post/list", form);
  }

  /**
   * Like / vote on a post.
   * `HTTP.POST /post/like`
   */
  async likePost(form: CreatePostLike): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, "/post/like", form);
  }

  /**
   * Save a post.
   * `HTTP.PUT /post/save`
   */
  async savePost(form: SavePost): Promise<PostResponse> {
    return this.wrapper(HttpType.Put, "/post/save", form);
  }

  /**
   * Report a post.
   * `HTTP.POST /post/report`
   */
  async createPostReport(form: CreatePostReport): Promise<PostReportResponse> {
    return this.wrapper(HttpType.Post, "/post/report", form);
  }

  /**
   * Resolve a post report. Only a mod can do this.
   * `HTTP.PUT /post/report/resolve`
   */
  async resolvePostReport(
    form: ResolvePostReport
  ): Promise<PostReportResponse> {
    return this.wrapper(HttpType.Put, "/post/report/resolve", form);
  }

  /**
   * List post reports.
   * `HTTP.GET /post/report/list`
   */
  async listPostReports(
    form: ListPostReports
  ): Promise<ListPostReportsResponse> {
    return this.wrapper(HttpType.Get, "/post/report/list", form);
  }

  /**
   * Fetch metadata for any given site.
   * `HTTP.GET /post/site_metadata`
   */
  async getSiteMetadata(
    form: GetSiteMetadata
  ): Promise<GetSiteMetadataResponse> {
    return this.wrapper(HttpType.Get, "/post/site_metadata", form);
  }

  /**
   * Create a comment.
   * `HTTP.POST /comment`
   */
  async createComment(form: CreateComment): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, "/comment", form);
  }

  /**
   * Edit a comment.
   * `HTTP.PUT /comment`
   */
  async editComment(form: EditComment): Promise<CommentResponse> {
    return this.wrapper(HttpType.Put, "/comment", form);
  }

  /**
   * Delete a comment.
   * `HTTP.POST /comment/delete`
   */
  async deleteComment(form: DeleteComment): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, "/comment/delete", form);
  }

  /**
   * A moderator remove for a comment.
   * `HTTP.POST /comment/remove`
   */
  async removeComment(form: RemoveComment): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, "/comment/remove", form);
  }

  /**
   * Mark a comment as read.
   * `HTTP.POST /comment/mark_as_read`
   */
  async markCommentAsRead(form: MarkCommentAsRead): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, "/comment/mark_as_read", form);
  }

  /**
   * Like / vote on a comment.
   * `HTTP.POST /comment/like`
   */
  async likeComment(form: CreateCommentLike): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, "/comment/like", form);
  }

  /**
   * Save a comment.
   * `HTTP.PUT /comment/save`
   */
  async saveComment(form: SaveComment): Promise<CommentResponse> {
    return this.wrapper(HttpType.Put, "/comment/save", form);
  }

  /**
   * Get / fetch comments.
   * `HTTP.GET /comment/list`
   */
  async getComments(form: GetComments): Promise<GetCommentsResponse> {
    return this.wrapper(HttpType.Get, "/comment/list", form);
  }

  /**
   * Report a comment.
   * `HTTP.POST /comment/report`
   */
  async createCommentReport(
    form: CreateCommentReport
  ): Promise<CommentReportResponse> {
    return this.wrapper(HttpType.Post, "/comment/report", form);
  }

  /**
   * Resolve a comment report. Only a mod can do this.
   * `HTTP.PUT /comment/report/resolve`
   */
  async resolveCommentReport(
    form: ResolveCommentReport
  ): Promise<CommentReportResponse> {
    return this.wrapper(HttpType.Put, "/comment/report/resolve", form);
  }

  /**
   * List comment reports.
   * `HTTP.GET /comment/report/list`
   */
  async listCommentReports(
    form: ListCommentReports
  ): Promise<ListCommentReportsResponse> {
    return this.wrapper(HttpType.Get, "/comment/report/list", form);
  }

  /**
   * Get / fetch private messages.
   * `HTTP.GET /private_message/list`
   */
  async getPrivateMessages(
    form: GetPrivateMessages
  ): Promise<PrivateMessagesResponse> {
    return this.wrapper(HttpType.Get, "/private_message/list", form);
  }

  /**
   * Create a private message.
   * `HTTP.POST /private_message`
   */
  async createPrivateMessage(
    form: CreatePrivateMessage
  ): Promise<PrivateMessageResponse> {
    return this.wrapper(HttpType.Post, "/private_message", form);
  }

  /**
   * Edit a private message.
   * `HTTP.PUT /private_message`
   */
  async editPrivateMessage(
    form: EditPrivateMessage
  ): Promise<PrivateMessageResponse> {
    return this.wrapper(HttpType.Put, "/private_message", form);
  }

  /**
   * Delete a private message.
   * `HTTP.POST /private_message/delete`
   */
  async deletePrivateMessage(
    form: DeletePrivateMessage
  ): Promise<PrivateMessageResponse> {
    return this.wrapper(HttpType.Post, "/private_message/delete", form);
  }

  /**
   * Mark a private message as read.
   * `HTTP.POST /private_message/mark_as_read`
   */
  async markPrivateMessageAsRead(
    form: MarkPrivateMessageAsRead
  ): Promise<PrivateMessageResponse> {
    return this.wrapper(HttpType.Post, "/private_message/mark_as_read", form);
  }

  /**
   * Register a new user.
   * `HTTP.POST /user/register`
   */
  async register(form: Register): Promise<LoginResponse> {
    return this.wrapper(HttpType.Post, "/user/register", form);
  }

  /**
   * Log into lemmy.
   * `HTTP.POST /user/login`
   */
  async login(form: Login): Promise<LoginResponse> {
    return this.wrapper(HttpType.Post, "/user/login", form);
  }

  /**
   * Get the details for a person.
   * `HTTP.GET /user`
   */
  async getPersonDetails(
    form: GetPersonDetails
  ): Promise<GetPersonDetailsResponse> {
    return this.wrapper(HttpType.Get, "/user", form);
  }

  /**
   * Get mentions for your user.
   * `HTTP.GET /user/mention`
   */
  async getPersonMentions(
    form: GetPersonMentions
  ): Promise<GetPersonMentionsResponse> {
    return this.wrapper(HttpType.Get, "/user/mention", form);
  }

  /**
   * Mark a person mention as read.
   * `HTTP.POST /user/mention/mark_as_read`
   */
  async markPersonMentionAsRead(
    form: MarkPersonMentionAsRead
  ): Promise<PersonMentionResponse> {
    return this.wrapper(HttpType.Post, "/user/mention/mark_as_read", form);
  }

  /**
   * Get comment replies.
   * `HTTP.GET /user/replies`
   */
  async getReplies(form: GetReplies): Promise<GetRepliesResponse> {
    return this.wrapper(HttpType.Get, "/user/replies", form);
  }

  /**
   * Ban a person from your site.
   * `HTTP.POST /user/ban`
   */
  async banPerson(form: BanPerson): Promise<BanPersonResponse> {
    return this.wrapper(HttpType.Post, "/user/ban", form);
  }

  /**
   * Get a list of banned users
   * `HTTP.GET /user/banned`
   */
  async getBannedPersons(
    form: GetBannedPersons
  ): Promise<BannedPersonsResponse> {
    return this.wrapper(HttpType.Get, "/user/banned", form);
  }

  /**
   * Block a person.
   * `HTTP.POST /user/block`
   */
  async blockPerson(form: BlockPerson): Promise<BlockPersonResponse> {
    return this.wrapper(HttpType.Post, "/user/block", form);
  }

  /**
   * Fetch a Captcha.
   * `HTTP.GET /user/get_captcha`
   */
  async getCaptcha(): Promise<GetCaptchaResponse> {
    return this.wrapper(HttpType.Get, "/user/get_captcha", {});
  }

  /**
   * Delete your account.
   * `HTTP.POST /user/delete_account`
   */
  async deleteAccount(form: DeleteAccount): Promise<DeleteAccountResponse> {
    return this.wrapper(HttpType.Post, "/user/delete_account", form);
  }

  /**
   * Reset your password.
   * `HTTP.POST /user/password_reset`
   */
  async passwordReset(form: PasswordReset): Promise<PasswordResetResponse> {
    return this.wrapper(HttpType.Post, "/user/password_reset", form);
  }

  /**
   * Change your password from an email / token based reset.
   * `HTTP.POST /user/password_change`
   */
  async passwordChange(form: PasswordChange): Promise<LoginResponse> {
    return this.wrapper(HttpType.Post, "/user/password_change", form);
  }

  /**
   * Mark all replies as read.
   * `HTTP.POST /user/mark_all_as_read`
   */
  async markAllAsRead(form: MarkAllAsRead): Promise<GetRepliesResponse> {
    return this.wrapper(HttpType.Post, "/user/mark_all_as_read", form);
  }

  /**
   * Save your user settings.
   * `HTTP.PUT /user/save_user_settings`
   */
  async saveUserSettings(form: SaveUserSettings): Promise<LoginResponse> {
    return this.wrapper(HttpType.Put, "/user/save_user_settings", form);
  }

  /**
   * Change your user password.
   * `HTTP.PUT /user/change_password`
   */
  async changePassword(form: ChangePassword): Promise<LoginResponse> {
    return this.wrapper(HttpType.Put, "/user/change_password", form);
  }

  /**
   * Get counts for your reports
   * `HTTP.GET /user/report_count`
   */
  async getReportCount(form: GetReportCount): Promise<GetReportCountResponse> {
    return this.wrapper(HttpType.Get, "/user/report_count", form);
  }

  /**
   * Get your unread counts
   * `HTTP.GET /user/unread_count`
   */
  async getUnreadCount(form: GetUnreadCount): Promise<GetUnreadCountResponse> {
    return this.wrapper(HttpType.Get, "/user/unread_count", form);
  }

  /**
   * Verify your email
   * `HTTP.POST /user/verify_email`
   */
  async verifyEmail(form: VerifyEmail): Promise<VerifyEmailResponse> {
    return this.wrapper(HttpType.Post, "/user/verify_email", form);
  }

  /**
   * Add an admin to your site.
   * `HTTP.POST /admin/add`
   */
  async addAdmin(form: AddAdmin): Promise<AddAdminResponse> {
    return this.wrapper(HttpType.Post, "/admin/add", form);
  }

  /**
   * Get the unread registration applications count.
   * `HTTP.GET /admin/registration_application/count`
   */
  async getUnreadRegistrationApplicationCount(
    form: GetUnreadRegistrationApplicationCount
  ): Promise<GetUnreadRegistrationApplicationCountResponse> {
    return this.wrapper(
      HttpType.Get,
      "/admin/registration_application/count",
      form
    );
  }

  /**
   * List the registration applications.
   * `HTTP.GET /admin/registration_application/list`
   */
  async listRegistrationApplications(
    form: ListRegistrationApplications
  ): Promise<ListRegistrationApplicationsResponse> {
    return this.wrapper(
      HttpType.Get,
      "/admin/registration_application/list",
      form
    );
  }

  /**
   * Approve a registration application
   * `HTTP.PUT /admin/registration_application/approve`
   */
  async approveRegistrationApplication(
    form: ApproveRegistrationApplication
  ): Promise<RegistrationApplicationResponse> {
    return this.wrapper(
      HttpType.Put,
      "/admin/registration_application/approve",
      form
    );
  }

  private buildFullUrl(endpoint: string): string {
    return `${this.apiUrl}${endpoint}`;
  }

  private async wrapper<ResponseType, MessageType>(
    type_: HttpType,
    endpoint: string,
    form: MessageType
  ): Promise<ResponseType> {
    if (type_ == HttpType.Get) {
      let getUrl = `${this.buildFullUrl(endpoint)}?${encodeGetParams(form)}`;
      return fetch(getUrl, {
        method: "GET",
        headers: this.headers,
      }).then(d => d.json() as Promise<ResponseType>);
    } else {
      return fetch(this.buildFullUrl(endpoint), {
        method: type_,
        headers: {
          "Content-Type": "application/json",
          ...this.headers,
        },
        body: JSON.stringify(form),
      }).then(d => d.json() as Promise<ResponseType>);
    }
  }
}

function encodeGetParams(p: any): string {
  return Object.entries(p)
    .map(kv => kv.map(encodeURIComponent).join("="))
    .join("&");
}
