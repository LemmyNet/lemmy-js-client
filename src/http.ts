import { AddAdmin } from "./types/AddAdmin";
import { AddAdminResponse } from "./types/AddAdminResponse";
import { AddModToCommunity } from "./types/AddModToCommunity";
import { AddModToCommunityResponse } from "./types/AddModToCommunityResponse";
import { ApproveRegistrationApplication } from "./types/ApproveRegistrationApplication";
import { BanFromCommunity } from "./types/BanFromCommunity";
import { BanFromCommunityResponse } from "./types/BanFromCommunityResponse";
import { MarkManyPostsAsRead } from "./types/MarkManyPostsAsRead";
import { BanPerson } from "./types/BanPerson";
import { BanPersonResponse } from "./types/BanPersonResponse";
import { BannedPersonsResponse } from "./types/BannedPersonsResponse";
import { BlockCommunity } from "./types/BlockCommunity";
import { BlockCommunityResponse } from "./types/BlockCommunityResponse";
import { BlockPerson } from "./types/BlockPerson";
import { BlockPersonResponse } from "./types/BlockPersonResponse";
import { ChangePassword } from "./types/ChangePassword";
import { CommentReportResponse } from "./types/CommentReportResponse";
import { CommentResponse } from "./types/CommentResponse";
import { CommunityResponse } from "./types/CommunityResponse";
import { CreateComment } from "./types/CreateComment";
import { CreateCommentLike } from "./types/CreateCommentLike";
import { CreateCommentReport } from "./types/CreateCommentReport";
import { CreateCommunity } from "./types/CreateCommunity";
import { CreateCommunityTag } from "./types/CreateCommunityTag";
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
import { ListCommunityTags } from "./types/ListCommunityTags";
import { ListCommunityTagsResponse } from "./types/ListCommunityTagsResponse";
import { ListRegistrationApplications } from "./types/ListRegistrationApplications";
import { ListRegistrationApplicationsResponse } from "./types/ListRegistrationApplicationsResponse";
import { LockPost } from "./types/LockPost";
import { Login } from "./types/Login";
import { LoginResponse } from "./types/LoginResponse";
import { MarkCommentReplyAsRead } from "./types/MarkCommentReplyAsRead";
import { MarkPostAsRead } from "./types/MarkPostAsRead";
import { MarkPrivateMessageAsRead } from "./types/MarkPrivateMessageAsRead";
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
import { ResolveObject } from "./types/ResolveObject";
import { ResolveObjectResponse } from "./types/ResolveObjectResponse";
import { ResolvePostReport } from "./types/ResolvePostReport";
import { ResolvePrivateMessageReport } from "./types/ResolvePrivateMessageReport";
import { SaveComment } from "./types/SaveComment";
import { SavePost } from "./types/SavePost";
import { SaveUserSettings } from "./types/SaveUserSettings";
import { Search } from "./types/Search";
import { SearchResponse } from "./types/SearchResponse";
import { SiteResponse } from "./types/SiteResponse";
import { TransferCommunity } from "./types/TransferCommunity";
import { UpdateCommunityTag } from "./types/UpdateCommunityTag";
import { UpdatePostTags } from "./types/UpdatePostTags";
import { VerifyEmail } from "./types/VerifyEmail";
import {
  DeleteImageParamsI,
  GetCommentI,
  GetCommentsI,
  GetCommunityI,
  GetCommunityPendingFollowsCountI,
  GetModlogI,
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
  ListInboxI,
  ListMediaI,
  ListPersonContentI,
  ListPersonSavedI,
  ListPostLikesI,
  ListRegistrationApplicationsI,
  ListReportsI,
  ListTaglinesI,
  ResolveObjectI,
  SearchI,
  UploadImage,
  VERSION,
} from "./other_types";
import { HideCommunity } from "./types/HideCommunity";
import { GenerateTotpSecretResponse } from "./types/GenerateTotpSecretResponse";
import { UpdateTotp } from "./types/UpdateTotp";
import { UpdateTotpResponse } from "./types/UpdateTotpResponse";
import { SuccessResponse } from "./types/SuccessResponse";
import { LoginToken } from "./types/LoginToken";
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
import { GetCommunityPendingFollowsCount } from "./types/GetCommunityPendingFollowsCount";
import { GetCommunityPendingFollowsCountResponse } from "./types/GetCommunityPendingFollowsCountResponse";
import { ListCommunityPendingFollowsResponse } from "./types/ListCommunityPendingFollowsResponse";
import { ListCommunityPendingFollows } from "./types/ListCommunityPendingFollows";
import { ListReports } from "./types/ListReports";
import { ListReportsResponse } from "./types/ListReportsResponse";
import { MyUserInfo } from "./types/MyUserInfo";
import { UserBlockInstanceParams } from "./types/UserBlockInstanceParams";
import { AdminAllowInstanceParams } from "./types/AdminAllowInstanceParams";
import { AdminBlockInstanceParams } from "./types/AdminBlockInstanceParams";
import { ListPersonContent } from "./types/ListPersonContent";
import { ListPersonContentResponse } from "./types/ListPersonContentResponse";
import { ListPersonSaved } from "./types/ListPersonSaved";
import { ListPersonSavedResponse } from "./types/ListPersonSavedResponse";
import { DeleteImageParams } from "./types/DeleteImageParams";
import { UploadImageResponse } from "./types/UploadImageResponse";
import { ListInboxResponse } from "./types/ListInboxResponse";
import { ListInbox } from "./types/ListInbox";
import { MarkPersonCommentMentionAsRead } from "./types/MarkPersonCommentMentionAsRead";
import { MarkPersonPostMentionAsRead } from "./types/MarkPersonPostMentionAsRead";
import { GetCommentsSlimResponse } from "./types/GetCommentsSlimResponse";
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
} from "tsoa";
import { CommunityTagResponse } from "./types/CommunityTagResponse";

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
  getSite(@Inject() options?: RequestOptions) {
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
  createSite(@Body() form: CreateSite, @Inject() options?: RequestOptions) {
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
  editSite(@Body() form: EditSite, @Inject() options?: RequestOptions) {
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
  leaveAdmin(@Inject() options?: RequestOptions) {
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
  generateTotpSecret(@Inject() options?: RequestOptions) {
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
  getMyUser(@Inject() options?: RequestOptions) {
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
  exportSettings(@Inject() options?: RequestOptions) {
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
  importSettings(@Body() form: any, @Inject() options?: RequestOptions) {
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
  @Get("/account/list_logins")
  @Tags("Account")
  listLogins(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, LoginToken[]>(
      HttpType.Get,
      "/account/list_logins",
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
  validateAuth(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Get,
      "/account/validate_auth",
      {},
      options,
    );
  }

  /**
   * @summary List all the media for your user
   */
  @Security("bearerAuth")
  @Get("/account/list_media")
  @Tags("Account", "Media")
  listMedia(
    @Queries() form: ListMediaI = {},
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListMedia, ListMediaResponse>(
      HttpType.Get,
      "/account/list_media",
      form,
      options,
    );
  }

  /**
   * @summary List all the media known to your instance.
   */
  @Security("bearerAuth")
  @Get("/admin/list_all_media")
  @Tags("Admin", "Media")
  listAllMedia(
    @Queries() form: ListMediaI = {},
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListMedia, ListMediaResponse>(
      HttpType.Get,
      "/admin/list_all_media",
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
  updateTotp(@Body() form: UpdateTotp, @Inject() options?: RequestOptions) {
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
  getModlog(
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
   * @summary Search lemmy.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/search")
  @Tags("Miscellaneous")
  search(@Queries() form: SearchI, @Inject() options?: RequestOptions) {
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
  resolveObject(
    @Queries() form: ResolveObjectI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ResolveObject, ResolveObjectResponse>(
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
  createCommunity(
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
  getCommunity(
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
  editCommunity(
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
  listCommunities(
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
  followCommunity(
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
  getCommunityPendingFollowsCount(
    @Queries() form: GetCommunityPendingFollowsCountI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<
      GetCommunityPendingFollowsCount,
      GetCommunityPendingFollowsCountResponse
    >(HttpType.Get, "/community/pending_follows/count", form, options);
  }

  /**
   * @summary Get a community's pending followers.
   */
  @Security("bearerAuth")
  @Get("/community/pending_follows/list")
  @Tags("Community")
  listCommunityPendingFollows(
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
  approveCommunityPendingFollow(
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
  blockCommunity(
    @Body() form: BlockCommunity,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<BlockCommunity, BlockCommunityResponse>(
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
  @Post("/community/delete")
  @Tags("Community")
  deleteCommunity(
    @Body() form: DeleteCommunity,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeleteCommunity, CommunityResponse>(
      HttpType.Post,
      "/community/delete",
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
  hideCommunity(
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
  removeCommunity(
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
  transferCommunity(
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
  banFromCommunity(
    @Body() form: BanFromCommunity,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<BanFromCommunity, BanFromCommunityResponse>(
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
  addModToCommunity(
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
  getRandomCommunity(
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
   * @summary Create a post.
   */
  @Security("bearerAuth")
  @Post("/post")
  @Tags("Post")
  createPost(@Body() form: CreatePost, @Inject() options?: RequestOptions) {
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
  getPost(@Queries() form: GetPostI = {}, @Inject() options?: RequestOptions) {
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
  editPost(@Body() form: EditPost, @Inject() options?: RequestOptions) {
    return this.#wrapper<EditPost, PostResponse>(
      HttpType.Put,
      "/post",
      form,
      options,
    );
  }

  /**
   * @summary Delete a post.
   */
  @Security("bearerAuth")
  @Post("/post/delete")
  @Tags("Post")
  deletePost(@Body() form: DeletePost, @Inject() options?: RequestOptions) {
    return this.#wrapper<DeletePost, PostResponse>(
      HttpType.Post,
      "/post/delete",
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
  removePost(@Body() form: RemovePost, @Inject() options?: RequestOptions) {
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
  markPostAsRead(
    @Body() form: MarkPostAsRead,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<MarkPostAsRead, SuccessResponse>(
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
  markManyPostAsRead(
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
  hidePost(@Body() form: HidePost, @Inject() options?: RequestOptions) {
    return this.#wrapper<HidePost, SuccessResponse>(
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
  lockPost(@Body() form: LockPost, @Inject() options?: RequestOptions) {
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
  featurePost(@Body() form: FeaturePost, @Inject() options?: RequestOptions) {
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
  getPosts(
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
  likePost(@Body() form: CreatePostLike, @Inject() options?: RequestOptions) {
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
  listPostLikes(
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
  savePost(@Body() form: SavePost, @Inject() options?: RequestOptions) {
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
  createPostReport(
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
  resolvePostReport(
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
  getSiteMetadata(
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
  createComment(
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
  editComment(@Body() form: EditComment, @Inject() options?: RequestOptions) {
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
  @Post("/comment/delete")
  @Tags("Comment")
  deleteComment(
    @Body() form: DeleteComment,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeleteComment, CommentResponse>(
      HttpType.Post,
      "/comment/delete",
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
  removeComment(
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
   * @summary Mark a comment as read.
   */
  @Security("bearerAuth")
  @Post("/comment/mark_as_read")
  @Tags("Comment")
  markCommentReplyAsRead(
    @Body() form: MarkCommentReplyAsRead,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<MarkCommentReplyAsRead, SuccessResponse>(
      HttpType.Post,
      "/comment/mark_as_read",
      form,
      options,
    );
  }

  /**
   * @summary Like / vote on a comment.
   */
  @Security("bearerAuth")
  @Post("/comment/like")
  @Tags("Comment")
  likeComment(
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
  listCommentLikes(
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
  saveComment(@Body() form: SaveComment, @Inject() options?: RequestOptions) {
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
  distinguishComment(
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
  getComments(
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
  getCommentsSlim(
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
  getComment(@Queries() form: GetCommentI, @Inject() options?: RequestOptions) {
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
  createCommentReport(
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
  resolveCommentReport(
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
  createPrivateMessage(
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
  editPrivateMessage(
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
  @Post("/private_message/delete")
  @Tags("PrivateMessage")
  deletePrivateMessage(
    @Body() form: DeletePrivateMessage,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeletePrivateMessage, PrivateMessageResponse>(
      HttpType.Post,
      "/private_message/delete",
      form,
      options,
    );
  }

  /**
   * @summary Mark a private message as read.
   */
  @Security("bearerAuth")
  @Post("/private_message/mark_as_read")
  @Tags("PrivateMessage")
  markPrivateMessageAsRead(
    @Body() form: MarkPrivateMessageAsRead,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<MarkPrivateMessageAsRead, PrivateMessageResponse>(
      HttpType.Post,
      "/private_message/mark_as_read",
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
  createPrivateMessageReport(
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
  resolvePrivateMessageReport(
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
  register(@Body() form: Register, @Inject() options?: RequestOptions) {
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
  login(@Body() form: Login, @Inject() options?: RequestOptions) {
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
  logout(@Inject() options?: RequestOptions) {
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
  getPersonDetails(
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
  listPersonContent(
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
   * @summary Mark a person mention as read.
   */
  @Security("bearerAuth")
  @Post("/account/mention/comment/mark_as_read")
  @Tags("Account", "Person")
  markCommentMentionAsRead(
    @Body() form: MarkPersonCommentMentionAsRead,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<MarkPersonCommentMentionAsRead, SuccessResponse>(
      HttpType.Post,
      "/account/mention/comment/mark_as_read",
      form,
      options,
    );
  }

  /**
   * @summary Mark a person post body mention as read.
   */
  @Security("bearerAuth")
  @Post("/account/mention/post/mark_as_read")
  @Tags("Account", "Post")
  markPostMentionAsRead(
    @Body() form: MarkPersonPostMentionAsRead,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<MarkPersonPostMentionAsRead, SuccessResponse>(
      HttpType.Post,
      "/account/mention/post/mark_as_read",
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
  banPerson(@Body() form: BanPerson, @Inject() options?: RequestOptions) {
    return this.#wrapper<BanPerson, BanPersonResponse>(
      HttpType.Post,
      "/admin/ban",
      form,
      options,
    );
  }

  /**
   * @summary Get a list of banned users.
   */
  @Security("bearerAuth")
  @Get("/admin/banned")
  @Tags("Admin", "Miscellaneous")
  getBannedPersons(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, BannedPersonsResponse>(
      HttpType.Get,
      "/admin/banned",
      {},
      options,
    );
  }

  /**
   * @summary Block a person.
   */
  @Security("bearerAuth")
  @Post("/account/block/person")
  @Tags("Account")
  blockPerson(@Body() form: BlockPerson, @Inject() options?: RequestOptions) {
    return this.#wrapper<BlockPerson, BlockPersonResponse>(
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
  getCaptcha(@Inject() options?: RequestOptions) {
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
  @Post("/account/delete")
  @Tags("Account")
  deleteAccount(
    @Body() form: DeleteAccount,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeleteAccount, SuccessResponse>(
      HttpType.Post,
      "/account/delete",
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
  passwordReset(
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
  passwordChangeAfterReset(
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
   * @summary Mark all replies as read.
   */
  @Security("bearerAuth")
  @Post("/account/mark_as_read/all")
  @Tags("Account")
  markAllNotificationsAsRead(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Post,
      "/account/mark_as_read/all",
      {},
      options,
    );
  }

  /**
   * @summary Save your user settings.
   */
  @Security("bearerAuth")
  @Put("/account/settings/save")
  @Tags("Account")
  saveUserSettings(
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
  changePassword(
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
  getReportCount(
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
  @Get("/account/unread_count")
  @Tags("Account")
  getUnreadCount(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, GetUnreadCountResponse>(
      HttpType.Get,
      "/account/unread_count",
      {},
      options,
    );
  }

  /**
   * @summary Get your inbox (replies, comment mentions, post mentions, and messages)
   */
  @Security("bearerAuth")
  @Get("/account/inbox")
  @Tags("Account")
  listInbox(@Queries() form: ListInboxI, @Inject() options?: RequestOptions) {
    return this.#wrapper<ListInbox, ListInboxResponse>(
      HttpType.Get,
      "/account/inbox",
      form,
      options,
    );
  }

  /**
   * @summary Verify your email
   */
  @Post("/account/auth/verify_email")
  @Tags("Account")
  verifyEmail(@Body() form: VerifyEmail, @Inject() options?: RequestOptions) {
    return this.#wrapper<VerifyEmail, SuccessResponse>(
      HttpType.Post,
      "/account/auth/verify_email",
      form,
      options,
    );
  }

  /**
   * @summary List your saved content.
   */
  @Security("bearerAuth")
  @Get("/account/auth/saved")
  @Tags("Account")
  listPersonSaved(
    @Queries() form: ListPersonSavedI,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListPersonSaved, ListPersonSavedResponse>(
      HttpType.Get,
      "/account/auth/saved",
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
  addAdmin(@Body() form: AddAdmin, @Inject() options?: RequestOptions) {
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
  getUnreadRegistrationApplicationCount(@Inject() options?: RequestOptions) {
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
  listRegistrationApplications(
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
  approveRegistrationApplication(
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
  getRegistrationApplication(
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
  purgePerson(@Body() form: PurgePerson, @Inject() options?: RequestOptions) {
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
  purgeCommunity(
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
  purgePost(@Body() form: PurgePost, @Inject() options?: RequestOptions) {
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
  purgeComment(@Body() form: PurgeComment, @Inject() options?: RequestOptions) {
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
  createCustomEmoji(
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
  editCustomEmoji(
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
  deleteCustomEmoji(
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
  listCustomEmojis(
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
  createTagline(
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
  editTagline(@Body() form: UpdateTagline, @Inject() options?: RequestOptions) {
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
  @Post("/admin/tagline/delete")
  @Tags("Admin", "Tagline")
  deleteTagline(
    @Body() form: DeleteTagline,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeleteTagline, SuccessResponse>(
      HttpType.Post,
      "/admin/tagline/delete",
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
  listTaglines(
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
   * @summary Create a community tag.
   */
  @Security("bearerAuth")
  @Post("/community/post_tag")
  @Tags("Community")
  createCommunityTag(
    @Body() form: CreateCommunityTag,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<CreateCommunityTag, CommunityTagResponse>(
      HttpType.Post,
      "/community/post_tag",
      form,
      options,
    );
  }

  /**
   * @summary Update a community tag.
   */
  @Security("bearerAuth")
  @Put("/community/post_tag")
  @Tags("Community")
  updateCommunityTag(
    @Body() form: UpdateCommunityTag,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<UpdateCommunityTag, CommunityTagResponse>(
      HttpType.Put,
      "/community/post_tag",
      form,
      options,
    );
  }

  /**
   * @summary List community tags.
   */
  @Security("bearerAuth")
  @Security({})
  @Get("/community/post_tag/list")
  @Tags("Community")
  listCommunityTags(
    @Queries() form: ListCommunityTags,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<ListCommunityTags, ListCommunityTagsResponse>(
      HttpType.Get,
      "/community/post_tag/list",
      form,
      options,
    );
  }

  /**
   * @summary Delete a community tag.
   */
  @Security("bearerAuth")
  @Post("/community/post_tag")
  @Tags("Community")
  deleteCommunityTag(
    @Body() form: DeleteCommunityTag,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeleteCommunityTag, CommunityTagResponse>(
      HttpType.Delete,
      "/community/post_tag",
      form,
      options,
    );
  }

  /**
   * @summary Update post tags.
   */
  @Security("bearerAuth")
  @Put("/post/tags")
  @Tags("Post")
  updatePostTags(
    @Body() form: UpdatePostTags,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<UpdatePostTags, PostResponse>(
      HttpType.Put,
      "/post/tags",
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
  createOAuthProvider(
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
  editOAuthProvider(
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
  @Post("/oauth_provider/delete")
  @Tags("Miscellaneous", "OAuth")
  deleteOAuthProvider(
    @Body() form: DeleteOAuthProvider,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<DeleteOAuthProvider, SuccessResponse>(
      HttpType.Post,
      "/oauth_provider/delete",
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
  authenticateWithOAuth(
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
  getFederatedInstances(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, GetFederatedInstancesResponse>(
      HttpType.Get,
      "/federated_instances",
      {},
      options,
    );
  }

  /**
   * @summary List user reports.
   */
  @Security("bearerAuth")
  @Get("/report/list")
  @Tags("Admin")
  listReports(
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
   * @summary Block an instance as user.
   */
  @Security("bearerAuth")
  @Post("/account/block/instance")
  @Tags("Account")
  userBlockInstance(
    @Body() form: UserBlockInstanceParams,
    @Inject() options?: RequestOptions,
  ) {
    return this.#wrapper<UserBlockInstanceParams, SuccessResponse>(
      HttpType.Post,
      "/account/block/instance",
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
  adminBlockInstance(
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
  adminAllowInstance(
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
  ): Promise<SuccessResponse> {
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
  ): Promise<SuccessResponse> {
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
    @UploadedFile() image: UploadImage,
    @Inject() options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#upload("/community/icon", image, options);
  }

  /**
   * @summary Delete the community icon.
   */
  @Security("bearerAuth")
  @Delete("/community/icon")
  @Tags("Community", "Media")
  async deleteCommunityIcon(
    @Inject() options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Delete,
      "/community/icon",
      {},
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
    @UploadedFile() image: UploadImage,
    @Inject() options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#upload("/community/banner", image, options);
  }

  /**
   * @summary Delete the community banner.
   */
  @Security("bearerAuth")
  @Delete("/community/banner")
  @Tags("Community", "Media")
  async deleteCommunityBanner(
    @Inject() options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Delete,
      "/community/banner",
      {},
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
  ): Promise<SuccessResponse> {
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
  ): Promise<SuccessResponse> {
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
   * @summary Delete a pictrs image
   */
  @Security("bearerAuth")
  @Delete("/image")
  @Tags("Media")
  async deleteImage(
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
   * @summary Health check for image functionality
   */
  @Get("image/health")
  @Tags("Media")
  async imageHealth(@Inject() options?: RequestOptions) {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Get,
      "/image/health",
      {},
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
      throw new Error(response.statusText);
    }

    if (!response.ok) {
      throw new Error(json["error"] ?? response.statusText);
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
      new Blob([image], { type: "image/jpeg" }),
      "image.jpg",
    );
  }

  return formData;
}
