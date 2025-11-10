import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Queries,
  Route,
  Inject,
  UploadedFile,
  Delete,
  Security,
  Tags,
} from "@tsoa/runtime";
import {
  AdminListUsersI,
  CommunityIdQueryI,
  DeleteImageParamsI,
  GetCommentI,
  GetCommentsI,
  GetCommunityI,
  GetModlogI,
  GetMultiCommunityI,
  GetPersonDetailsI,
  GetPostI,
  GetPostsI,
  GetRandomCommunityI,
  GetRegistrationApplicationI,
  GetReportCountI,
  GetSiteMetadataI,
  ListCommentLikesI,
  ListCommunitiesI,
  ListCommunityPendingFollowsI,
  ListCustomEmojisI,
  ListNotificationsI,
  ListMediaI,
  ListMultiCommunitiesI,
  ListPersonContentI,
  ListPersonHiddenI,
  ListPersonLikedI,
  ListPersonReadI,
  ListPersonSavedI,
  ListPostLikesI,
  ListRegistrationApplicationsI,
  ListReportsI,
  ListTaglinesI,
  ResolveObjectI,
  SearchI,
  UploadImage,
  VERSION,
  GetFederatedInstancesI,
} from "./other_types";
import { AddAdmin } from "./types/AddAdmin";
import { AddAdminResponse } from "./types/AddAdminResponse";
import { AddModToCommunity } from "./types/AddModToCommunity";
import { AddModToCommunityResponse } from "./types/AddModToCommunityResponse";
import { ApproveRegistrationApplication } from "./types/ApproveRegistrationApplication";
import { BanFromCommunity } from "./types/BanFromCommunity";
import { MarkManyPostsAsRead } from "./types/MarkManyPostsAsRead";
import { BanPerson } from "./types/BanPerson";
import { BlockCommunity } from "./types/BlockCommunity";
import { BlockPerson } from "./types/BlockPerson";
import { ChangePassword } from "./types/ChangePassword";
import { CommentReportResponse } from "./types/CommentReportResponse";
import { CommentResponse } from "./types/CommentResponse";
import { CommunityReportResponse } from "./types/CommunityReportResponse";
import { CommunityResponse } from "./types/CommunityResponse";
import { CreateComment } from "./types/CreateComment";
import { CreateCommentLike } from "./types/CreateCommentLike";
import { CreateCommentReport } from "./types/CreateCommentReport";
import { CreateCommunity } from "./types/CreateCommunity";
import { CreateCommunityReport } from "./types/CreateCommunityReport";
import { CreateCommunityTag } from "./types/CreateCommunityTag";
import { UpdateCommunityTag } from "./types/UpdateCommunityTag";
import { CreateCustomEmoji } from "./types/CreateCustomEmoji";
import { CreateOAuthProvider } from "./types/CreateOAuthProvider";
import { CreatePost } from "./types/CreatePost";
import { CreatePostLike } from "./types/CreatePostLike";
import { CreatePostReport } from "./types/CreatePostReport";
import { CreatePrivateMessage } from "./types/CreatePrivateMessage";
import { CreatePrivateMessageReport } from "./types/CreatePrivateMessageReport";
import { CreateSite } from "./types/CreateSite";
import { CustomEmojiResponse } from "./types/CustomEmojiResponse";
import { DeleteAccount } from "./types/DeleteAccount";
import { DeleteComment } from "./types/DeleteComment";
import { DeleteCommunity } from "./types/DeleteCommunity";
import { DeleteCommunityTag } from "./types/DeleteCommunityTag";
import { DeleteCustomEmoji } from "./types/DeleteCustomEmoji";
import { DeleteOAuthProvider } from "./types/DeleteOAuthProvider";
import { DeletePost } from "./types/DeletePost";
import { DeletePrivateMessage } from "./types/DeletePrivateMessage";
import { DistinguishComment } from "./types/DistinguishComment";
import { EditComment } from "./types/EditComment";
import { EditCommunity } from "./types/EditCommunity";
import { EditCustomEmoji } from "./types/EditCustomEmoji";
import { EditOAuthProvider } from "./types/EditOAuthProvider";
import { EditPost } from "./types/EditPost";
import { EditPrivateMessage } from "./types/EditPrivateMessage";
import { EditSite } from "./types/EditSite";
import { OAuthProvider } from "./types/OAuthProvider";
import { FeaturePost } from "./types/FeaturePost";
import { FollowCommunity } from "./types/FollowCommunity";
import { GetCaptchaResponse } from "./types/GetCaptchaResponse";
import { GetComment } from "./types/GetComment";
import { GetComments } from "./types/GetComments";
import { GetCommentsResponse } from "./types/GetCommentsResponse";
import { GetCommunity } from "./types/GetCommunity";
import { GetCommunityResponse } from "./types/GetCommunityResponse";
import { GetFederatedInstancesResponse } from "./types/GetFederatedInstancesResponse";
import { GetModlog } from "./types/GetModlog";
import { GetModlogResponse } from "./types/GetModlogResponse";
import { GetPersonDetails } from "./types/GetPersonDetails";
import { GetPersonDetailsResponse } from "./types/GetPersonDetailsResponse";
import { GetPost } from "./types/GetPost";
import { GetPostResponse } from "./types/GetPostResponse";
import { GetPosts } from "./types/GetPosts";
import { GetPostsResponse } from "./types/GetPostsResponse";
import { GetReportCount } from "./types/GetReportCount";
import { GetReportCountResponse } from "./types/GetReportCountResponse";
import { GetSiteMetadata } from "./types/GetSiteMetadata";
import { GetSiteMetadataResponse } from "./types/GetSiteMetadataResponse";
import { GetSiteResponse } from "./types/GetSiteResponse";
import { GetUnreadCountResponse } from "./types/GetUnreadCountResponse";
import { GetUnreadRegistrationApplicationCountResponse } from "./types/GetUnreadRegistrationApplicationCountResponse";
import { ListCommunities } from "./types/ListCommunities";
import { ListCommunitiesResponse } from "./types/ListCommunitiesResponse";
import { ListRegistrationApplications } from "./types/ListRegistrationApplications";
import { ListRegistrationApplicationsResponse } from "./types/ListRegistrationApplicationsResponse";
import { LockPost } from "./types/LockPost";
import { LockComment } from "./types/LockComment";
import { Login } from "./types/Login";
import { LoginResponse } from "./types/LoginResponse";
import { MarkPostAsRead } from "./types/MarkPostAsRead";
import { PasswordChangeAfterReset } from "./types/PasswordChangeAfterReset";
import { PasswordReset } from "./types/PasswordReset";
import { PostReportResponse } from "./types/PostReportResponse";
import { PostResponse } from "./types/PostResponse";
import { PrivateMessageReportResponse } from "./types/PrivateMessageReportResponse";
import { PrivateMessageResponse } from "./types/PrivateMessageResponse";
import { PurgeComment } from "./types/PurgeComment";
import { PurgeCommunity } from "./types/PurgeCommunity";
import { PurgePerson } from "./types/PurgePerson";
import { PurgePost } from "./types/PurgePost";
import { Register } from "./types/Register";
import { RegistrationApplicationResponse } from "./types/RegistrationApplicationResponse";
import { RemoveComment } from "./types/RemoveComment";
import { RemoveCommunity } from "./types/RemoveCommunity";
import { RemovePost } from "./types/RemovePost";
import { ResolveCommentReport } from "./types/ResolveCommentReport";
import { ResolveCommunityReport } from "./types/ResolveCommunityReport";
import { ResolveObject } from "./types/ResolveObject";
import { ResolvePostReport } from "./types/ResolvePostReport";
import { ResolvePrivateMessageReport } from "./types/ResolvePrivateMessageReport";
import { SaveComment } from "./types/SaveComment";
import { SavePost } from "./types/SavePost";
import { SaveUserSettings } from "./types/SaveUserSettings";
import { Search } from "./types/Search";
import { SearchResponse } from "./types/SearchResponse";
import { SiteResponse } from "./types/SiteResponse";
import { TransferCommunity } from "./types/TransferCommunity";
import { VerifyEmail } from "./types/VerifyEmail";
import { HideCommunity } from "./types/HideCommunity";
import { GenerateTotpSecretResponse } from "./types/GenerateTotpSecretResponse";
import { UpdateTotp } from "./types/UpdateTotp";
import { UpdateTotpResponse } from "./types/UpdateTotpResponse";
import { SuccessResponse } from "./types/SuccessResponse";
import { ListPostLikes } from "./types/ListPostLikes";
import { ListPostLikesResponse } from "./types/ListPostLikesResponse";
import { ListCommentLikes } from "./types/ListCommentLikes";
import { ListCommentLikesResponse } from "./types/ListCommentLikesResponse";
import { HidePost } from "./types/HidePost";
import { ListMedia } from "./types/ListMedia";
import { ListMediaResponse } from "./types/ListMediaResponse";
import { AuthenticateWithOauth } from "./types/AuthenticateWithOauth";
import { GetRegistrationApplication } from "./types/GetRegistrationApplication";
import { CreateTagline } from "./types/CreateTagline";
import { TaglineResponse } from "./types/TaglineResponse";
import { UpdateTagline } from "./types/UpdateTagline";
import { DeleteTagline } from "./types/DeleteTagline";
import { ListTaglines } from "./types/ListTaglines";
import { ListTaglinesResponse } from "./types/ListTaglinesResponse";
import { ListCustomEmojis } from "./types/ListCustomEmojis";
import { ListCustomEmojisResponse } from "./types/ListCustomEmojisResponse";
import { GetRandomCommunity } from "./types/GetRandomCommunity";
import { ApproveCommunityPendingFollower } from "./types/ApproveCommunityPendingFollower";
import { GetCommunityPendingFollowsCountResponse } from "./types/GetCommunityPendingFollowsCountResponse";
import { ListCommunityPendingFollowsResponse } from "./types/ListCommunityPendingFollowsResponse";
import { ListCommunityPendingFollows } from "./types/ListCommunityPendingFollows";
import { ListReports } from "./types/ListReports";
import { ListReportsResponse } from "./types/ListReportsResponse";
import { MyUserInfo } from "./types/MyUserInfo";
import { AdminAllowInstanceParams } from "./types/AdminAllowInstanceParams";
import { AdminBlockInstanceParams } from "./types/AdminBlockInstanceParams";
import { ListPersonContent } from "./types/ListPersonContent";
import { ListPersonContentResponse } from "./types/ListPersonContentResponse";
import { ListPersonSaved } from "./types/ListPersonSaved";
import { ListPersonSavedResponse } from "./types/ListPersonSavedResponse";
import { DeleteImageParams } from "./types/DeleteImageParams";
import { UploadImageResponse } from "./types/UploadImageResponse";
import { GetCommentsSlimResponse } from "./types/GetCommentsSlimResponse";
import { Tag } from "./types/Tag";
import { ResendVerificationEmail } from "./types/ResendVerificationEmail";
import { ListPersonRead } from "./types/ListPersonRead";
import { ListPersonReadResponse } from "./types/ListPersonReadResponse";
import { ListPersonHidden } from "./types/ListPersonHidden";
import { ListPersonHiddenResponse } from "./types/ListPersonHiddenResponse";
import { CommunityIdQuery } from "./types/CommunityIdQuery";
import { CreateMultiCommunity } from "./types/CreateMultiCommunity";
import { UpdateMultiCommunity } from "./types/UpdateMultiCommunity";
import { ListMultiCommunitiesResponse } from "./types/ListMultiCommunitiesResponse";
import { AdminListUsers } from "./types/AdminListUsers";
import { AdminListUsersResponse } from "./types/AdminListUsersResponse";
import { CreateOrDeleteMultiCommunityEntry } from "./types/CreateOrDeleteMultiCommunityEntry";
import { GetMultiCommunityResponse } from "./types/GetMultiCommunityResponse";
import { FollowMultiCommunity } from "./types/FollowMultiCommunity";
import { ListLoginsResponse } from "./types/ListLoginsResponse";
import { ListPersonLiked } from "./types/ListPersonLiked";
import { ListPersonLikedResponse } from "./types/ListPersonLikedResponse";
import { NotePerson } from "./types/NotePerson";
import { UserBlockInstanceCommunitiesParams } from "./types/UserBlockInstanceCommunitiesParams";
import { UserBlockInstancePersonsParams } from "./types/UserBlockInstancePersonsParams";
import { MarkNotificationAsRead } from "./types/MarkNotificationAsRead";
import { ListNotifications } from "./types/ListNotifications";
import { ListNotificationsResponse } from "./types/ListNotificationsResponse";
import { ModEditPost } from "./types/ModEditPost";
import { UpdateCommunityNotifications } from "./types/UpdateCommunityNotifications";
import { UpdatePostNotifications } from "./types/UpdatePostNotifications";
import { MultiCommunityResponse } from "./types/MultiCommunityResponse";
import { PersonResponse } from "./types/PersonResponse";
import { GetFederatedInstances } from "./types/GetFederatedInstances";

