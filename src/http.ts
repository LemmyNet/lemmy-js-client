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
import { VerifyEmail } from "./types/VerifyEmail";
import { UploadImage, VERSION } from "./other_types";
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
import { CommunityId } from "./types/CommunityId";
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
export class LemmyHttp {
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
    this.#apiUrl = `${baseUrl.replace(/\/+$/, "")}/api/${VERSION}`;

    if (options?.headers) {
      this.#headers = options.headers;
    }
    if (options?.fetchFunction) {
      this.#fetchFunction = options.fetchFunction;
    }
  }

  /**
   * Gets the site, and your user data.
   *
   * `HTTP.GET /site`
   */
  getSite(options?: RequestOptions) {
    return this.#wrapper<object, GetSiteResponse>(
      HttpType.Get,
      "/site",
      {},
      options,
    );
  }

  /**
   * Create your site.
   *
   * `HTTP.POST /site`
   */
  createSite(form: CreateSite, options?: RequestOptions) {
    return this.#wrapper<CreateSite, SiteResponse>(
      HttpType.Post,
      "/site",
      form,
      options,
    );
  }

  /**
   * Edit your site.
   *
   * `HTTP.PUT /site`
   */
  editSite(form: EditSite, options?: RequestOptions) {
    return this.#wrapper<EditSite, SiteResponse>(
      HttpType.Put,
      "/site",
      form,
      options,
    );
  }

  /**
   * Leave the Site admins.
   *
   * `HTTP.POST /admin/leave`
   */
  leaveAdmin(options?: RequestOptions) {
    return this.#wrapper<object, GetSiteResponse>(
      HttpType.Post,
      "/admin/leave",
      {},
      options,
    );
  }

  /**
   * Generate a TOTP / two-factor secret.
   *
   * Afterwards you need to call `/account/auth/totp/update` with a valid token to enable it.
   *
   * `HTTP.POST /account/auth/totp/generate`
   */
  generateTotpSecret(options?: RequestOptions) {
    return this.#wrapper<object, GenerateTotpSecretResponse>(
      HttpType.Post,
      "/account/auth/totp/generate",
      {},
      options,
    );
  }

  /**
   * Get data of current user.
   *
   * `HTTP.GET /account`
   */
  getMyUser(options?: RequestOptions) {
    return this.#wrapper<object, MyUserInfo>(
      HttpType.Get,
      "/account",
      {},
      options,
    );
  }

  /**
   * Export a backup of your user settings, including your saved content,
   * followed communities, and blocks.
   *
   * `HTTP.GET /account/settings/export`
   */
  exportSettings(options?: RequestOptions) {
    return this.#wrapper<object, string>(
      HttpType.Get,
      "/account/settings/export",
      {},
      options,
    );
  }

  /**
   * Import a backup of your user settings.
   *
   * `HTTP.POST /account/settings/import`
   */
  importSettings(form: any, options?: RequestOptions) {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Post,
      "/account/settings/import",
      form,
      options,
    );
  }

  /**
   * List login tokens for your user
   *
   * `HTTP.GET /account/list_logins`
   */
  listLogins(options?: RequestOptions) {
    return this.#wrapper<object, LoginToken[]>(
      HttpType.Get,
      "/account/list_logins",
      {},
      options,
    );
  }

  /**
   * Returns an error message if your auth token is invalid
   *
   * `HTTP.GET /account/validate_auth`
   */
  validateAuth(options?: RequestOptions) {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Get,
      "/account/validate_auth",
      {},
      options,
    );
  }

  /**
   * List all the media for your user
   *
   * `HTTP.GET /account/list_media`
   */
  listMedia(form: ListMedia = {}, options?: RequestOptions) {
    return this.#wrapper<ListMedia, ListMediaResponse>(
      HttpType.Get,
      "/account/list_media",
      form,
      options,
    );
  }

  /**
   * List all the media known to your instance.
   *
   * `HTTP.GET /admin/list_all_media`
   */
  listAllMedia(form: ListMedia = {}, options?: RequestOptions) {
    return this.#wrapper<ListMedia, ListMediaResponse>(
      HttpType.Get,
      "/admin/list_all_media",
      form,
      options,
    );
  }

  /**
   * Enable / Disable TOTP / two-factor authentication.
   *
   * To enable, you need to first call `/account/auth/totp/generate` and then pass a valid token to this.
   *
   * Disabling is only possible if 2FA was previously enabled. Again it is necessary to pass a valid token.
   *
   * `HTTP.POST /account/auth/totp/update`
   */
  updateTotp(form: UpdateTotp, options?: RequestOptions) {
    return this.#wrapper<UpdateTotp, UpdateTotpResponse>(
      HttpType.Post,
      "/account/auth/totp/update",
      form,
      options,
    );
  }

  /**
   * Get the modlog.
   *
   * `HTTP.GET /modlog`
   */
  getModlog(form: GetModlog = {}, options?: RequestOptions) {
    return this.#wrapper<GetModlog, GetModlogResponse>(
      HttpType.Get,
      "/modlog",
      form,
      options,
    );
  }

  /**
   * Search lemmy.
   *
   * `HTTP.GET /search`
   */
  search(form: Search, options?: RequestOptions) {
    return this.#wrapper<Search, SearchResponse>(
      HttpType.Get,
      "/search",
      form,
      options,
    );
  }

  /**
   * Fetch a non-local / federated object.
   *
   * `HTTP.GET /resolve_object`
   */
  resolveObject(form: ResolveObject, options?: RequestOptions) {
    return this.#wrapper<ResolveObject, ResolveObjectResponse>(
      HttpType.Get,
      "/resolve_object",
      form,
      options,
    );
  }

  /**
   * Create a new community.
   *
   * `HTTP.POST /community`
   */
  createCommunity(form: CreateCommunity, options?: RequestOptions) {
    return this.#wrapper<CreateCommunity, CommunityResponse>(
      HttpType.Post,
      "/community",
      form,
      options,
    );
  }

  /**
   * Get / fetch a community.
   *
   * `HTTP.GET /community`
   */
  getCommunity(form: GetCommunity = {}, options?: RequestOptions) {
    return this.#wrapper<GetCommunity, GetCommunityResponse>(
      HttpType.Get,
      "/community",
      form,
      options,
    );
  }

  /**
   * Edit a community.
   *
   * `HTTP.PUT /community`
   */
  editCommunity(form: EditCommunity, options?: RequestOptions) {
    return this.#wrapper<EditCommunity, CommunityResponse>(
      HttpType.Put,
      "/community",
      form,
      options,
    );
  }

  /**
   * List communities, with various filters.
   *
   * `HTTP.GET /community/list`
   */
  listCommunities(form: ListCommunities = {}, options?: RequestOptions) {
    return this.#wrapper<ListCommunities, ListCommunitiesResponse>(
      HttpType.Get,
      "/community/list",
      form,
      options,
    );
  }

  /**
   * Follow / subscribe to a community.
   *
   * `HTTP.POST /community/follow`
   */
  followCommunity(form: FollowCommunity, options?: RequestOptions) {
    return this.#wrapper<FollowCommunity, CommunityResponse>(
      HttpType.Post,
      "/community/follow",
      form,
      options,
    );
  }

  getCommunityPendingFollowsCount(
    community_id: CommunityId,
    options?: RequestOptions,
  ) {
    const form: GetCommunityPendingFollowsCount = { community_id };
    return this.#wrapper<
      GetCommunityPendingFollowsCount,
      GetCommunityPendingFollowsCountResponse
    >(HttpType.Get, "/community/pending_follows/count", form, options);
  }

  listCommunityPendingFollows(
    form: ListCommunityPendingFollows,
    options?: RequestOptions,
  ) {
    return this.#wrapper<
      ListCommunityPendingFollows,
      ListCommunityPendingFollowsResponse
    >(HttpType.Get, "/community/pending_follows/list", form, options);
  }

  approveCommunityPendingFollow(
    form: ApproveCommunityPendingFollower,
    options?: RequestOptions,
  ) {
    return this.#wrapper<ApproveCommunityPendingFollower, SuccessResponse>(
      HttpType.Post,
      "/community/pending_follows/approve",
      form,
      options,
    );
  }

  /**
   * Block a community.
   *
   * `HTTP.POST /account/block/community`
   */
  blockCommunity(form: BlockCommunity, options?: RequestOptions) {
    return this.#wrapper<BlockCommunity, BlockCommunityResponse>(
      HttpType.Post,
      "/account/block/community",
      form,
      options,
    );
  }

  /**
   * Delete a community.
   *
   * `HTTP.POST /community/delete`
   */
  deleteCommunity(form: DeleteCommunity, options?: RequestOptions) {
    return this.#wrapper<DeleteCommunity, CommunityResponse>(
      HttpType.Post,
      "/community/delete",
      form,
      options,
    );
  }

  /**
   * Hide a community from public / "All" view. Admins only.
   *
   * `HTTP.PUT /community/hide`
   */
  hideCommunity(form: HideCommunity, options?: RequestOptions) {
    return this.#wrapper<HideCommunity, SuccessResponse>(
      HttpType.Put,
      "/community/hide",
      form,
      options,
    );
  }

  /**
   * A moderator remove for a community.
   *
   * `HTTP.POST /community/remove`
   */
  removeCommunity(form: RemoveCommunity, options?: RequestOptions) {
    return this.#wrapper<RemoveCommunity, CommunityResponse>(
      HttpType.Post,
      "/community/remove",
      form,
      options,
    );
  }

  /**
   * Transfer your community to an existing moderator.
   *
   * `HTTP.POST /community/transfer`
   */
  transferCommunity(form: TransferCommunity, options?: RequestOptions) {
    return this.#wrapper<TransferCommunity, GetCommunityResponse>(
      HttpType.Post,
      "/community/transfer",
      form,
      options,
    );
  }

  /**
   * Ban a user from a community.
   *
   * `HTTP.POST /community/ban_user`
   */
  banFromCommunity(form: BanFromCommunity, options?: RequestOptions) {
    return this.#wrapper<BanFromCommunity, BanFromCommunityResponse>(
      HttpType.Post,
      "/community/ban_user",
      form,
      options,
    );
  }

  /**
   * Add a moderator to your community.
   *
   * `HTTP.POST /community/mod`
   */
  addModToCommunity(form: AddModToCommunity, options?: RequestOptions) {
    return this.#wrapper<AddModToCommunity, AddModToCommunityResponse>(
      HttpType.Post,
      "/community/mod",
      form,
      options,
    );
  }

  /**
   * Get a random community.
   *
   * `HTTP.GET /community/random`
   */
  getRandomCommunity(form: GetRandomCommunity, options?: RequestOptions) {
    return this.#wrapper<GetRandomCommunity, CommunityResponse>(
      HttpType.Get,
      "/community/random",
      form,
      options,
    );
  }

  /**
   * Create a post.
   *
   * `HTTP.POST /post`
   */
  createPost(form: CreatePost, options?: RequestOptions) {
    return this.#wrapper<CreatePost, PostResponse>(
      HttpType.Post,
      "/post",
      form,
      options,
    );
  }

  /**
   * Get / fetch a post.
   *
   * `HTTP.GET /post`
   */
  getPost(form: GetPost = {}, options?: RequestOptions) {
    return this.#wrapper<GetPost, GetPostResponse>(
      HttpType.Get,
      "/post",
      form,
      options,
    );
  }

  /**
   * Edit a post.
   *
   * `HTTP.PUT /post`
   */
  editPost(form: EditPost, options?: RequestOptions) {
    return this.#wrapper<EditPost, PostResponse>(
      HttpType.Put,
      "/post",
      form,
      options,
    );
  }

  /**
   * Delete a post.
   *
   * `HTTP.POST /post/delete`
   */
  deletePost(form: DeletePost, options?: RequestOptions) {
    return this.#wrapper<DeletePost, PostResponse>(
      HttpType.Post,
      "/post/delete",
      form,
      options,
    );
  }

  /**
   * A moderator remove for a post.
   *
   * `HTTP.POST /post/remove`
   */
  removePost(form: RemovePost, options?: RequestOptions) {
    return this.#wrapper<RemovePost, PostResponse>(
      HttpType.Post,
      "/post/remove",
      form,
      options,
    );
  }

  /**
   * Mark a post as read.
   *
   * `HTTP.POST /post/mark_as_read`
   */
  markPostAsRead(form: MarkPostAsRead, options?: RequestOptions) {
    return this.#wrapper<MarkPostAsRead, SuccessResponse>(
      HttpType.Post,
      "/post/mark_as_read",
      form,
      options,
    );
  }

  /**
   * Mark multiple posts as read.
   *
   * `HTTP.POST /post/mark_as_read/many`
   */
  markManyPostAsRead(form: MarkManyPostsAsRead, options?: RequestOptions) {
    return this.#wrapper<MarkManyPostsAsRead, SuccessResponse>(
      HttpType.Post,
      "/post/mark_as_read/many",
      form,
      options,
    );
  }

  /**
   * Hide a post from list views.
   *
   * `HTTP.POST /post/hide`
   */
  hidePost(form: HidePost, options?: RequestOptions) {
    return this.#wrapper<HidePost, SuccessResponse>(
      HttpType.Post,
      "/post/hide",
      form,
      options,
    );
  }

  /**
   * A moderator can lock a post ( IE disable new comments ).
   *
   * `HTTP.POST /post/lock`
   */
  lockPost(form: LockPost, options?: RequestOptions) {
    return this.#wrapper<LockPost, PostResponse>(
      HttpType.Post,
      "/post/lock",
      form,
      options,
    );
  }

  /**
   * A moderator can feature a community post ( IE stick it to the top of a community ).
   *
   * `HTTP.POST /post/feature`
   */
  featurePost(form: FeaturePost, options?: RequestOptions) {
    return this.#wrapper<FeaturePost, PostResponse>(
      HttpType.Post,
      "/post/feature",
      form,
      options,
    );
  }

  /**
   * Get / fetch posts, with various filters.
   *
   * `HTTP.GET /post/list`
   */
  getPosts(form: GetPosts = {}, options?: RequestOptions) {
    return this.#wrapper<GetPosts, GetPostsResponse>(
      HttpType.Get,
      "/post/list",
      form,
      options,
    );
  }

  /**
   * Like / vote on a post.
   *
   * `HTTP.POST /post/like`
   */
  likePost(form: CreatePostLike, options?: RequestOptions) {
    return this.#wrapper<CreatePostLike, PostResponse>(
      HttpType.Post,
      "/post/like",
      form,
      options,
    );
  }

  /**
   * List a post's likes. Admin-only.
   *
   * `HTTP.GET /post/like/list`
   */
  listPostLikes(form: ListPostLikes, options?: RequestOptions) {
    return this.#wrapper<ListPostLikes, ListPostLikesResponse>(
      HttpType.Get,
      "/post/like/list",
      form,
      options,
    );
  }

  /**
   * Save a post.
   *
   * `HTTP.PUT /post/save`
   */
  savePost(form: SavePost, options?: RequestOptions) {
    return this.#wrapper<SavePost, PostResponse>(
      HttpType.Put,
      "/post/save",
      form,
      options,
    );
  }

  /**
   * Report a post.
   *
   * `HTTP.POST /post/report`
   */
  createPostReport(form: CreatePostReport, options?: RequestOptions) {
    return this.#wrapper<CreatePostReport, PostReportResponse>(
      HttpType.Post,
      "/post/report",
      form,
      options,
    );
  }

  /**
   * Resolve a post report. Only a mod can do this.
   *
   * `HTTP.PUT /post/report/resolve`
   */
  resolvePostReport(form: ResolvePostReport, options?: RequestOptions) {
    return this.#wrapper<ResolvePostReport, PostReportResponse>(
      HttpType.Put,
      "/post/report/resolve",
      form,
      options,
    );
  }

  /**
   * Fetch metadata for any given site.
   *
   * `HTTP.GET /post/site_metadata`
   */
  getSiteMetadata(form: GetSiteMetadata, options?: RequestOptions) {
    return this.#wrapper<GetSiteMetadata, GetSiteMetadataResponse>(
      HttpType.Get,
      "/post/site_metadata",
      form,
      options,
    );
  }

  /**
   * Create a comment.
   *
   * `HTTP.POST /comment`
   */
  createComment(form: CreateComment, options?: RequestOptions) {
    return this.#wrapper<CreateComment, CommentResponse>(
      HttpType.Post,
      "/comment",
      form,
      options,
    );
  }

  /**
   * Edit a comment.
   *
   * `HTTP.PUT /comment`
   */
  editComment(form: EditComment, options?: RequestOptions) {
    return this.#wrapper<EditComment, CommentResponse>(
      HttpType.Put,
      "/comment",
      form,
      options,
    );
  }

  /**
   * Delete a comment.
   *
   * `HTTP.POST /comment/delete`
   */
  deleteComment(form: DeleteComment, options?: RequestOptions) {
    return this.#wrapper<DeleteComment, CommentResponse>(
      HttpType.Post,
      "/comment/delete",
      form,
      options,
    );
  }

  /**
   * A moderator remove for a comment.
   *
   * `HTTP.POST /comment/remove`
   */
  removeComment(form: RemoveComment, options?: RequestOptions) {
    return this.#wrapper<RemoveComment, CommentResponse>(
      HttpType.Post,
      "/comment/remove",
      form,
      options,
    );
  }

  /**
   * Mark a comment as read.
   *
   * `HTTP.POST /comment/mark_as_read`
   */
  markCommentReplyAsRead(
    form: MarkCommentReplyAsRead,
    options?: RequestOptions,
  ) {
    return this.#wrapper<MarkCommentReplyAsRead, SuccessResponse>(
      HttpType.Post,
      "/comment/mark_as_read",
      form,
      options,
    );
  }

  /**
   * Like / vote on a comment.
   *
   * `HTTP.POST /comment/like`
   */
  likeComment(form: CreateCommentLike, options?: RequestOptions) {
    return this.#wrapper<CreateCommentLike, CommentResponse>(
      HttpType.Post,
      "/comment/like",
      form,
      options,
    );
  }

  /**
   * List a comment's likes. Admin-only.
   *
   * `HTTP.GET /comment/like/list`
   */
  listCommentLikes(form: ListCommentLikes, options?: RequestOptions) {
    return this.#wrapper<ListCommentLikes, ListCommentLikesResponse>(
      HttpType.Get,
      "/comment/like/list",
      form,
      options,
    );
  }

  /**
   * Save a comment.
   *
   * `HTTP.PUT /comment/save`
   */
  saveComment(form: SaveComment, options?: RequestOptions) {
    return this.#wrapper<SaveComment, CommentResponse>(
      HttpType.Put,
      "/comment/save",
      form,
      options,
    );
  }

  /**
   * Distinguishes a comment (speak as moderator)
   *
   * `HTTP.POST /comment/distinguish`
   */
  distinguishComment(form: DistinguishComment, options?: RequestOptions) {
    return this.#wrapper<DistinguishComment, CommentResponse>(
      HttpType.Post,
      "/comment/distinguish",
      form,
      options,
    );
  }

  /**
   * Get / fetch comments.
   *
   * `HTTP.GET /comment/list`
   */
  getComments(form: GetComments = {}, options?: RequestOptions) {
    return this.#wrapper<GetComments, GetCommentsResponse>(
      HttpType.Get,
      "/comment/list",
      form,
      options,
    );
  }

  /**
   * Get / fetch comment.
   *
   * `HTTP.GET /comment`
   */
  getComment(form: GetComment, options?: RequestOptions) {
    return this.#wrapper<GetComment, CommentResponse>(
      HttpType.Get,
      "/comment",
      form,
      options,
    );
  }

  /**
   * Report a comment.
   *
   * `HTTP.POST /comment/report`
   */
  createCommentReport(form: CreateCommentReport, options?: RequestOptions) {
    return this.#wrapper<CreateCommentReport, CommentReportResponse>(
      HttpType.Post,
      "/comment/report",
      form,
      options,
    );
  }

  /**
   * Resolve a comment report. Only a mod can do this.
   *
   * `HTTP.PUT /comment/report/resolve`
   */
  resolveCommentReport(form: ResolveCommentReport, options?: RequestOptions) {
    return this.#wrapper<ResolveCommentReport, CommentReportResponse>(
      HttpType.Put,
      "/comment/report/resolve",
      form,
      options,
    );
  }

  /**
   * Create a private message.
   *
   * `HTTP.POST /private_message`
   */
  createPrivateMessage(form: CreatePrivateMessage, options?: RequestOptions) {
    return this.#wrapper<CreatePrivateMessage, PrivateMessageResponse>(
      HttpType.Post,
      "/private_message",
      form,
      options,
    );
  }

  /**
   * Edit a private message.
   *
   * `HTTP.PUT /private_message`
   */
  editPrivateMessage(form: EditPrivateMessage, options?: RequestOptions) {
    return this.#wrapper<EditPrivateMessage, PrivateMessageResponse>(
      HttpType.Put,
      "/private_message",
      form,
      options,
    );
  }

  /**
   * Delete a private message.
   *
   * `HTTP.POST /private_message/delete`
   */
  deletePrivateMessage(form: DeletePrivateMessage, options?: RequestOptions) {
    return this.#wrapper<DeletePrivateMessage, PrivateMessageResponse>(
      HttpType.Post,
      "/private_message/delete",
      form,
      options,
    );
  }

  /**
   * Mark a private message as read.
   *
   * `HTTP.POST /private_message/mark_as_read`
   */
  markPrivateMessageAsRead(
    form: MarkPrivateMessageAsRead,
    options?: RequestOptions,
  ) {
    return this.#wrapper<MarkPrivateMessageAsRead, PrivateMessageResponse>(
      HttpType.Post,
      "/private_message/mark_as_read",
      form,
      options,
    );
  }

  /**
   * Create a report for a private message.
   *
   * `HTTP.POST /private_message/report`
   */
  createPrivateMessageReport(
    form: CreatePrivateMessageReport,
    options?: RequestOptions,
  ) {
    return this.#wrapper<
      CreatePrivateMessageReport,
      PrivateMessageReportResponse
    >(HttpType.Post, "/private_message/report", form, options);
  }

  /**
   * Resolve a report for a private message.
   *
   * `HTTP.PUT /private_message/report/resolve`
   */
  resolvePrivateMessageReport(
    form: ResolvePrivateMessageReport,
    options?: RequestOptions,
  ) {
    return this.#wrapper<
      ResolvePrivateMessageReport,
      PrivateMessageReportResponse
    >(HttpType.Put, "/private_message/report/resolve", form, options);
  }

  /**
   * Register a new user.
   *
   * `HTTP.POST /account/auth/register`
   */
  register(form: Register, options?: RequestOptions) {
    return this.#wrapper<Register, LoginResponse>(
      HttpType.Post,
      "/account/auth/register",
      form,
      options,
    );
  }

  /**
   * Log into lemmy.
   *
   * `HTTP.POST /account/auth/login`
   */
  login(form: Login, options?: RequestOptions) {
    return this.#wrapper<Login, LoginResponse>(
      HttpType.Post,
      "/account/auth/login",
      form,
      options,
    );
  }

  /**
   * Invalidate the currently used auth token.
   *
   * `HTTP.POST /account/auth/logout`
   */
  logout(options?: RequestOptions) {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Post,
      "/account/auth/logout",
      {},
      options,
    );
  }

  /**
   * Get the details for a person.
   *
   * `HTTP.GET /person`
   */
  getPersonDetails(form: GetPersonDetails = {}, options?: RequestOptions) {
    return this.#wrapper<GetPersonDetails, GetPersonDetailsResponse>(
      HttpType.Get,
      "/person",
      form,
      options,
    );
  }

  /**
   * List the content for a person.
   *
   * `HTTP.GET /person/content`
   */
  listPersonContent(form: ListPersonContent = {}, options?: RequestOptions) {
    return this.#wrapper<ListPersonContent, ListPersonContentResponse>(
      HttpType.Get,
      "/person/content",
      form,
      options,
    );
  }

  /**
   * Mark a person mention as read.
   *
   * `HTTP.POST /account/mention/comment/mark_as_read`
   */
  markCommentMentionAsRead(
    form: MarkPersonCommentMentionAsRead,
    options?: RequestOptions,
  ) {
    return this.#wrapper<MarkPersonCommentMentionAsRead, SuccessResponse>(
      HttpType.Post,
      "/account/mention/comment/mark_as_read",
      form,
      options,
    );
  }

  /**
   * Mark a person post body mention as read.
   *
   * `HTTP.POST /account/mention/post/mark_as_read`
   */
  markPostMentionAsRead(
    form: MarkPersonPostMentionAsRead,
    options?: RequestOptions,
  ) {
    return this.#wrapper<MarkPersonPostMentionAsRead, SuccessResponse>(
      HttpType.Post,
      "/account/mention/post/mark_as_read",
      form,
      options,
    );
  }

  /**
   * Ban a person from your site.
   *
   * `HTTP.POST /admin/ban`
   */
  banPerson(form: BanPerson, options?: RequestOptions) {
    return this.#wrapper<BanPerson, BanPersonResponse>(
      HttpType.Post,
      "/admin/ban",
      form,
      options,
    );
  }

  /**
   * Get a list of banned users
   *
   * `HTTP.GET /admin/banned`
   */
  getBannedPersons(options?: RequestOptions) {
    return this.#wrapper<object, BannedPersonsResponse>(
      HttpType.Get,
      "/admin/banned",
      {},
      options,
    );
  }

  /**
   * Block a person.
   *
   * `HTTP.POST /account/block/person`
   */
  blockPerson(form: BlockPerson, options?: RequestOptions) {
    return this.#wrapper<BlockPerson, BlockPersonResponse>(
      HttpType.Post,
      "/account/block/person",
      form,
      options,
    );
  }

  /**
   * Fetch a Captcha.
   *
   * `HTTP.GET /account/auth/get_captcha`
   */
  getCaptcha(options?: RequestOptions) {
    return this.#wrapper<object, GetCaptchaResponse>(
      HttpType.Get,
      "/account/auth/get_captcha",
      {},
      options,
    );
  }

  /**
   * Delete your account.
   *
   * `HTTP.POST /account/delete`
   */
  deleteAccount(form: DeleteAccount, options?: RequestOptions) {
    return this.#wrapper<DeleteAccount, SuccessResponse>(
      HttpType.Post,
      "/account/delete",
      form,
      options,
    );
  }

  /**
   * Reset your password.
   *
   * `HTTP.POST /account/auth/password_reset`
   */
  passwordReset(form: PasswordReset, options?: RequestOptions) {
    return this.#wrapper<PasswordReset, SuccessResponse>(
      HttpType.Post,
      "/account/auth/password_reset",
      form,
      options,
    );
  }

  /**
   * Change your password from an email / token based reset.
   *
   * `HTTP.POST /account/auth/password_change`
   */
  passwordChangeAfterReset(
    form: PasswordChangeAfterReset,
    options?: RequestOptions,
  ) {
    return this.#wrapper<PasswordChangeAfterReset, SuccessResponse>(
      HttpType.Post,
      "/account/auth/password_change",
      form,
      options,
    );
  }

  /**
   * Mark all replies as read.
   *
   * `HTTP.POST /account/mark_as_read/all`
   */
  markAllNotificationsAsRead(options?: RequestOptions) {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Post,
      "/account/mark_as_read/all",
      {},
      options,
    );
  }

  /**
   * Save your user settings.
   *
   * `HTTP.PUT /account/settings/save`
   */
  saveUserSettings(form: SaveUserSettings, options?: RequestOptions) {
    return this.#wrapper<SaveUserSettings, SuccessResponse>(
      HttpType.Put,
      "/account/settings/save",
      form,
      options,
    );
  }

  /**
   * Change your user password.
   *
   * `HTTP.PUT /account/auth/change_password`
   */
  changePassword(form: ChangePassword, options?: RequestOptions) {
    return this.#wrapper<ChangePassword, LoginResponse>(
      HttpType.Put,
      "/account/auth/change_password",
      form,
      options,
    );
  }

  /**
   * Get counts for your reports
   *
   * `HTTP.GET /account/report_count`
   */
  getReportCount(form: GetReportCount, options?: RequestOptions) {
    return this.#wrapper<GetReportCount, GetReportCountResponse>(
      HttpType.Get,
      "/account/report_count",
      form,
      options,
    );
  }

  /**
   * Get your unread counts
   *
   * `HTTP.GET /account/unread_count`
   */
  getUnreadCount(options?: RequestOptions) {
    return this.#wrapper<object, GetUnreadCountResponse>(
      HttpType.Get,
      "/account/unread_count",
      {},
      options,
    );
  }

  /**
   * Get your inbox (replies, comment mentions, post mentions, and messages)
   *
   * `HTTP.GET /account/inbox`
   */
  listInbox(form: ListInbox, options?: RequestOptions) {
    return this.#wrapper<ListInbox, ListInboxResponse>(
      HttpType.Get,
      "/account/inbox",
      form,
      options,
    );
  }

  /**
   * Verify your email
   *
   * `HTTP.POST /account/auth/verify_email`
   */
  verifyEmail(form: VerifyEmail, options?: RequestOptions) {
    return this.#wrapper<VerifyEmail, SuccessResponse>(
      HttpType.Post,
      "/account/auth/verify_email",
      form,
      options,
    );
  }

  /**
   * List your saved content.
   *
   * `HTTP.GET /account/auth/saved`
   */
  listPersonSaved(form: ListPersonSaved, options?: RequestOptions) {
    return this.#wrapper<ListPersonSaved, ListPersonSavedResponse>(
      HttpType.Post,
      "/account/auth/saved",
      form,
      options,
    );
  }

  /**
   * Add an admin to your site.
   *
   * `HTTP.POST /admin/add`
   */
  addAdmin(form: AddAdmin, options?: RequestOptions) {
    return this.#wrapper<AddAdmin, AddAdminResponse>(
      HttpType.Post,
      "/admin/add",
      form,
      options,
    );
  }

  /**
   * Get the unread registration applications count.
   *
   * `HTTP.GET /admin/registration_application/count`
   */
  getUnreadRegistrationApplicationCount(options?: RequestOptions) {
    return this.#wrapper<object, GetUnreadRegistrationApplicationCountResponse>(
      HttpType.Get,
      "/admin/registration_application/count",
      {},
      options,
    );
  }

  /**
   * List the registration applications.
   *
   * `HTTP.GET /admin/registration_application/list`
   */
  listRegistrationApplications(
    form: ListRegistrationApplications,
    options?: RequestOptions,
  ) {
    return this.#wrapper<
      ListRegistrationApplications,
      ListRegistrationApplicationsResponse
    >(HttpType.Get, "/admin/registration_application/list", form, options);
  }

  /**
   * Approve a registration application
   *
   * `HTTP.PUT /admin/registration_application/approve`
   */
  approveRegistrationApplication(
    form: ApproveRegistrationApplication,
    options?: RequestOptions,
  ) {
    return this.#wrapper<
      ApproveRegistrationApplication,
      RegistrationApplicationResponse
    >(HttpType.Put, "/admin/registration_application/approve", form, options);
  }

  /**
   * Get the application a user submitted when they first registered their account
   *
   * `HTTP.GET /admin/registration_application`
   */
  getRegistrationApplication(
    form: GetRegistrationApplication,
    options?: RequestOptions,
  ) {
    return this.#wrapper<
      GetRegistrationApplication,
      RegistrationApplicationResponse
    >(HttpType.Get, "/admin/registration_application", form, options);
  }

  /**
   * Purge / Delete a person from the database.
   *
   * `HTTP.POST /admin/purge/person`
   */
  purgePerson(form: PurgePerson, options?: RequestOptions) {
    return this.#wrapper<PurgePerson, SuccessResponse>(
      HttpType.Post,
      "/admin/purge/person",
      form,
      options,
    );
  }

  /**
   * Purge / Delete a community from the database.
   *
   * `HTTP.POST /admin/purge/community`
   */
  purgeCommunity(form: PurgeCommunity, options?: RequestOptions) {
    return this.#wrapper<PurgeCommunity, SuccessResponse>(
      HttpType.Post,
      "/admin/purge/community",
      form,
      options,
    );
  }

  /**
   * Purge / Delete a post from the database.
   *
   * `HTTP.POST /admin/purge/post`
   */
  purgePost(form: PurgePost, options?: RequestOptions) {
    return this.#wrapper<PurgePost, SuccessResponse>(
      HttpType.Post,
      "/admin/purge/post",
      form,
      options,
    );
  }

  /**
   * Purge / Delete a comment from the database.
   *
   * `HTTP.POST /admin/purge/comment`
   */
  purgeComment(form: PurgeComment, options?: RequestOptions) {
    return this.#wrapper<PurgeComment, SuccessResponse>(
      HttpType.Post,
      "/admin/purge/comment",
      form,
      options,
    );
  }

  /**
   * Create a new custom emoji
   *
   * `HTTP.POST /custom_emoji`
   */
  createCustomEmoji(form: CreateCustomEmoji, options?: RequestOptions) {
    return this.#wrapper<CreateCustomEmoji, CustomEmojiResponse>(
      HttpType.Post,
      "/custom_emoji",
      form,
      options,
    );
  }

  /**
   * Edit an existing custom emoji
   *
   * `HTTP.PUT /custom_emoji`
   */
  editCustomEmoji(form: EditCustomEmoji, options?: RequestOptions) {
    return this.#wrapper<EditCustomEmoji, CustomEmojiResponse>(
      HttpType.Put,
      "/custom_emoji",
      form,
      options,
    );
  }

  /**
   * Delete a custom emoji
   *
   * `HTTP.Post /custom_emoji/delete`
   */
  deleteCustomEmoji(form: DeleteCustomEmoji, options?: RequestOptions) {
    return this.#wrapper<DeleteCustomEmoji, SuccessResponse>(
      HttpType.Post,
      "/custom_emoji/delete",
      form,
      options,
    );
  }

  /**
   * List custom emojis
   *
   * `HTTP.GET /custom_emoji/list`
   */
  listCustomEmojis(form: ListCustomEmojis, options?: RequestOptions) {
    return this.#wrapper<ListCustomEmojis, ListCustomEmojisResponse>(
      HttpType.Get,
      "/custom_emoji/list",
      form,
      options,
    );
  }

  /**
   * Create a new tagline
   *
   * `HTTP.POST /admin/tagline`
   */
  createTagline(form: CreateTagline, options?: RequestOptions) {
    return this.#wrapper<CreateTagline, TaglineResponse>(
      HttpType.Post,
      "/admin/tagline",
      form,
      options,
    );
  }

  /**
   * Edit an existing tagline
   *
   * `HTTP.PUT /admin/tagline`
   */
  editTagline(form: UpdateTagline, options?: RequestOptions) {
    return this.#wrapper<UpdateTagline, TaglineResponse>(
      HttpType.Put,
      "/admin/tagline",
      form,
      options,
    );
  }

  /**
   * Delete a tagline
   *
   * `HTTP.Post /admin/tagline/delete`
   */
  deleteTagline(form: DeleteTagline, options?: RequestOptions) {
    return this.#wrapper<DeleteTagline, SuccessResponse>(
      HttpType.Post,
      "/admin/tagline/delete",
      form,
      options,
    );
  }

  /**
   * List taglines
   *
   * `HTTP.GET /admin/tagline/list`
   */
  listTaglines(form: ListTaglines, options?: RequestOptions) {
    return this.#wrapper<ListTaglines, ListTaglinesResponse>(
      HttpType.Get,
      "/admin/tagline/list",
      form,
      options,
    );
  }

  /**
   * Create a new oauth provider method
   *
   * `HTTP.POST /oauth_provider`
   */
  createOAuthProvider(form: CreateOAuthProvider, options?: RequestOptions) {
    return this.#wrapper<CreateOAuthProvider, OAuthProvider>(
      HttpType.Post,
      "/oauth_provider",
      form,
      options,
    );
  }

  /**
   * Edit an existing oauth provider method
   *
   * `HTTP.PUT /oauth_provider`
   */
  editOAuthProvider(form: EditOAuthProvider, options?: RequestOptions) {
    return this.#wrapper<EditOAuthProvider, OAuthProvider>(
      HttpType.Put,
      "/oauth_provider",
      form,
      options,
    );
  }

  /**
   * Delete an oauth provider method
   *
   * `HTTP.Post /oauth_provider/delete`
   */
  deleteOAuthProvider(form: DeleteOAuthProvider, options?: RequestOptions) {
    return this.#wrapper<DeleteOAuthProvider, SuccessResponse>(
      HttpType.Post,
      "/oauth_provider/delete",
      form,
      options,
    );
  }

  /**
   * Authenticate with OAuth
   *
   * `HTTP.Post /oauth/authenticate`
   */
  authenticateWithOAuth(form: AuthenticateWithOauth, options?: RequestOptions) {
    return this.#wrapper<AuthenticateWithOauth, LoginResponse>(
      HttpType.Post,
      "/oauth/authenticate",
      form,
      options,
    );
  }

  /**
   * Fetch federated instances.
   *
   * `HTTP.Get /federated_instances`
   */
  getFederatedInstances(options?: RequestOptions) {
    return this.#wrapper<object, GetFederatedInstancesResponse>(
      HttpType.Get,
      "/federated_instances",
      {},
      options,
    );
  }

  /**
   * List user reports.
   *
   * `HTTP.GET /report/list`
   */
  listReports(form: ListReports, options?: RequestOptions) {
    return this.#wrapper<ListReports, ListReportsResponse>(
      HttpType.Get,
      "/report/list",
      form,
      options,
    );
  }

  /**
   * Block an instance as user.
   *
   * `HTTP.Post /account/block/instance`
   */
  userBlockInstance(form: UserBlockInstanceParams, options?: RequestOptions) {
    return this.#wrapper<UserBlockInstanceParams, SuccessResponse>(
      HttpType.Post,
      "/account/block/instance",
      form,
      options,
    );
  }

  /**
   * Globally block an instance as admin.
   *
   * `HTTP.Post /admin/instance/block`
   */
  adminBlockInstance(form: AdminBlockInstanceParams, options?: RequestOptions) {
    return this.#wrapper<AdminBlockInstanceParams, SuccessResponse>(
      HttpType.Post,
      "/admin/instance/block",
      form,
      options,
    );
  }

  /**
   * Globally allow an instance as admin.
   *
   * `HTTP.Post /admin/instance/allow`
   */
  adminAllowInstance(form: AdminAllowInstanceParams, options?: RequestOptions) {
    return this.#wrapper<AdminAllowInstanceParams, SuccessResponse>(
      HttpType.Post,
      "/admin/instance/allow",
      form,
      options,
    );
  }

  /**
   * Upload new user avatar.
   *
   * `HTTP.Post /account/avatar`
   */
  async uploadUserAvatar(
    image: UploadImage,
    options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#upload("/account/avatar", image, options);
  }

  /**
   * Delete the user avatar.
   *
   * `HTTP.Delete /account/avatar`
   */
  async deleteUserAvatar(options?: RequestOptions): Promise<SuccessResponse> {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Delete,
      "/account/avatar",
      {},
      options,
    );
  }

  /**
   * Upload new user banner.
   *
   * `HTTP.Post /account/banner`
   */
  async uploadUserBanner(
    image: UploadImage,
    options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#upload("/account/banner", image, options);
  }

  /**
   * Delete the user banner.
   *
   * `HTTP.Delete /account/banner`
   */
  async deleteUserBanner(options?: RequestOptions): Promise<SuccessResponse> {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Delete,
      "/account/banner",
      {},
      options,
    );
  }

  /**
   * Upload new community icon.
   *
   * `HTTP.Post /community/icon`
   */
  async uploadCommunityIcon(
    image: UploadImage,
    options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#upload("/community/icon", image, options);
  }

  /**
   * Delete the community icon.
   *
   * `HTTP.Delete /community/icon`
   */
  async deleteCommunityIcon(
    options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Delete,
      "/community/icon",
      {},
      options,
    );
  }

  /**
   * Upload new community banner.
   *
   * `HTTP.Post /community/banner`
   */
  async uploadCommunityBanner(
    image: UploadImage,
    options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#upload("/community/banner", image, options);
  }

  /**
   * Delete the community banner.
   *
   * `HTTP.Delete /community/banner`
   */
  async deleteCommunityBanner(
    options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Delete,
      "/community/banner",
      {},
      options,
    );
  }

  /**
   * Upload new site icon.
   *
   * `HTTP.Post /site/icon`
   */
  async uploadSiteIcon(
    image: UploadImage,
    options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#upload("/site/icon", image, options);
  }

  /**
   * Delete the site icon.
   *
   * `HTTP.Delete /site/icon`
   */
  async deleteSiteIcon(options?: RequestOptions): Promise<SuccessResponse> {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Delete,
      "/site/icon",
      {},
      options,
    );
  }

  /**
   * Upload new site banner.
   *
   * `HTTP.Post /site/banner`
   */
  async uploadSiteBanner(
    image: UploadImage,
    options?: RequestOptions,
  ): Promise<SuccessResponse> {
    return this.#upload("/site/banner", image, options);
  }

  /**
   * Delete the site banner.
   *
   * `HTTP.Delete /site/banner`
   */
  async deleteSiteBanner(options?: RequestOptions): Promise<SuccessResponse> {
    return this.#wrapper<object, SuccessResponse>(
      HttpType.Delete,
      "/site/banner",
      {},
      options,
    );
  }

  /**
   * Upload an image to the server.
   *
   * `HTTP.Post /image`
   */
  async uploadImage(
    image: UploadImage,
    options?: RequestOptions,
  ): Promise<UploadImageResponse> {
    return this.#upload("/image", image, options);
  }

  /**
   * Delete a pictrs image
   *
   * `HTTP.Delete /image`
   */
  async deleteImage(form: DeleteImageParams, options?: RequestOptions) {
    return this.#wrapper<DeleteImageParams, SuccessResponse>(
      HttpType.Delete,
      "/image",
      form,
      options,
    );
  }

  /**
   * Health check for image functionality
   *
   * `HTTP.Get /image/health`
   */
  async imageHealth(options?: RequestOptions) {
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