enum HttpType {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
}

type RequestOptions = Pick<RequestInit, "signal">;

/**
 * Helps build lemmy HTTP requests.
 */
@Route("api/v4")
export class LemmyHttp extends Controller {
  #apiUrl: string;
  #headers: { [key: string]: string } = {};
  #fetchFunction: typeof fetch = fetch.bind(globalThis);

  /**
   * Generates a new instance of LemmyHttp.
   * @param baseUrl the base url, without the vX version: https://lemmy.ml -> goes to https://lemmy.ml/api/vX
   * @param headers optional headers. Should contain `x-real-ip` and `x-forwarded-for` .
   */
  constructor(
    baseUrl: string,
    options?: {
      fetchFunction?: typeof fetch;
      headers?: { [key: string]: string };
    },
  ) {
    super();
    this.#apiUrl = `${baseUrl.replace(/\/+$/, "")}/api/${VERSION}`;

    if (options?.headers) {
      this.#headers = options.headers;
    }
    if (options?.fetchFunction) {
      this.#fetchFunction = options.fetchFunction;
    }
  }

  /**
   * @summary Gets the site, and your user data.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/site")
  @Tags("Site")
  async getSite(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, GetSiteResponse>(
      HttpType.Get,
      "/site",
      {},
      options,
    );
  }

  /**
   * @summary Create your site.
   */
  @Security("bearerAuth")
  @Post("/site")
  @Tags("Site")
  async createSite(
    @Body() form: CreateSite,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<CreateSite, SiteResponse>(
      HttpType.Post,
      "/site",
      form,
      options,
    );
  }

  /**
   * @summary Edit your site.
   */
  @Security("bearerAuth")
  @Put("/site")
  @Tags("Site")
  async editSite(@Body() form: EditSite, @Inject() options?: RequestOptions) {
    return this.#wrapper<EditSite, SiteResponse>(
      HttpType.Put,
      "/site",
      form,
      options,
    );
  }

  /**
   * @summary Leave the Site admins.
   */
  @Security("bearerAuth")
  @Post("/admin/leave")
  @Tags("Admin")
  async leaveAdmin(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, GetSiteResponse>(
      HttpType.Post,
      "/admin/leave",
      {},
      options,
    );
  }

  /**
   * @summary Generate a TOTP / two-factor secret.
   *
   * Generate a TOTP / two-factor secret.
   * Afterwards you need to call `/account/auth/totp/update` with a valid token to enable it.
   */
  @Security("bearerAuth")
  @Post("/account/auth/totp/generate")
  @Tags("Account")
  async generateTotpSecret(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, GenerateTotpSecretResponse>(
      HttpType.Post,
      "/account/auth/totp/generate",
      {},
      options,
    );
  }

  /**
   * @summary Get data of current user.
   */
  @Security("bearerAuth")
  @Get("/account")
  @Tags("Account")
  async getMyUser(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, MyUserInfo>(
      HttpType.Get,
      "/account",
      {},
      options,
    );
  }

  /**
   * @summary Export a backup of your user settings.
   *
   * Export a backup of your user settings, including your saved content,
   * followed communities, and blocks.
   */
  @Security("bearerAuth")
  @Get("/account/settings/export")
  @Tags("Account")
  async exportSettings(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, string>(
      HttpType.Get,
      "/account/settings/export",
      {},
      options,
    );
  }

  /**
   * @summary Import a backup of your user settings.
   */
  @Security("bearerAuth")
  @Post("/account/settings/import")
  @Tags("Account")
  async importSettings(@Body() form: any, @Inject() options?: RequestOptions) {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Post,
      "/account/settings/import",
      form,
      options,
    );
  }

  /**
   * @summary List login tokens for your user
   */
  @Security("bearerAuth")
  @Get("/account/login/list")
  @Tags("Account")
  async listLogins(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, ListLoginsResponse>(
      HttpType.Get,
      "/account/login/list",
      {},
      options,
    );
  }

  /**
   * @summary Returns an error message if your auth token is invalid
   */
  @Security("bearerAuth")
  @Get("/account/validate_auth")
  @Tags("Account")
  async validateAuth(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Get,
      "/account/validate_auth",
      {},
      options,
    );
  }

  /**
   * @summary List all the media for your account.
   */
  @Security("bearerAuth")
  @Get("/account/media/list")
  @Tags("Account", "Media")
  async listMedia(
    @Queries() form: ListMediaI = {},
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListMedia, ListMediaResponse>(
      HttpType.Get,
      "/account/media/list",
      form,
      options,
    );
  }

  /**
   * @summary Delete media for your account.
   */
  @Security("bearerAuth")
  @Delete("/account/media")
  @Tags("Account", "Media")
  async deleteMedia(
    @Queries() form: DeleteImageParamsI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeleteImageParams, SuccessResponse>(
      HttpType.Delete,
      "/account/media",
      form,
      options,
    );
  }

  /**
   * @summary Delete any media. (Admin only)
   */
  @Security("bearerAuth")
  @Delete("/image")
  @Tags("Admin", "Media")
  async deleteMediaAdmin(
    @Queries() form: DeleteImageParamsI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeleteImageParams, SuccessResponse>(
      HttpType.Delete,
      "/image",
      form,
      options,
    );
  }

  /**
   * @summary List all the media known to your instance.
   */
  @Security("bearerAuth")
  @Get("/image/list")
  @Tags("Admin", "Media")
  async listMediaAdmin(
    @Queries() form: ListMediaI = {},
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListMedia, ListMediaResponse>(
      HttpType.Get,
      "/image/list",
      form,
      options,
    );
  }

  /**
   * @summary Enable / Disable TOTP / two-factor authentication.
   *
   * To enable, you need to first call `/account/auth/totp/generate` and then pass a valid token to this.
   *
   * Disabling is only possible if 2FA was previously enabled. Again it is necessary to pass a valid token.
   */

  @Security("bearerAuth")
  @Post("/account/auth/totp/update")
  @Tags("Account")
  async updateTotp(
    @Body() form: UpdateTotp,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<UpdateTotp, UpdateTotpResponse>(
      HttpType.Post,
      "/account/auth/totp/update",
      form,
      options,
    );
  }

  /**
   * @summary Get the modlog.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/modlog")
  @Tags("Miscellaneous")
  async getModlog(
    @Queries() form: GetModlogI = {},
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<GetModlog, GetModlogResponse>(
      HttpType.Get,
      "/modlog",
      form,
      options,
    );
  }

  /**
   * @summary Search lemmy. If `search_term` is a url it also attempts to fetch it, just like `resolve_object`.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/search")
  @Tags("Miscellaneous")
  async search(@Queries() form: SearchI, @Inject() options?: RequestOptions) {
    return this.#wrapper<Search, SearchResponse>(
      HttpType.Get,
      "/search",
      form,
      options,
    );
  }

  /**
   * @summary Fetch a non-local / federated object.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/resolve_object")
  @Tags("Miscellaneous")
  async resolveObject(
    @Queries() form: ResolveObjectI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ResolveObject, SearchResponse>(
      HttpType.Get,
      "/resolve_object",
      form,
      options,
    );
  }

  /**
   * @summary Create a new community.
   */
  @Security("bearerAuth")
  @Post("/community")
  @Tags("Community")
  async createCommunity(
    @Body() form: CreateCommunity,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<CreateCommunity, CommunityResponse>(
      HttpType.Post,
      "/community",
      form,
      options,
    );
  }

  /**
   * @summary Get / fetch a community.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/community")
  @Tags("Community")
  async getCommunity(
    @Queries() form: GetCommunityI = {},
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<GetCommunity, GetCommunityResponse>(
      HttpType.Get,
      "/community",
      form,
      options,
    );
  }

  /**
   * @summary Edit a community.
   */
  @Security("bearerAuth")
  @Put("/community")
  @Tags("Community")
  async editCommunity(
    @Body() form: EditCommunity,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<EditCommunity, CommunityResponse>(
      HttpType.Put,
      "/community",
      form,
      options,
    );
  }

  /**
   * @summary List communities, with various filters.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/community/list")
  @Tags("Community")
  async listCommunities(
    @Queries() form: ListCommunitiesI = {},
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListCommunities, ListCommunitiesResponse>(
      HttpType.Get,
      "/community/list",
      form,
      options,
    );
  }

  /**
   * @summary Follow / subscribe to a community.
   */
  @Security("bearerAuth")
  @Post("/community/follow")
  @Tags("Community")
  async followCommunity(
    @Body() form: FollowCommunity,
    @Inject() @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<FollowCommunity, CommunityResponse>(
      HttpType.Post,
      "/community/follow",
      form,
      options,
    );
  }

  /**
   * @summary Get a community's pending follows count.
   */
  @Security("bearerAuth")
  @Get("/community/pending_follows/count")
  @Tags("Community")
  async getCommunityPendingFollowsCount(@Inject() options?: RequestOptions) {
    return this.#wrapper<{}, GetCommunityPendingFollowsCountResponse>(
      HttpType.Get,
      "/community/pending_follows/count",
      {},
      options,
    );
  }

  /**
   * @summary Get a community's pending followers.
   */
  @Security("bearerAuth")
  @Get("/community/pending_follows/list")
  @Tags("Community")
  async listCommunityPendingFollows(
    @Queries() form: ListCommunityPendingFollowsI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<
      ListCommunityPendingFollows,
      ListCommunityPendingFollowsResponse
    >(HttpType.Get, "/community/pending_follows/list", form, options);
  }

  /**
   * @summary Approve a community pending follow request.
   */
  @Security("bearerAuth")
  @Post("/community/pending_follows/approve")
  @Tags("Community")
  async approveCommunityPendingFollow(
    @Body() form: ApproveCommunityPendingFollower,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ApproveCommunityPendingFollower, SuccessResponse>(
      HttpType.Post,
      "/community/pending_follows/approve",
      form,
      options,
    );
  }

  /**
   * @summary Block a community.
   */
  @Security("bearerAuth")
  @Post("/account/block/community")
  @Tags("Account", "Community")
  async blockCommunity(
    @Body() form: BlockCommunity,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<BlockCommunity, CommunityResponse>(
      HttpType.Post,
      "/account/block/community",
      form,
      options,
    );
  }

  /**
   * @summary Delete a community.
   */
  @Security("bearerAuth")
  @Delete("/community")
  @Tags("Community")
  async deleteCommunity(
    @Body() form: DeleteCommunity,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeleteCommunity, CommunityResponse>(
      HttpType.Delete,
      "/community",
      form,
      options,
    );
  }

  /**
   * @summary Hide a community from public / "All" view. Admins only.
   */
  @Security("bearerAuth")
  @Put("/community/hide")
  @Tags("Community", "Admin")
  async hideCommunity(
    @Body() form: HideCommunity,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<HideCommunity, SuccessResponse>(
      HttpType.Put,
      "/community/hide",
      form,
      options,
    );
  }

  /**
   * @summary A moderator remove for a community.
   */
  @Security("bearerAuth")
  @Post("/community/remove")
  @Tags("Community", "Moderator")
  async removeCommunity(
    @Body() form: RemoveCommunity,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<RemoveCommunity, CommunityResponse>(
      HttpType.Post,
      "/community/remove",
      form,
      options,
    );
  }

  /**
   * @summary Transfer your community to an existing moderator.
   */
  @Security("bearerAuth")
  @Post("/community/transfer")
  @Tags("Community", "Moderator")
  async transferCommunity(
    @Body() form: TransferCommunity,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<TransferCommunity, GetCommunityResponse>(
      HttpType.Post,
      "/community/transfer",
      form,
      options,
    );
  }

  /**
   * @summary Ban a user from a community.
   */
  @Security("bearerAuth")
  @Post("/community/ban_user")
  @Tags("Community", "Moderator")
  async banFromCommunity(
    @Body() form: BanFromCommunity,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<BanFromCommunity, PersonResponse>(
      HttpType.Post,
      "/community/ban_user",
      form,
      options,
    );
  }

  /**
   * @summary Add a moderator to your community.
   */
  @Security("bearerAuth")
  @Post("/community/mod")
  @Tags("Community", "Moderator")
  async addModToCommunity(
    @Body() form: AddModToCommunity,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<AddModToCommunity, AddModToCommunityResponse>(
      HttpType.Post,
      "/community/mod",
      form,
      options,
    );
  }

  /**
   * @summary Get a random community.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/community/random")
  @Tags("Community")
  async getRandomCommunity(
    @Queries() form: GetRandomCommunityI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<GetRandomCommunity, CommunityResponse>(
      HttpType.Get,
      "/community/random",
      form,
      options,
    );
  }

  /**
   * @summary Create a report for a community.
   */
  @Security("bearerAuth")
  @Post("/community/report")
  @Tags("Community")
  async createCommunityReport(
    @Body() form: CreateCommunityReport,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<CreateCommunityReport, CommunityReportResponse>(
      HttpType.Post,
      "/community/report",
      form,
      options,
    );
  }

  /**
   * @summary Resolve a report for a private message.
   */
  @Security("bearerAuth")
  @Put("/community/report/resolve")
  @Tags("Community", "Admin")
  async resolveCommunityReport(
    @Body() form: ResolveCommunityReport,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ResolveCommunityReport, CommunityReportResponse>(
      HttpType.Put,
      "/community/report/resolve",
      form,
      options,
    );
  }

  /**
   * @summary Create a post.
   */
  @Security("bearerAuth")
  @Post("/post")
  @Tags("Post")
  async createPost(
    @Body() form: CreatePost,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<CreatePost, PostResponse>(
      HttpType.Post,
      "/post",
      form,
      options,
    );
  }

  /**
   * @summary Get / fetch a post.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/post")
  @Tags("Post")
  async getPost(
    @Queries() form: GetPostI = {},
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<GetPost, GetPostResponse>(
      HttpType.Get,
      "/post",
      form,
      options,
    );
  }

  /**
   * @summary Edit a post.
   */
  @Security("bearerAuth")
  @Put("/post")
  @Tags("Post")
  async editPost(@Body() form: EditPost, @Inject() options?: RequestOptions) {
    return this.#wrapper<EditPost, PostResponse>(
      HttpType.Put,
      "/post",
      form,
      options,
    );
  }

  /**
   * @summary Mods can change nsfw flag and tags for a post
   */
  @Security("bearerAuth")
  @Put("/post/mod_update")
  @Tags("Post")
  async modEditPost(
    @Body() form: ModEditPost,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ModEditPost, PostResponse>(
      HttpType.Put,
      "/post/mod_update",
      form,
      options,
    );
  }

  /**
   * @summary Delete a post.
   */
  @Security("bearerAuth")
  @Delete("/post")
  @Tags("Post")
  async deletePost(
    @Body() form: DeletePost,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeletePost, PostResponse>(
      HttpType.Delete,
      "/post",
      form,
      options,
    );
  }

  /**
   * @summary A moderator remove for a post.
   */
  @Security("bearerAuth")
  @Post("/post/remove")
  @Tags("Post", "Moderator")
  async removePost(
    @Body() form: RemovePost,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<RemovePost, PostResponse>(
      HttpType.Post,
      "/post/remove",
      form,
      options,
    );
  }

  /**
   * @summary Mark a post as read.
   */
  @Security("bearerAuth")
  @Post("/post/mark_as_read")
  @Tags("Post")
  async markPostAsRead(
    @Body() form: MarkPostAsRead,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<MarkPostAsRead, PostResponse>(
      HttpType.Post,
      "/post/mark_as_read",
      form,
      options,
    );
  }

  /**
   * @summary Mark multiple posts as read.
   */
  @Security("bearerAuth")
  @Post("/post/mark_as_read/many")
  @Tags("Post")
  async markManyPostAsRead(
    @Body() form: MarkManyPostsAsRead,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<MarkManyPostsAsRead, SuccessResponse>(
      HttpType.Post,
      "/post/mark_as_read/many",
      form,
      options,
    );
  }

  /**
   * @summary Hide a post from list views.
   */
  @Security("bearerAuth")
  @Post("/post/hide")
  @Tags("Post")
  async hidePost(@Body() form: HidePost, @Inject() options?: RequestOptions) {
    return this.#wrapper<HidePost, PostResponse>(
      HttpType.Post,
      "/post/hide",
      form,
      options,
    );
  }

  /**
   * @summary A moderator can lock a post ( IE disable new comments ).
   */
  @Security("bearerAuth")
  @Post("/post/lock")
  @Tags("Post")
  async lockPost(@Body() form: LockPost, @Inject() options?: RequestOptions) {
    return this.#wrapper<LockPost, PostResponse>(
      HttpType.Post,
      "/post/lock",
      form,
      options,
    );
  }

  /**
   * @summary A moderator can feature a community post ( IE stick it to the top of a community ).
   */
  @Security("bearerAuth")
  @Post("/post/feature")
  @Tags("Post", "Moderator")
  async featurePost(
    @Body() form: FeaturePost,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<FeaturePost, PostResponse>(
      HttpType.Post,
      "/post/feature",
      form,
      options,
    );
  }

  /**
   * @summary Get / fetch posts, with various filters.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/post/list")
  @Tags("Post")
  async getPosts(
    @Queries() form: GetPostsI = {},
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<GetPosts, GetPostsResponse>(
      HttpType.Get,
      "/post/list",
      form,
      options,
    );
  }

  /**
   * @summary Like / vote on a post.
   */
  @Security("bearerAuth")
  @Post("/post/like")
  @Tags("Post")
  async likePost(
    @Body() form: CreatePostLike,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<CreatePostLike, PostResponse>(
      HttpType.Post,
      "/post/like",
      form,
      options,
    );
  }

  /**
   * @summary List a post's likes. Admin-only.
   */
  @Security("bearerAuth")
  @Get("/post/like/list")
  @Tags("Post", "Admin")
  async listPostLikes(
    @Queries() form: ListPostLikesI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListPostLikes, ListPostLikesResponse>(
      HttpType.Get,
      "/post/like/list",
      form,
      options,
    );
  }

  /**
   * @summary Save a post.
   */
  @Security("bearerAuth")
  @Put("/post/save")
  @Tags("Post")
  async savePost(@Body() form: SavePost, @Inject() options?: RequestOptions) {
    return this.#wrapper<SavePost, PostResponse>(
      HttpType.Put,
      "/post/save",
      form,
      options,
    );
  }

  /**
   * @summary Report a post.
   */
  @Security("bearerAuth")
  @Post("/post/report")
  @Tags("Post")
  async createPostReport(
    @Body() form: CreatePostReport,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<CreatePostReport, PostReportResponse>(
      HttpType.Post,
      "/post/report",
      form,
      options,
    );
  }

  /**
   * @summary Resolve a post report. Only a mod can do this.
   */
  @Security("bearerAuth")
  @Put("/post/report/resolve")
  @Tags("Post", "Moderator")
  async resolvePostReport(
    @Body() form: ResolvePostReport,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ResolvePostReport, PostReportResponse>(
      HttpType.Put,
      "/post/report/resolve",
      form,
      options,
    );
  }

  /**
   * @summary Fetch metadata for any given site.
   */
  @Security("bearerAuth")
  @Get("/post/site_metadata")
  @Tags("Miscellaneous", "Post")
  async getSiteMetadata(
    @Queries() form: GetSiteMetadataI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<GetSiteMetadata, GetSiteMetadataResponse>(
      HttpType.Get,
      "/post/site_metadata",
      form,
      options,
    );
  }

  /**
   * @summary Create a comment.
   */
  @Security("bearerAuth")
  @Post("/comment")
  @Tags("Comment")
  async createComment(
    @Body() form: CreateComment,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<CreateComment, CommentResponse>(
      HttpType.Post,
      "/comment",
      form,
      options,
    );
  }

  /**
   * @summary Edit a comment.
   */
  @Security("bearerAuth")
  @Put("/comment")
  @Tags("Comment")
  async editComment(
    @Body() form: EditComment,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<EditComment, CommentResponse>(
      HttpType.Put,
      "/comment",
      form,
      options,
    );
  }

  /**
   * @summary Delete a comment.
   */
  @Security("bearerAuth")
  @Delete("/comment")
  @Tags("Comment")
  async deleteComment(
    @Body() form: DeleteComment,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeleteComment, CommentResponse>(
      HttpType.Delete,
      "/comment",
      form,
      options,
    );
  }

  /**
   * @summary A moderator remove for a comment.
   */
  @Security("bearerAuth")
  @Post("/comment/remove")
  @Tags("Comment", "Moderator")
  async removeComment(
    @Body() form: RemoveComment,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<RemoveComment, CommentResponse>(
      HttpType.Post,
      "/comment/remove",
      form,
      options,
    );
  }

  /**
   * @summary A moderator can lock a comment (IE disable replies).
   */
  @Security("bearerAuth")
  @Post("/comment/lock")
  @Tags("Comment", "Moderator")
  async lockComment(
    @Body() form: LockComment,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<LockComment, CommentResponse>(
      HttpType.Post,
      "/comment/lock",
      form,
      options,
    );
  }

  /**
   * @Summary Like / vote on a comment.
   */
  @Security("bearerAuth")
  @Post("/comment/like")
  @Tags("Comment")
  async likeComment(
    @Body() form: CreateCommentLike,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<CreateCommentLike, CommentResponse>(
      HttpType.Post,
      "/comment/like",
      form,
      options,
    );
  }

  /**
   * @summary List a comment's likes. Admin-only.
   */
  @Security("bearerAuth")
  @Get("/comment/like/list")
  @Tags("Comment", "Admin")
  async listCommentLikes(
    @Queries() form: ListCommentLikesI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListCommentLikes, ListCommentLikesResponse>(
      HttpType.Get,
      "/comment/like/list",
      form,
      options,
    );
  }

  /**
   * @summary Save a comment.
   */
  @Security("bearerAuth")
  @Put("/comment/save")
  @Tags("Comment")
  async saveComment(
    @Body() form: SaveComment,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<SaveComment, CommentResponse>(
      HttpType.Put,
      "/comment/save",
      form,
      options,
    );
  }

  /**
   * @summary Distinguishes a comment (speak as moderator)
   */
  @Security("bearerAuth")
  @Post("/comment/distinguish")
  @Tags("Comment", "Moderator")
  async distinguishComment(
    @Body() form: DistinguishComment,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DistinguishComment, CommentResponse>(
      HttpType.Post,
      "/comment/distinguish",
      form,
      options,
    );
  }

  /**
   * @summary Get / fetch comments.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/comment/list")
  @Tags("Comment")
  async getComments(
    @Queries() form: GetCommentsI = {},
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<GetComments, GetCommentsResponse>(
      HttpType.Get,
      "/comment/list",
      form,
      options,
    );
  }

  /**
   * @summary Get / fetch comments, but without the post or community.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/comment/list/slim")
  @Tags("Comment")
  async getCommentsSlim(
    @Queries() form: GetCommentsI = {},
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<GetComments, GetCommentsSlimResponse>(
      HttpType.Get,
      "/comment/list/slim",
      form,
      options,
    );
  }

  /**
   * @summary Get / fetch comment.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/comment")
  @Tags("Comment")
  async getComment(
    @Queries() form: GetCommentI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<GetComment, CommentResponse>(
      HttpType.Get,
      "/comment",
      form,
      options,
    );
  }

  /**
   * @summary Report a comment.
   */
  @Security("bearerAuth")
  @Post("/comment/report")
  @Tags("Comment")
  async createCommentReport(
    @Body() form: CreateCommentReport,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<CreateCommentReport, CommentReportResponse>(
      HttpType.Post,
      "/comment/report",
      form,
      options,
    );
  }

  /**
   * @summary Resolve a comment report. Only a mod can do this.
   */
  @Security("bearerAuth")
  @Put("/comment/report/resolve")
  @Tags("Comment", "Moderator")
  async resolveCommentReport(
    @Body() form: ResolveCommentReport,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ResolveCommentReport, CommentReportResponse>(
      HttpType.Put,
      "/comment/report/resolve",
      form,
      options,
    );
  }

  /**
   * @summary Create a private message.
   */
  @Security("bearerAuth")
  @Post("/private_message")
  @Tags("PrivateMessage")
  async createPrivateMessage(
    @Body() form: CreatePrivateMessage,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<CreatePrivateMessage, PrivateMessageResponse>(
      HttpType.Post,
      "/private_message",
      form,
      options,
    );
  }

  /**
   * @summary Edit a private message.
   */
  @Security("bearerAuth")
  @Put("/private_message")
  @Tags("PrivateMessage")
  async editPrivateMessage(
    @Body() form: EditPrivateMessage,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<EditPrivateMessage, PrivateMessageResponse>(
      HttpType.Put,
      "/private_message",
      form,
      options,
    );
  }

  /**
   * @summary Delete a private message.
   */
  @Security("bearerAuth")
  @Delete("/private_message")
  @Tags("PrivateMessage")
  async deletePrivateMessage(
    @Body() form: DeletePrivateMessage,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeletePrivateMessage, PrivateMessageResponse>(
      HttpType.Delete,
      "/private_message",
      form,
      options,
    );
  }

  /**
   * @summary Create a report for a private message.
   */
  @Security("bearerAuth")
  @Post("/private_message/report")
  @Tags("PrivateMessage")
  async createPrivateMessageReport(
    @Body() form: CreatePrivateMessageReport,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<
      CreatePrivateMessageReport,
      PrivateMessageReportResponse
    >(HttpType.Post, "/private_message/report", form, options);
  }

  /**
   * @summary Resolve a report for a private message.
   */
  @Security("bearerAuth")
  @Put("/private_message/report/resolve")
  @Tags("PrivateMessage", "Admin")
  async resolvePrivateMessageReport(
    @Body() form: ResolvePrivateMessageReport,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<
      ResolvePrivateMessageReport,
      PrivateMessageReportResponse
    >(HttpType.Put, "/private_message/report/resolve", form, options);
  }

  /**
   * @summary Register a new user.
   */
  @Post("/account/auth/register")
  @Tags("Account")
  async register(@Body() form: Register, @Inject() options?: RequestOptions) {
    return this.#wrapper<Register, LoginResponse>(
      HttpType.Post,
      "/account/auth/register",
      form,
      options,
    );
  }

  /**
   * @summary Log into lemmy.
   */
  @Post("/account/auth/login")
  @Tags("Account")
  async login(@Body() form: Login, @Inject() options?: RequestOptions) {
    return this.#wrapper<Login, LoginResponse>(
      HttpType.Post,
      "/account/auth/login",
      form,
      options,
    );
  }

  /**
   * @summary Invalidate the currently used auth token.
   */
  @Security("bearerAuth")
  @Post("/account/auth/logout")
  @Tags("Account")
  async logout(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Post,
      "/account/auth/logout",
      {},
      options,
    );
  }

  /**
   * @summary Get the details for a person.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/person")
  @Tags("Person")
  async getPersonDetails(
    @Queries() form: GetPersonDetailsI = {},
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<GetPersonDetails, GetPersonDetailsResponse>(
      HttpType.Get,
      "/person",
      form,
      options,
    );
  }

  /**
   * @summary List the content for a person.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/person/content")
  @Tags("Person")
  async listPersonContent(
    @Queries() form: ListPersonContentI = {},
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListPersonContent, ListPersonContentResponse>(
      HttpType.Get,
      "/person/content",
      form,
      options,
    );
  }

  /**
   * @summary Make a note for a person.
   */
  @Security("bearerAuth")
  @Post("/person/note")
  @Tags("Person")
  async notePerson(
    @Body() form: NotePerson,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<NotePerson, SuccessResponse>(
      HttpType.Post,
      "/person/note",
      form,
      options,
    );
  }

  /**
   * @summary Ban a person from your site.
   */
  @Security("bearerAuth")
  @Post("/admin/ban")
  @Tags("Admin")
  async banPerson(@Body() form: BanPerson, @Inject() options?: RequestOptions) {
    return this.#wrapper<BanPerson, PersonResponse>(
      HttpType.Post,
      "/admin/ban",
      form,
      options,
    );
  }

  /**
   * @summary Get a list of users.
   */
  @Security("bearerAuth")
  @Get("/admin/users")
  @Tags("Admin", "Miscellaneous")
  async listUsers(
    @Queries() form: AdminListUsersI = {},
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<AdminListUsers, AdminListUsersResponse>(
      HttpType.Get,
      "/admin/users",
      form,
      options,
    );
  }

  /**
   * @summary Block a person.
   */
  @Security("bearerAuth")
  @Post("/account/block/person")
  @Tags("Account")
  async blockPerson(
    @Body() form: BlockPerson,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<BlockPerson, PersonResponse>(
      HttpType.Post,
      "/account/block/person",
      form,
      options,
    );
  }

  /**
   * @summary Fetch a Captcha.
   */
  @Get("/account/auth/get_captcha")
  @Tags("Account")
  async getCaptcha(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, GetCaptchaResponse>(
      HttpType.Get,
      "/account/auth/get_captcha",
      {},
      options,
    );
  }

  /**
   * @summary Delete your account.
   */
  @Security("bearerAuth")
  @Delete("/account")
  @Tags("Account")
  async deleteAccount(
    @Body() form: DeleteAccount,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeleteAccount, SuccessResponse>(
      HttpType.Delete,
      "/account",
      form,
      options,
    );
  }

  /**
   * @summary Reset your password.
   */
  @Security("bearerAuth")
  @Post("/account/auth/password_reset")
  @Tags("Account")
  async passwordReset(
    @Body() form: PasswordReset,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<PasswordReset, SuccessResponse>(
      HttpType.Post,
      "/account/auth/password_reset",
      form,
      options,
    );
  }

  /**
   * @summary Change your password from an email / token based reset.
   */
  @Security("bearerAuth")
  @Post("/account/auth/password_change")
  @Tags("Account")
  async passwordChangeAfterReset(
    @Body() form: PasswordChangeAfterReset,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<PasswordChangeAfterReset, SuccessResponse>(
      HttpType.Post,
      "/account/auth/password_change",
      form,
      options,
    );
  }

  /**
   * @summary Mark all notifications as read.
   */
  @Security("bearerAuth")
  @Post("/account/notification/mark_as_read/all")
  @Tags("Account")
  async markAllNotificationsAsRead(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Post,
      "/account/notification/mark_as_read/all",
      {},
      options,
    );
  }

  /**
   * @summary Mark a notification as read.
   */
  @Security("bearerAuth")
  @Post("/account/notification/mark_as_read")
  @Tags("Account")
  async markNotificationAsRead(
    @Body() form: MarkNotificationAsRead,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<MarkNotificationAsRead, SuccessResponse>(
      HttpType.Post,
      "/account/notification/mark_as_read",
      form,
      options,
    );
  }

  /**
   * @summary Save your user settings.
   */
  @Security("bearerAuth")
  @Put("/account/settings/save")
  @Tags("Account")
  async saveUserSettings(
    @Body() form: SaveUserSettings,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<SaveUserSettings, SuccessResponse>(
      HttpType.Put,
      "/account/settings/save",
      form,
      options,
    );
  }

  /**
   * @summary Change your user password.
   */
  @Security("bearerAuth")
  @Put("/account/auth/change_password")
  @Tags("Account")
  async changePassword(
    @Body() form: ChangePassword,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ChangePassword, LoginResponse>(
      HttpType.Put,
      "/account/auth/change_password",
      form,
      options,
    );
  }

  /**
   * @summary Get counts for your reports.
   */
  @Security("bearerAuth")
  @Get("/account/report_count")
  @Tags("Account")
  async getReportCount(
    @Queries() form: GetReportCountI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<GetReportCount, GetReportCountResponse>(
      HttpType.Get,
      "/account/report_count",
      form,
      options,
    );
  }

  /**
   * @summary Get your unread counts.
   */
  @Security("bearerAuth")
  @Get("/account/notification/unread_count")
  @Tags("Account")
  async getUnreadCount(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, GetUnreadCountResponse>(
      HttpType.Get,
      "/account/notification/unread_count",
      {},
      options,
    );
  }

  /**
   * @summary Get your inbox (replies, comment mentions, post mentions, and messages)
   */
  @Security("bearerAuth")
  @Get("/account/notification/list")
  @Tags("Account")
  async listNotifications(
    @Queries() form: ListNotificationsI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListNotifications, ListNotificationsResponse>(
      HttpType.Get,
      "/account/notification/list",
      form,
      options,
    );
  }

  /**
   * @summary Verify your email
   */
  @Post("/account/auth/verify_email")
  @Tags("Account")
  async verifyEmail(
    @Body() form: VerifyEmail,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<VerifyEmail, SuccessResponse>(
      HttpType.Post,
      "/account/auth/verify_email",
      form,
      options,
    );
  }

  /**
   * @summary Resend a verification email.
   */
  @Post("/account/auth/resend_verification_email")
  @Tags("Account")
  async resendVerificationEmail(
    @Body() form: ResendVerificationEmail,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ResendVerificationEmail, SuccessResponse>(
      HttpType.Post,
      "/account/auth/resend_verification_email",
      form,
      options,
    );
  }

  /**
   * @summary List your saved content.
   */
  @Security("bearerAuth")
  @Get("/account/saved")
  @Tags("Account")
  async listPersonSaved(
    @Queries() form: ListPersonSavedI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListPersonSaved, ListPersonSavedResponse>(
      HttpType.Get,
      "/account/saved",
      form,
      options,
    );
  }

  /**
   * @summary List your read content.
   */
  @Security("bearerAuth")
  @Get("/account/read")
  @Tags("Account")
  async listPersonRead(
    @Queries() form: ListPersonReadI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListPersonRead, ListPersonReadResponse>(
      HttpType.Get,
      "/account/read",
      form,
      options,
    );
  }

  /**
   * @summary List your hidden content.
   */
  @Security("bearerAuth")
  @Get("/account/hidden")
  @Tags("Account")
  async listPersonHidden(
    @Queries() form: ListPersonHiddenI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListPersonHidden, ListPersonHiddenResponse>(
      HttpType.Get,
      "/account/hidden",
      form,
      options,
    );
  }

  /**
   * @summary List your liked content.
   */
  @Security("bearerAuth")
  @Get("/account/liked")
  @Tags("Account")
  async listPersonLiked(
    @Queries() form: ListPersonLikedI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListPersonLiked, ListPersonLikedResponse>(
      HttpType.Get,
      "/account/liked",
      form,
      options,
    );
  }

  /**
   * @summary Add an admin to your site.
   */
  @Security("bearerAuth")
  @Post("/admin/add")
  @Tags("Admin")
  async addAdmin(@Body() form: AddAdmin, @Inject() options?: RequestOptions) {
    return this.#wrapper<AddAdmin, AddAdminResponse>(
      HttpType.Post,
      "/admin/add",
      form,
      options,
    );
  }

  /**
   * @summary Get the unread registration applications count.
   */
  @Security("bearerAuth")
  @Get("/admin/registration_application/count")
  @Tags("Admin")
  async getUnreadRegistrationApplicationCount(
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<object, GetUnreadRegistrationApplicationCountResponse>(
      HttpType.Get,
      "/admin/registration_application/count",
      {},
      options,
    );
  }

  /**
   * @summary List the registration applications.
   */
  @Security("bearerAuth")
  @Get("/admin/registration_application/list")
  @Tags("Admin")
  async listRegistrationApplications(
    @Queries() form: ListRegistrationApplicationsI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<
      ListRegistrationApplications,
      ListRegistrationApplicationsResponse
    >(HttpType.Get, "/admin/registration_application/list", form, options);
  }

  /**
   * @summary Approve a registration application
   */
  @Security("bearerAuth")
  @Put("/admin/registration_application/approve")
  @Tags("Admin")
  async approveRegistrationApplication(
    @Body() form: ApproveRegistrationApplication,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<
      ApproveRegistrationApplication,
      RegistrationApplicationResponse
    >(HttpType.Put, "/admin/registration_application/approve", form, options);
  }

  /**
   * @summary Get the application a user submitted when they first registered their account
   */
  @Security("bearerAuth")
  @Get("/admin/registration_application")
  @Tags("Admin")
  async getRegistrationApplication(
    @Queries() form: GetRegistrationApplicationI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<
      GetRegistrationApplication,
      RegistrationApplicationResponse
    >(HttpType.Get, "/admin/registration_application", form, options);
  }

  /**
   * @summary Purge / Delete a person from the database.
   */
  @Security("bearerAuth")
  @Post("/admin/purge/person")
  @Tags("Admin")
  async purgePerson(
    @Body() form: PurgePerson,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<PurgePerson, SuccessResponse>(
      HttpType.Post,
      "/admin/purge/person",
      form,
      options,
    );
  }

  /**
   * @summary Purge / Delete a community from the database.
   */
  @Security("bearerAuth")
  @Post("/admin/purge/community")
  @Tags("Admin")
  async purgeCommunity(
    @Body() form: PurgeCommunity,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<PurgeCommunity, SuccessResponse>(
      HttpType.Post,
      "/admin/purge/community",
      form,
      options,
    );
  }

  /**
   * @summary Purge / Delete a post from the database.
   */
  @Security("bearerAuth")
  @Post("/admin/purge/post")
  @Tags("Admin")
  async purgePost(@Body() form: PurgePost, @Inject() options?: RequestOptions) {
    return this.#wrapper<PurgePost, SuccessResponse>(
      HttpType.Post,
      "/admin/purge/post",
      form,
      options,
    );
  }

  /**
   * @summary Purge / Delete a comment from the database.
   */
  @Security("bearerAuth")
  @Post("/admin/purge/comment")
  @Tags("Admin")
  async purgeComment(
    @Body() form: PurgeComment,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<PurgeComment, SuccessResponse>(
      HttpType.Post,
      "/admin/purge/comment",
      form,
      options,
    );
  }

  /**
   * @summary Create a new custom emoji.
   */
  @Security("bearerAuth")
  @Post("/custom_emoji")
  @Tags("CustomEmoji")
  async createCustomEmoji(
    @Body() form: CreateCustomEmoji,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<CreateCustomEmoji, CustomEmojiResponse>(
      HttpType.Post,
      "/custom_emoji",
      form,
      options,
    );
  }

  /**
   * @summary Edit an existing custom emoji.
   */
  @Security("bearerAuth")
  @Put("/custom_emoji")
  @Tags("CustomEmoji")
  async editCustomEmoji(
    @Body() form: EditCustomEmoji,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<EditCustomEmoji, CustomEmojiResponse>(
      HttpType.Put,
      "/custom_emoji",
      form,
      options,
    );
  }

  /**
   * @summary Delete a custom emoji.
   */
  @Security("bearerAuth")
  @Post("/custom_emoji/delete")
  @Tags("CustomEmoji")
  async deleteCustomEmoji(
    @Body() form: DeleteCustomEmoji,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeleteCustomEmoji, SuccessResponse>(
      HttpType.Post,
      "/custom_emoji/delete",
      form,
      options,
    );
  }

  /**
   * @summary List custom emojis
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/custom_emoji/list")
  @Tags("CustomEmoji")
  async listCustomEmojis(
    @Queries() form: ListCustomEmojisI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListCustomEmojis, ListCustomEmojisResponse>(
      HttpType.Get,
      "/custom_emoji/list",
      form,
      options,
    );
  }

  /**
   * @summary Create a new tagline
   */
  @Security("bearerAuth")
  @Post("/admin/tagline")
  @Tags("Admin", "Tagline")
  async createTagline(
    @Body() form: CreateTagline,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<CreateTagline, TaglineResponse>(
      HttpType.Post,
      "/admin/tagline",
      form,
      options,
    );
  }

  /**
   * @summary Edit an existing tagline
   */
  @Security("bearerAuth")
  @Put("/admin/tagline")
  @Tags("Admin", "Tagline")
  async editTagline(
    @Body() form: UpdateTagline,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<UpdateTagline, TaglineResponse>(
      HttpType.Put,
      "/admin/tagline",
      form,
      options,
    );
  }

  /**
   * @summary Delete a tagline
   */
  @Security("bearerAuth")
  @Delete("/admin/tagline")
  @Tags("Admin", "Tagline")
  async deleteTagline(
    @Body() form: DeleteTagline,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeleteTagline, SuccessResponse>(
      HttpType.Delete,
      "/admin/tagline",
      form,
      options,
    );
  }

  /**
   * @summary List taglines.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/admin/tagline/list")
  @Tags("Admin", "Tagline")
  async listTaglines(
    @Queries() form: ListTaglinesI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListTaglines, ListTaglinesResponse>(
      HttpType.Get,
      "/admin/tagline/list",
      form,
      options,
    );
  }

  /**
   * @summary Create a community post tag.
   */
  @Security("bearerAuth")
  @Post("/community/tag")
  @Tags("Community")
  createCommunityTag(
    @Body() form: CreateCommunityTag,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<CreateCommunityTag, Tag>(
      HttpType.Post,
      "/community/tag",
      form,
      options,
    );
  }

  /**
   * @summary Edit a community post tag.
   */
  @Security("bearerAuth")
  @Put("/community/tag")
  @Tags("Community")
  updateCommunityTag(
    @Body() form: UpdateCommunityTag,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<UpdateCommunityTag, Tag>(
      HttpType.Post,
      "/community/tag",
      form,
      options,
    );
  }

  /**
   * @summary Delete a post tag in a community.
   */
  @Security("bearerAuth")
  @Delete("/community/tag")
  @Tags("Community")
  deleteCommunityTag(
    @Body() form: DeleteCommunityTag,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeleteCommunityTag, Tag>(
      HttpType.Delete,
      "/community/tag",
      form,
      options,
    );
  }

  /**
   * @summary Create a new oauth provider method
   */
  @Security("bearerAuth")
  @Post("/oauth_provider")
  @Tags("Miscellaneous", "OAuth")
  async createOAuthProvider(
    @Body() form: CreateOAuthProvider,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<CreateOAuthProvider, OAuthProvider>(
      HttpType.Post,
      "/oauth_provider",
      form,
      options,
    );
  }

  /**
   * @summary Edit an existing oauth provider method
   */
  @Security("bearerAuth")
  @Put("/oauth_provider")
  @Tags("Miscellaneous", "OAuth")
  async editOAuthProvider(
    @Body() form: EditOAuthProvider,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<EditOAuthProvider, OAuthProvider>(
      HttpType.Put,
      "/oauth_provider",
      form,
      options,
    );
  }

  /**
   * @summary Delete an oauth provider method
   */
  @Security("bearerAuth")
  @Delete("/oauth_provider")
  @Tags("Miscellaneous", "OAuth")
  async deleteOAuthProvider(
    @Body() form: DeleteOAuthProvider,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeleteOAuthProvider, SuccessResponse>(
      HttpType.Delete,
      "/oauth_provider",
      form,
      options,
    );
  }

  /**
   * @summary Authenticate with OAuth
   */
  @Security("bearerAuth")
  @Post("/oauth/authenticate")
  @Tags("Miscellaneous", "OAuth")
  async authenticateWithOAuth(
    @Body() form: AuthenticateWithOauth,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<AuthenticateWithOauth, LoginResponse>(
      HttpType.Post,
      "/oauth/authenticate",
      form,
      options,
    );
  }

  /**
   * @summary Fetch federated instances.
   */
  @Get("/federated_instances")
  @Tags("Miscellaneous")
  async getFederatedInstances(
    @Queries() form: GetFederatedInstancesI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<GetFederatedInstances, GetFederatedInstancesResponse>(
      HttpType.Get,
      "/federated_instances",
      form,
      options,
    );
  }

  /**
   * @summary List user reports.
   */
  @Security("bearerAuth")
  @Get("/report/list")
  @Tags("Admin")
  async listReports(
    @Queries() form: ListReportsI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListReports, ListReportsResponse>(
      HttpType.Get,
      "/report/list",
      form,
      options,
    );
  }

  /**
   * @summary Block an instance's communities as a user.
   */
  @Security("bearerAuth")
  @Post("/account/block/instance/communities")
  @Tags("Account", "Community")
  async userBlockInstanceCommunities(
    @Body() form: UserBlockInstanceCommunitiesParams,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<UserBlockInstanceCommunitiesParams, SuccessResponse>(
      HttpType.Post,
      "/account/block/instance/communities",
      form,
      options,
    );
  }

  /**
   * @summary Block an instance's persons as a user.
   */
  @Security("bearerAuth")
  @Post("/account/block/instance/persons")
  @Tags("Account", "Person")
  async userBlockInstancePersons(
    @Body() form: UserBlockInstancePersonsParams,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<UserBlockInstancePersonsParams, SuccessResponse>(
      HttpType.Post,
      "/account/block/instance/persons",
      form,
      options,
    );
  }

  /**
   * @summary Globally block an instance as admin.
   */
  @Security("bearerAuth")
  @Post("/admin/instance/block")
  @Tags("Admin")
  async adminBlockInstance(
    @Body() form: AdminBlockInstanceParams,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<AdminBlockInstanceParams, SuccessResponse>(
      HttpType.Post,
      "/admin/instance/block",
      form,
      options,
    );
  }

  /**
   * @summary Globally allow an instance as admin.
   */
  @Security("bearerAuth")
  @Post("/admin/instance/allow")
  @Tags("Admin")
  async adminAllowInstance(
    @Body() form: AdminAllowInstanceParams,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<AdminAllowInstanceParams, SuccessResponse>(
      HttpType.Post,
      "/admin/instance/allow",
      form,
      options,
    );
  }

  /**
   * @summary Upload new user avatar.
   */
  @Security("bearerAuth")
  @Post("/account/avatar")
  @Tags("Account", "Media")
  async uploadUserAvatar(
    @UploadedFile() image: UploadImage,
    @Inject() options?: RequestOptions,
  ): Promise<UploadImageResponse> {
    return this.#upload("/account/avatar", image, options);
  }

  /**
   * @summary Delete the user avatar.
   */
  @Security("bearerAuth")
  @Delete("/account/avatar")
  @Tags("Account", "Media")
  async deleteUserAvatar(
    @Inject() options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Delete,
      "/account/avatar",
      {},
      options,
    );
  }

  /**
   * @summary Upload new user banner.
   */
  @Security("bearerAuth")
  @Post("/account/banner")
  @Tags("Account", "Media")
  async uploadUserBanner(
    @UploadedFile() image: UploadImage,
    @Inject() options?: RequestOptions,
  ): Promise<UploadImageResponse> {
    return this.#upload("/account/banner", image, options);
  }

  /**
   * @summary Delete the user banner.
   */
  @Security("bearerAuth")
  @Delete("/account/banner")
  @Tags("Account", "Media")
  async deleteUserBanner(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Delete,
      "/account/banner",
      {},
      options,
    );
  }

  /**
   * @summary Upload new community icon.
   */
  @Security("bearerAuth")
  @Post("/community/icon")
  @Tags("Community", "Media")
  async uploadCommunityIcon(
    @Queries() query: CommunityIdQueryI,
    @UploadedFile() image: UploadImage,
    @Inject() options?: RequestOptions,
  ): Promise<UploadImageResponse> {
    return this.#uploadWithQuery("/community/icon", query, image, options);
  }

  /**
   * @summary Delete the community icon.
   */
  @Security("bearerAuth")
  @Delete("/community/icon")
  @Tags("Community", "Media")
  async deleteCommunityIcon(
    @Body() form: CommunityIdQuery,
    @Inject() options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#wrapper<CommunityIdQuery, SuccessResponse>(
      HttpType.Delete,
      "/community/icon",
      form,
      options,
    );
  }

  /**
   * @summary Upload new community banner.
   */
  @Security("bearerAuth")
  @Post("/community/banner")
  @Tags("Community", "Media")
  async uploadCommunityBanner(
    @Queries() query: CommunityIdQueryI,
    @UploadedFile() image: UploadImage,
    @Inject() options?: RequestOptions,
  ): Promise<UploadImageResponse> {
    return this.#uploadWithQuery("/community/banner", query, image, options);
  }

  /**
   * @summary Delete the community banner.
   */
  @Security("bearerAuth")
  @Delete("/community/banner")
  @Tags("Community", "Media")
  async deleteCommunityBanner(
    @Body() form: CommunityIdQuery,
    @Inject() options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#wrapper<CommunityIdQuery, SuccessResponse>(
      HttpType.Delete,
      "/community/banner",
      form,
      options,
    );
  }

  /**
   * @summary Upload new site icon.
   */
  @Security("bearerAuth")
  @Post("/site/icon")
  @Tags("Site", "Media")
  async uploadSiteIcon(
    @UploadedFile() image: UploadImage,
    @Inject() options?: RequestOptions,
  ): Promise<UploadImageResponse> {
    return this.#upload("/site/icon", image, options);
  }

  /**
   * @summary Delete the site icon.
   */
  @Security("bearerAuth")
  @Delete("/site/icon")
  @Tags("Site", "Media")
  async deleteSiteIcon(
    @Inject() options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Delete,
      "/site/icon",
      {},
      options,
    );
  }

  /**
   * @summary Upload new site banner.
   */
  @Security("bearerAuth")
  @Post("/site/banner")
  @Tags("Site", "Media")
  async uploadSiteBanner(
    @UploadedFile() image: UploadImage,
    @Inject() options?: RequestOptions,
  ): Promise<UploadImageResponse> {
    return this.#upload("/site/banner", image, options);
  }

  /**
   * @summary Delete the site banner.
   */
  @Security("bearerAuth")
  @Delete("/site/banner")
  @Tags("Site", "Media")
  async deleteSiteBanner(
    @Inject() options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Delete,
      "/site/banner",
      {},
      options,
    );
  }

  /**
   * @summary Upload an image to the server.
   */
  @Security("bearerAuth")
  @Post("/image")
  @Tags("Media")
  async uploadImage(
    @UploadedFile() image: UploadImage,
    @Inject() options?: RequestOptions,
  ): Promise<UploadImageResponse> {
    return this.#upload("/image", image, options);
  }

  /**
   * @summary Health check for image functionality
   */
  @Get("/image/health")
  @Tags("Media")
  async imageHealth(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Get,
      "/image/health",
      {},
      options,
    );
  }

  /**
   * Mark donation dialog as shown, so it isn't displayed anymore.
   */
  @Security("bearerAuth")
  @Post("/account/donation_dialog_shown")
  @Tags("Account")
  donationDialogShown(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Post,
      "/account/donation_dialog_shown",
      {},
      options,
    );
  }

  @Security("bearerAuth")
  @Post("/multi_community")
  @Tags("Multicommunity")
  createMultiCommunity(
    @Body() form: CreateMultiCommunity,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<object, MultiCommunityResponse>(
      HttpType.Post,
      "/multi_community",
      form,
      options,
    );
  }

  @Security("bearerAuth")
  @Put("/multi_community")
  @Tags("Multicommunity")
  updateMultiCommunity(
    @Body() form: UpdateMultiCommunity,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<object, MultiCommunityResponse>(
      HttpType.Put,
      "/multi_community",
      form,
      options,
    );
  }

  @Get("/multi_community")
  @Tags("Multicommunity")
  getMultiCommunity(
    @Queries() form: GetMultiCommunityI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<object, GetMultiCommunityResponse>(
      HttpType.Get,
      "/multi_community",
      form,
      options,
    );
  }

  @Security("bearerAuth")
  @Post("/multi_community/entry")
  @Tags("Multicommunity")
  createMultiCommunityEntry(
    @Body() form: CreateOrDeleteMultiCommunityEntry,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<object, CommunityResponse>(
      HttpType.Post,
      "/multi_community/entry",
      form,
      options,
    );
  }

  @Security("bearerAuth")
  @Delete("/multi_community/entry")
  @Tags("Multicommunity")
  deleteMultiCommunityEntry(
    @Body() form: CreateOrDeleteMultiCommunityEntry,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Delete,
      "/multi_community/entry",
      form,
      options,
    );
  }

  @Get("/multi_community/list")
  @Tags("Multicommunity")
  listMultiCommunities(
    @Queries() form: ListMultiCommunitiesI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<object, ListMultiCommunitiesResponse>(
      HttpType.Get,
      "/multi_community/list",
      form,
      options,
    );
  }

  @Post("/multi_community/follow")
  @Tags("Multicommunity")
  followMultiCommunity(
    @Body() form: FollowMultiCommunity,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<object, MultiCommunityResponse>(
      HttpType.Post,
      "/multi_community/follow",
      form,
      options,
    );
  }

  /**
   * @summary Change notification settings for a community
   */
  @Security("bearerAuth")
  @Put("/community/notifications")
  @Tags("Community")
  updateCommunityNotifications(
    @Body() form: UpdateCommunityNotifications,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<UpdateCommunityNotifications, SuccessResponse>(
      HttpType.Post,
      "/community/notifications",
      form,
      options,
    );
  }

  /**
   * @summary Change notification settings for a post
   */
  @Security("bearerAuth")
  @Put("/post/notifications")
  @Tags("Post")
  updatePostNotifications(
    @Body() form: UpdatePostNotifications,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<UpdatePostNotifications, SuccessResponse>(
      HttpType.Post,
      "/post/notifications",
      form,
      options,
    );
  }

  #buildFullUrl(endpoint: string) {
    return `${this.#apiUrl}${endpoint}`;
  }

  async #upload<ResponseType>(
    path: string,
    { image }: UploadImage,
    options?: RequestOptions,
  ): Promise<ResponseType> {
    const formData = createFormData(image);

    const response = await this.#fetchFunction(this.#buildFullUrl(path), {
      ...options,
      method: HttpType.Post,
      body: formData as unknown as BodyInit,
      headers: this.#headers,
    });
    return response.json();
  }

  async #uploadWithQuery<QueryType extends object, ResponseType>(
    path: string,
    query: QueryType,
    { image }: UploadImage,
    options?: RequestOptions,
  ): Promise<ResponseType> {
    return this.#upload<ResponseType>(
      `${path}?${encodeGetParams(query)}`,
      { image },
      options,
    );
  }

  async #wrapper<BodyType extends object, ResponseType>(
    type_: HttpType,
    endpoint: string,
    form: BodyType,
    options: RequestOptions | undefined,
  ): Promise<ResponseType> {
    let response: Response;
    if (type_ === HttpType.Get) {
      const getUrl = `${this.#buildFullUrl(endpoint)}?${encodeGetParams(form)}`;
      response = await this.#fetchFunction(getUrl, {
        ...options,
        method: HttpType.Get,
        headers: this.#headers,
      });
    } else {
      response = await this.#fetchFunction(this.#buildFullUrl(endpoint), {
        ...options,
        method: type_,
        headers: {
          "Content-Type": "application/json",
          ...this.#headers,
        },
        body: JSON.stringify(form),
      });
    }

    let json: any | undefined = undefined;

    try {
      json = await response.json();
    } catch {
      throw new LemmyError(response.statusText, response.status);
    }

    if (!response.ok) {
      console.error(
        `Request error while calling ${type_} ${endpoint} with ${JSON.stringify(form)}`,
      );
      let err = new LemmyError(
        json.error ?? response.statusText,
        response.status,
        json.message,
      );
      throw err;
    } else {
      return json;
    }
  }

  /**
   * Set the headers (can be used to set the auth header)
   */
  setHeaders(headers: { [key: string]: string }) {
    this.#headers = headers;
  }
}

function encodeGetParams<BodyType extends object>(p: BodyType): string {
  return Object.entries(p)
    .filter(kv => kv[1] !== undefined && kv[1] !== null)
    .map(kv => kv.map(encodeURIComponent).join("="))
    .join("&");
}

function createFormData(image: File | Buffer): FormData {
  let formData = new FormData();

  if (image instanceof File) {
    formData.append("images[]", image);
  } else {
    // The filename doesn't affect the file type or file name that ends up in pictrs
    formData.append(
      "images[]",
      new Blob([image as BlobPart], { type: "image/jpeg" }),
      "image.jpg",
    );
  }

  return formData;
}

/**
 * A Lemmy error type.
 *
 * The name is the i18n translatable error code.
 * The msg is either an empty string, or extra non-translatable info.
 */
export class LemmyError extends Error {
  status: number;
  constructor(name: string, status: number, msg?: string) {
    super(msg ?? "");
    this.name = name;
    this.status = status;

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, LemmyError.prototype);
  }
}
