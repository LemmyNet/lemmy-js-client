import fetch from "cross-fetch";
import FormData from "form-data";
import { AddAdmin } from "./types/AddAdmin";
import { AddAdminResponse } from "./types/AddAdminResponse";
import { AddModToCommunity } from "./types/AddModToCommunity";
import { AddModToCommunityResponse } from "./types/AddModToCommunityResponse";
import { ApproveRegistrationApplication } from "./types/ApproveRegistrationApplication";
import { BanFromCommunity } from "./types/BanFromCommunity";
import { BanFromCommunityResponse } from "./types/BanFromCommunityResponse";
import { BanPerson } from "./types/BanPerson";
import { BanPersonResponse } from "./types/BanPersonResponse";
import { BannedPersonsResponse } from "./types/BannedPersonsResponse";
import { BlockCommunity } from "./types/BlockCommunity";
import { BlockCommunityResponse } from "./types/BlockCommunityResponse";
import { BlockPerson } from "./types/BlockPerson";
import { BlockPersonResponse } from "./types/BlockPersonResponse";
import { ChangePassword } from "./types/ChangePassword";
import { CommentReplyResponse } from "./types/CommentReplyResponse";
import { CommentReportResponse } from "./types/CommentReportResponse";
import { CommentResponse } from "./types/CommentResponse";
import { CommunityResponse } from "./types/CommunityResponse";
import { CreateComment } from "./types/CreateComment";
import { CreateCommentLike } from "./types/CreateCommentLike";
import { CreateCommentReport } from "./types/CreateCommentReport";
import { CreateCommunity } from "./types/CreateCommunity";
import { CreateCustomEmoji } from "./types/CreateCustomEmoji";
import { CreatePost } from "./types/CreatePost";
import { CreatePostLike } from "./types/CreatePostLike";
import { CreatePostReport } from "./types/CreatePostReport";
import { CreatePrivateMessage } from "./types/CreatePrivateMessage";
import { CreatePrivateMessageReport } from "./types/CreatePrivateMessageReport";
import { CreateSite } from "./types/CreateSite";
import { CustomEmojiResponse } from "./types/CustomEmojiResponse";
import { DeleteAccount } from "./types/DeleteAccount";
import { DeleteAccountResponse } from "./types/DeleteAccountResponse";
import { DeleteComment } from "./types/DeleteComment";
import { DeleteCommunity } from "./types/DeleteCommunity";
import { DeleteCustomEmoji } from "./types/DeleteCustomEmoji";
import { DeleteCustomEmojiResponse } from "./types/DeleteCustomEmojiResponse";
import { DeletePost } from "./types/DeletePost";
import { DeletePrivateMessage } from "./types/DeletePrivateMessage";
import { DistinguishComment } from "./types/DistinguishComment";
import { EditComment } from "./types/EditComment";
import { EditCommunity } from "./types/EditCommunity";
import { EditCustomEmoji } from "./types/EditCustomEmoji";
import { EditPost } from "./types/EditPost";
import { EditPrivateMessage } from "./types/EditPrivateMessage";
import { EditSite } from "./types/EditSite";
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
import { GetPersonMentions } from "./types/GetPersonMentions";
import { GetPersonMentionsResponse } from "./types/GetPersonMentionsResponse";
import { GetPost } from "./types/GetPost";
import { GetPostResponse } from "./types/GetPostResponse";
import { GetPosts } from "./types/GetPosts";
import { GetPostsResponse } from "./types/GetPostsResponse";
import { GetPrivateMessages } from "./types/GetPrivateMessages";
import { GetReplies } from "./types/GetReplies";
import { GetRepliesResponse } from "./types/GetRepliesResponse";
import { GetReportCount } from "./types/GetReportCount";
import { GetReportCountResponse } from "./types/GetReportCountResponse";
import { GetSiteMetadata } from "./types/GetSiteMetadata";
import { GetSiteMetadataResponse } from "./types/GetSiteMetadataResponse";
import { GetSiteResponse } from "./types/GetSiteResponse";
import { GetUnreadCountResponse } from "./types/GetUnreadCountResponse";
import { GetUnreadRegistrationApplicationCountResponse } from "./types/GetUnreadRegistrationApplicationCountResponse";
import { ListCommentReports } from "./types/ListCommentReports";
import { ListCommentReportsResponse } from "./types/ListCommentReportsResponse";
import { ListCommunities } from "./types/ListCommunities";
import { ListCommunitiesResponse } from "./types/ListCommunitiesResponse";
import { ListPostReports } from "./types/ListPostReports";
import { ListPostReportsResponse } from "./types/ListPostReportsResponse";
import { ListPrivateMessageReports } from "./types/ListPrivateMessageReports";
import { ListPrivateMessageReportsResponse } from "./types/ListPrivateMessageReportsResponse";
import { ListRegistrationApplications } from "./types/ListRegistrationApplications";
import { ListRegistrationApplicationsResponse } from "./types/ListRegistrationApplicationsResponse";
import { LockPost } from "./types/LockPost";
import { Login } from "./types/Login";
import { LoginResponse } from "./types/LoginResponse";
import { MarkCommentReplyAsRead } from "./types/MarkCommentReplyAsRead";
import { MarkPersonMentionAsRead } from "./types/MarkPersonMentionAsRead";
import { MarkPostAsRead } from "./types/MarkPostAsRead";
import { MarkPrivateMessageAsRead } from "./types/MarkPrivateMessageAsRead";
import { PasswordChangeAfterReset } from "./types/PasswordChangeAfterReset";
import { PasswordReset } from "./types/PasswordReset";
import { PasswordResetResponse } from "./types/PasswordResetResponse";
import { PersonMentionResponse } from "./types/PersonMentionResponse";
import { PostReportResponse } from "./types/PostReportResponse";
import { PostResponse } from "./types/PostResponse";
import { PrivateMessageReportResponse } from "./types/PrivateMessageReportResponse";
import { PrivateMessageResponse } from "./types/PrivateMessageResponse";
import { PrivateMessagesResponse } from "./types/PrivateMessagesResponse";
import { PurgeComment } from "./types/PurgeComment";
import { PurgeCommunity } from "./types/PurgeCommunity";
import { PurgeItemResponse } from "./types/PurgeItemResponse";
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
import { VerifyEmailResponse } from "./types/VerifyEmailResponse";
import { UploadImage, UploadImageResponse, VERSION } from "./types/others";
import { HideCommunity } from "./types/HideCommunity";
import { BlockInstance } from "./types/BlockInstance";
import { BlockInstanceResponse } from "./types/BlockInstanceResponse";

enum HttpType {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
}

/**
 * Helps build lemmy HTTP requests.
 */
export class LemmyHttp {
  #apiUrl: string;
  #headers: { [key: string]: string } = {};
  #pictrsUrl: string;
  #fetchFunction = fetch;

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
    this.#pictrsUrl = `${baseUrl}/pictrs/image`;

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
  getSite() {
    return this.#wrapper<object, GetSiteResponse>(HttpType.Get, "/site", {});
  }

  /**
   * Create your site.
   *
   * `HTTP.POST /site`
   */
  createSite(form: CreateSite) {
    return this.#wrapper<CreateSite, SiteResponse>(
      HttpType.Post,
      "/site",
      form,
    );
  }

  /**
   * Edit your site.
   *
   * `HTTP.PUT /site`
   */
  editSite(form: EditSite) {
    return this.#wrapper<EditSite, SiteResponse>(HttpType.Put, "/site", form);
  }

  /**
   * Leave the Site admins.
   *
   * `HTTP.POST /user/leave_admin`
   */
  leaveAdmin() {
    return this.#wrapper<object, GetSiteResponse>(
      HttpType.Post,
      "/user/leave_admin",
      {},
    );
  }

  /**
   * Get the modlog.
   *
   * `HTTP.GET /modlog`
   */
  getModlog(form: GetModlog = {}) {
    return this.#wrapper<GetModlog, GetModlogResponse>(
      HttpType.Get,
      "/modlog",
      form,
    );
  }

  /**
   * Search lemmy.
   *
   * `HTTP.GET /search`
   */
  search(form: Search) {
    return this.#wrapper<Search, SearchResponse>(HttpType.Get, "/search", form);
  }

  /**
   * Fetch a non-local / federated object.
   *
   * `HTTP.GET /resolve_object`
   */
  resolveObject(form: ResolveObject) {
    return this.#wrapper<ResolveObject, ResolveObjectResponse>(
      HttpType.Get,
      "/resolve_object",
      form,
    );
  }

  /**
   * Create a new community.
   *
   * `HTTP.POST /community`
   */
  createCommunity(form: CreateCommunity) {
    return this.#wrapper<CreateCommunity, CommunityResponse>(
      HttpType.Post,
      "/community",
      form,
    );
  }

  /**
   * Get / fetch a community.
   *
   * `HTTP.GET /community`
   */
  getCommunity(form: GetCommunity = {}) {
    return this.#wrapper<GetCommunity, GetCommunityResponse>(
      HttpType.Get,
      "/community",
      form,
    );
  }

  /**
   * Edit a community.
   *
   * `HTTP.PUT /community`
   */
  editCommunity(form: EditCommunity) {
    return this.#wrapper<EditCommunity, CommunityResponse>(
      HttpType.Put,
      "/community",
      form,
    );
  }

  /**
   * List communities, with various filters.
   *
   * `HTTP.GET /community/list`
   */
  listCommunities(form: ListCommunities = {}) {
    return this.#wrapper<ListCommunities, ListCommunitiesResponse>(
      HttpType.Get,
      "/community/list",
      form,
    );
  }

  /**
   * Follow / subscribe to a community.
   *
   * `HTTP.POST /community/follow`
   */
  followCommunity(form: FollowCommunity) {
    return this.#wrapper<FollowCommunity, CommunityResponse>(
      HttpType.Post,
      "/community/follow",
      form,
    );
  }

  /**
   * Block a community.
   *
   * `HTTP.POST /community/block`
   */
  blockCommunity(form: BlockCommunity) {
    return this.#wrapper<BlockCommunity, BlockCommunityResponse>(
      HttpType.Post,
      "/community/block",
      form,
    );
  }

  /**
   * Delete a community.
   *
   * `HTTP.POST /community/delete`
   */
  deleteCommunity(form: DeleteCommunity) {
    return this.#wrapper<DeleteCommunity, CommunityResponse>(
      HttpType.Post,
      "/community/delete",
      form,
    );
  }

  /**
   * Hide a community from public view.
   *
   * `HTTP.PUT /community/hide`
   */
  hideCommunity(form: HideCommunity) {
    return this.#wrapper<HideCommunity, CommunityResponse>(
      HttpType.Put,
      "/community/hide",
      form,
    );
  }

  /**
   * A moderator remove for a community.
   *
   * `HTTP.POST /community/remove`
   */
  removeCommunity(form: RemoveCommunity) {
    return this.#wrapper<RemoveCommunity, CommunityResponse>(
      HttpType.Post,
      "/community/remove",
      form,
    );
  }

  /**
   * Transfer your community to an existing moderator.
   *
   * `HTTP.POST /community/transfer`
   */
  transferCommunity(form: TransferCommunity) {
    return this.#wrapper<TransferCommunity, GetCommunityResponse>(
      HttpType.Post,
      "/community/transfer",
      form,
    );
  }

  /**
   * Ban a user from a community.
   *
   * `HTTP.POST /community/ban_user`
   */
  banFromCommunity(form: BanFromCommunity) {
    return this.#wrapper<BanFromCommunity, BanFromCommunityResponse>(
      HttpType.Post,
      "/community/ban_user",
      form,
    );
  }

  /**
   * Add a moderator to your community.
   *
   * `HTTP.POST /community/mod`
   */
  addModToCommunity(form: AddModToCommunity) {
    return this.#wrapper<AddModToCommunity, AddModToCommunityResponse>(
      HttpType.Post,
      "/community/mod",
      form,
    );
  }

  /**
   * Create a post.
   *
   * `HTTP.POST /post`
   */
  createPost(form: CreatePost) {
    return this.#wrapper<CreatePost, PostResponse>(
      HttpType.Post,
      "/post",
      form,
    );
  }

  /**
   * Get / fetch a post.
   *
   * `HTTP.GET /post`
   */
  getPost(form: GetPost = {}) {
    return this.#wrapper<GetPost, GetPostResponse>(HttpType.Get, "/post", form);
  }

  /**
   * Edit a post.
   *
   * `HTTP.PUT /post`
   */
  editPost(form: EditPost) {
    return this.#wrapper<EditPost, PostResponse>(HttpType.Put, "/post", form);
  }

  /**
   * Delete a post.
   *
   * `HTTP.POST /post/delete`
   */
  deletePost(form: DeletePost) {
    return this.#wrapper<DeletePost, PostResponse>(
      HttpType.Post,
      "/post/delete",
      form,
    );
  }

  /**
   * A moderator remove for a post.
   *
   * `HTTP.POST /post/remove`
   */
  removePost(form: RemovePost) {
    return this.#wrapper<RemovePost, PostResponse>(
      HttpType.Post,
      "/post/remove",
      form,
    );
  }

  /**
   * Mark a post as read.
   *
   * `HTTP.POST /post/mark_as_read`
   */
  markPostAsRead(form: MarkPostAsRead) {
    return this.#wrapper<MarkPostAsRead, PostResponse>(
      HttpType.Post,
      "/post/mark_as_read",
      form,
    );
  }

  /**
   * A moderator can lock a post ( IE disable new comments ).
   *
   * `HTTP.POST /post/lock`
   */
  lockPost(form: LockPost) {
    return this.#wrapper<LockPost, PostResponse>(
      HttpType.Post,
      "/post/lock",
      form,
    );
  }

  /**
   * A moderator can feature a community post ( IE stick it to the top of a community ).
   *
   * `HTTP.POST /post/feature`
   */
  featurePost(form: FeaturePost) {
    return this.#wrapper<FeaturePost, PostResponse>(
      HttpType.Post,
      "/post/feature",
      form,
    );
  }

  /**
   * Get / fetch posts, with various filters.
   *
   * `HTTP.GET /post/list`
   */
  getPosts(form: GetPosts = {}) {
    return this.#wrapper<GetPosts, GetPostsResponse>(
      HttpType.Get,
      "/post/list",
      form,
    );
  }

  /**
   * Like / vote on a post.
   *
   * `HTTP.POST /post/like`
   */
  likePost(form: CreatePostLike) {
    return this.#wrapper<CreatePostLike, PostResponse>(
      HttpType.Post,
      "/post/like",
      form,
    );
  }

  /**
   * Save a post.
   *
   * `HTTP.PUT /post/save`
   */
  savePost(form: SavePost) {
    return this.#wrapper<SavePost, PostResponse>(
      HttpType.Put,
      "/post/save",
      form,
    );
  }

  /**
   * Report a post.
   *
   * `HTTP.POST /post/report`
   */
  createPostReport(form: CreatePostReport) {
    return this.#wrapper<CreatePostReport, PostReportResponse>(
      HttpType.Post,
      "/post/report",
      form,
    );
  }

  /**
   * Resolve a post report. Only a mod can do this.
   *
   * `HTTP.PUT /post/report/resolve`
   */
  resolvePostReport(form: ResolvePostReport) {
    return this.#wrapper<ResolvePostReport, PostReportResponse>(
      HttpType.Put,
      "/post/report/resolve",
      form,
    );
  }

  /**
   * List post reports.
   *
   * `HTTP.GET /post/report/list`
   */
  listPostReports(form: ListPostReports) {
    return this.#wrapper<ListPostReports, ListPostReportsResponse>(
      HttpType.Get,
      "/post/report/list",
      form,
    );
  }

  /**
   * Fetch metadata for any given site.
   *
   * `HTTP.GET /post/site_metadata`
   */
  getSiteMetadata(form: GetSiteMetadata) {
    return this.#wrapper<GetSiteMetadata, GetSiteMetadataResponse>(
      HttpType.Get,
      "/post/site_metadata",
      form,
    );
  }

  /**
   * Create a comment.
   *
   * `HTTP.POST /comment`
   */
  createComment(form: CreateComment) {
    return this.#wrapper<CreateComment, CommentResponse>(
      HttpType.Post,
      "/comment",
      form,
    );
  }

  /**
   * Edit a comment.
   *
   * `HTTP.PUT /comment`
   */
  editComment(form: EditComment) {
    return this.#wrapper<EditComment, CommentResponse>(
      HttpType.Put,
      "/comment",
      form,
    );
  }

  /**
   * Delete a comment.
   *
   * `HTTP.POST /comment/delete`
   */
  deleteComment(form: DeleteComment) {
    return this.#wrapper<DeleteComment, CommentResponse>(
      HttpType.Post,
      "/comment/delete",
      form,
    );
  }

  /**
   * A moderator remove for a comment.
   *
   * `HTTP.POST /comment/remove`
   */
  removeComment(form: RemoveComment) {
    return this.#wrapper<RemoveComment, CommentResponse>(
      HttpType.Post,
      "/comment/remove",
      form,
    );
  }

  /**
   * Mark a comment as read.
   *
   * `HTTP.POST /comment/mark_as_read`
   */
  markCommentReplyAsRead(form: MarkCommentReplyAsRead) {
    return this.#wrapper<MarkCommentReplyAsRead, CommentReplyResponse>(
      HttpType.Post,
      "/comment/mark_as_read",
      form,
    );
  }

  /**
   * Like / vote on a comment.
   *
   * `HTTP.POST /comment/like`
   */
  likeComment(form: CreateCommentLike) {
    return this.#wrapper<CreateCommentLike, CommentResponse>(
      HttpType.Post,
      "/comment/like",
      form,
    );
  }

  /**
   * Save a comment.
   *
   * `HTTP.PUT /comment/save`
   */
  saveComment(form: SaveComment) {
    return this.#wrapper<SaveComment, CommentResponse>(
      HttpType.Put,
      "/comment/save",
      form,
    );
  }

  /**
   * Distinguishes a comment (speak as moderator)
   *
   * `HTTP.POST /comment/distinguish`
   */
  distinguishComment(form: DistinguishComment) {
    return this.#wrapper<DistinguishComment, CommentResponse>(
      HttpType.Post,
      "/comment/distinguish",
      form,
    );
  }

  /**
   * Get / fetch comments.
   *
   * `HTTP.GET /comment/list`
   */
  getComments(form: GetComments = {}) {
    return this.#wrapper<GetComments, GetCommentsResponse>(
      HttpType.Get,
      "/comment/list",
      form,
    );
  }

  /**
   * Get / fetch comment.
   *
   * `HTTP.GET /comment`
   */
  getComment(form: GetComment) {
    return this.#wrapper<GetComment, CommentResponse>(
      HttpType.Get,
      "/comment",
      form,
    );
  }

  /**
   * Report a comment.
   *
   * `HTTP.POST /comment/report`
   */
  createCommentReport(form: CreateCommentReport) {
    return this.#wrapper<CreateCommentReport, CommentReportResponse>(
      HttpType.Post,
      "/comment/report",
      form,
    );
  }

  /**
   * Resolve a comment report. Only a mod can do this.
   *
   * `HTTP.PUT /comment/report/resolve`
   */
  resolveCommentReport(form: ResolveCommentReport) {
    return this.#wrapper<ResolveCommentReport, CommentReportResponse>(
      HttpType.Put,
      "/comment/report/resolve",
      form,
    );
  }

  /**
   * List comment reports.
   *
   * `HTTP.GET /comment/report/list`
   */
  listCommentReports(form: ListCommentReports) {
    return this.#wrapper<ListCommentReports, ListCommentReportsResponse>(
      HttpType.Get,
      "/comment/report/list",
      form,
    );
  }

  /**
   * Get / fetch private messages.
   *
   * `HTTP.GET /private_message/list`
   */
  getPrivateMessages(form: GetPrivateMessages) {
    return this.#wrapper<GetPrivateMessages, PrivateMessagesResponse>(
      HttpType.Get,
      "/private_message/list",
      form,
    );
  }

  /**
   * Create a private message.
   *
   * `HTTP.POST /private_message`
   */
  createPrivateMessage(form: CreatePrivateMessage) {
    return this.#wrapper<CreatePrivateMessage, PrivateMessageResponse>(
      HttpType.Post,
      "/private_message",
      form,
    );
  }

  /**
   * Edit a private message.
   *
   * `HTTP.PUT /private_message`
   */
  editPrivateMessage(form: EditPrivateMessage) {
    return this.#wrapper<EditPrivateMessage, PrivateMessageResponse>(
      HttpType.Put,
      "/private_message",
      form,
    );
  }

  /**
   * Delete a private message.
   *
   * `HTTP.POST /private_message/delete`
   */
  deletePrivateMessage(form: DeletePrivateMessage) {
    return this.#wrapper<DeletePrivateMessage, PrivateMessageResponse>(
      HttpType.Post,
      "/private_message/delete",
      form,
    );
  }

  /**
   * Mark a private message as read.
   *
   * `HTTP.POST /private_message/mark_as_read`
   */
  markPrivateMessageAsRead(form: MarkPrivateMessageAsRead) {
    return this.#wrapper<MarkPrivateMessageAsRead, PrivateMessageResponse>(
      HttpType.Post,
      "/private_message/mark_as_read",
      form,
    );
  }

  /**
   * Create a report for a private message.
   *
   * `HTTP.POST /private_message/report`
   */
  createPrivateMessageReport(form: CreatePrivateMessageReport) {
    return this.#wrapper<
      CreatePrivateMessageReport,
      PrivateMessageReportResponse
    >(HttpType.Post, "/private_message/report", form);
  }

  /**
   * Resolve a report for a private message.
   *
   * `HTTP.PUT /private_message/report/resolve`
   */
  resolvePrivateMessageReport(form: ResolvePrivateMessageReport) {
    return this.#wrapper<
      ResolvePrivateMessageReport,
      PrivateMessageReportResponse
    >(HttpType.Put, "/private_message/report/resolve", form);
  }

  /**
   * List private message reports.
   *
   * `HTTP.GET /private_message/report/list`
   */
  listPrivateMessageReports(form: ListPrivateMessageReports) {
    return this.#wrapper<
      ListPrivateMessageReports,
      ListPrivateMessageReportsResponse
    >(HttpType.Get, "/private_message/report/list", form);
  }

  /**
   * Register a new user.
   *
   * `HTTP.POST /user/register`
   */
  register(form: Register) {
    return this.#wrapper<Register, LoginResponse>(
      HttpType.Post,
      "/user/register",
      form,
    );
  }

  /**
   * Log into lemmy.
   *
   * `HTTP.POST /user/login`
   */
  login(form: Login) {
    return this.#wrapper<Login, LoginResponse>(
      HttpType.Post,
      "/user/login",
      form,
    );
  }

  /**
   * Get the details for a person.
   *
   * `HTTP.GET /user`
   */
  getPersonDetails(form: GetPersonDetails = {}) {
    return this.#wrapper<GetPersonDetails, GetPersonDetailsResponse>(
      HttpType.Get,
      "/user",
      form,
    );
  }

  /**
   * Get mentions for your user.
   *
   * `HTTP.GET /user/mention`
   */
  getPersonMentions(form: GetPersonMentions) {
    return this.#wrapper<GetPersonMentions, GetPersonMentionsResponse>(
      HttpType.Get,
      "/user/mention",
      form,
    );
  }

  /**
   * Mark a person mention as read.
   *
   * `HTTP.POST /user/mention/mark_as_read`
   */
  markPersonMentionAsRead(form: MarkPersonMentionAsRead) {
    return this.#wrapper<MarkPersonMentionAsRead, PersonMentionResponse>(
      HttpType.Post,
      "/user/mention/mark_as_read",
      form,
    );
  }

  /**
   * Get comment replies.
   *
   * `HTTP.GET /user/replies`
   */
  getReplies(form: GetReplies) {
    return this.#wrapper<GetReplies, GetRepliesResponse>(
      HttpType.Get,
      "/user/replies",
      form,
    );
  }

  /**
   * Ban a person from your site.
   *
   * `HTTP.POST /user/ban`
   */
  banPerson(form: BanPerson) {
    return this.#wrapper<BanPerson, BanPersonResponse>(
      HttpType.Post,
      "/user/ban",
      form,
    );
  }

  /**
   * Get a list of banned users
   *
   * `HTTP.GET /user/banned`
   */
  getBannedPersons() {
    return this.#wrapper<object, BannedPersonsResponse>(
      HttpType.Get,
      "/user/banned",
      {},
    );
  }

  /**
   * Block a person.
   *
   * `HTTP.POST /user/block`
   */
  blockPerson(form: BlockPerson) {
    return this.#wrapper<BlockPerson, BlockPersonResponse>(
      HttpType.Post,
      "/user/block",
      form,
    );
  }

  /**
   * Fetch a Captcha.
   *
   * `HTTP.GET /user/get_captcha`
   */
  getCaptcha() {
    return this.#wrapper<object, GetCaptchaResponse>(
      HttpType.Get,
      "/user/get_captcha",
      {},
    );
  }

  /**
   * Delete your account.
   *
   * `HTTP.POST /user/delete_account`
   */
  deleteAccount(form: DeleteAccount) {
    return this.#wrapper<DeleteAccount, DeleteAccountResponse>(
      HttpType.Post,
      "/user/delete_account",
      form,
    );
  }

  /**
   * Reset your password.
   *
   * `HTTP.POST /user/password_reset`
   */
  passwordReset(form: PasswordReset) {
    return this.#wrapper<PasswordReset, PasswordResetResponse>(
      HttpType.Post,
      "/user/password_reset",
      form,
    );
  }

  /**
   * Change your password from an email / token based reset.
   *
   * `HTTP.POST /user/password_change`
   */
  passwordChangeAfterReset(form: PasswordChangeAfterReset) {
    return this.#wrapper<PasswordChangeAfterReset, LoginResponse>(
      HttpType.Post,
      "/user/password_change",
      form,
    );
  }

  /**
   * Mark all replies as read.
   *
   * `HTTP.POST /user/mark_all_as_read`
   */
  markAllAsRead() {
    return this.#wrapper<object, GetRepliesResponse>(
      HttpType.Post,
      "/user/mark_all_as_read",
      {},
    );
  }

  /**
   * Save your user settings.
   *
   * `HTTP.PUT /user/save_user_settings`
   */
  saveUserSettings(form: SaveUserSettings) {
    return this.#wrapper<SaveUserSettings, LoginResponse>(
      HttpType.Put,
      "/user/save_user_settings",
      form,
    );
  }

  /**
   * Change your user password.
   *
   * `HTTP.PUT /user/change_password`
   */
  changePassword(form: ChangePassword) {
    return this.#wrapper<ChangePassword, LoginResponse>(
      HttpType.Put,
      "/user/change_password",
      form,
    );
  }

  /**
   * Get counts for your reports
   *
   * `HTTP.GET /user/report_count`
   */
  getReportCount(form: GetReportCount) {
    return this.#wrapper<GetReportCount, GetReportCountResponse>(
      HttpType.Get,
      "/user/report_count",
      form,
    );
  }

  /**
   * Get your unread counts
   *
   * `HTTP.GET /user/unread_count`
   */
  getUnreadCount() {
    return this.#wrapper<object, GetUnreadCountResponse>(
      HttpType.Get,
      "/user/unread_count",
      {},
    );
  }

  /**
   * Verify your email
   *
   * `HTTP.POST /user/verify_email`
   */
  verifyEmail(form: VerifyEmail) {
    return this.#wrapper<VerifyEmail, VerifyEmailResponse>(
      HttpType.Post,
      "/user/verify_email",
      form,
    );
  }

  /**
   * Add an admin to your site.
   *
   * `HTTP.POST /admin/add`
   */
  addAdmin(form: AddAdmin) {
    return this.#wrapper<AddAdmin, AddAdminResponse>(
      HttpType.Post,
      "/admin/add",
      form,
    );
  }

  /**
   * Get the unread registration applications count.
   *
   * `HTTP.GET /admin/registration_application/count`
   */
  getUnreadRegistrationApplicationCount() {
    return this.#wrapper<object, GetUnreadRegistrationApplicationCountResponse>(
      HttpType.Get,
      "/admin/registration_application/count",
      {},
    );
  }

  /**
   * List the registration applications.
   *
   * `HTTP.GET /admin/registration_application/list`
   */
  listRegistrationApplications(form: ListRegistrationApplications) {
    return this.#wrapper<
      ListRegistrationApplications,
      ListRegistrationApplicationsResponse
    >(HttpType.Get, "/admin/registration_application/list", form);
  }

  /**
   * Approve a registration application
   *
   * `HTTP.PUT /admin/registration_application/approve`
   */
  approveRegistrationApplication(form: ApproveRegistrationApplication) {
    return this.#wrapper<
      ApproveRegistrationApplication,
      RegistrationApplicationResponse
    >(HttpType.Put, "/admin/registration_application/approve", form);
  }

  /**
   * Purge / Delete a person from the database.
   *
   * `HTTP.POST /admin/purge/person`
   */
  purgePerson(form: PurgePerson) {
    return this.#wrapper<PurgePerson, PurgeItemResponse>(
      HttpType.Post,
      "/admin/purge/person",
      form,
    );
  }

  /**
   * Purge / Delete a community from the database.
   *
   * `HTTP.POST /admin/purge/community`
   */
  purgeCommunity(form: PurgeCommunity) {
    return this.#wrapper<PurgeCommunity, PurgeItemResponse>(
      HttpType.Post,
      "/admin/purge/community",
      form,
    );
  }

  /**
   * Purge / Delete a post from the database.
   *
   * `HTTP.POST /admin/purge/post`
   */
  purgePost(form: PurgePost) {
    return this.#wrapper<PurgePost, PurgeItemResponse>(
      HttpType.Post,
      "/admin/purge/post",
      form,
    );
  }

  /**
   * Purge / Delete a comment from the database.
   *
   * `HTTP.POST /admin/purge/comment`
   */
  purgeComment(form: PurgeComment) {
    return this.#wrapper<PurgeComment, PurgeItemResponse>(
      HttpType.Post,
      "/admin/purge/comment",
      form,
    );
  }

  /**
   * Create a new custom emoji
   *
   * `HTTP.POST /custom_emoji`
   */
  createCustomEmoji(form: CreateCustomEmoji) {
    return this.#wrapper<CreateCustomEmoji, CustomEmojiResponse>(
      HttpType.Post,
      "/custom_emoji",
      form,
    );
  }

  /**
   * Edit an existing custom emoji
   *
   * `HTTP.PUT /custom_emoji`
   */
  editCustomEmoji(form: EditCustomEmoji) {
    return this.#wrapper<EditCustomEmoji, CustomEmojiResponse>(
      HttpType.Put,
      "/custom_emoji",
      form,
    );
  }

  /**
   * Delete a custom emoji
   *
   * `HTTP.Post /custom_emoji/delete`
   */
  deleteCustomEmoji(form: DeleteCustomEmoji) {
    return this.#wrapper<DeleteCustomEmoji, DeleteCustomEmojiResponse>(
      HttpType.Post,
      "/custom_emoji/delete",
      form,
    );
  }

  /**
   * Fetch federated instances.
   *
   * `HTTP.Get /federated_instances`
   */
  getFederatedInstances() {
    return this.#wrapper<object, GetFederatedInstancesResponse>(
      HttpType.Get,
      "/federated_instances",
      {},
    );
  }

  /**
   * Block an instance.
   *
   * `HTTP.Post /site/block`
   */
  blockInstance(form: BlockInstance) {
    return this.#wrapper<BlockInstance, BlockInstanceResponse>(
      HttpType.Post,
      "/site/block",
      form,
    );
  }

  /**
   * Upload an image to the server.
   */
  async uploadImage({
    image,
    auth,
  }: UploadImage): Promise<UploadImageResponse> {
    const formData = createFormData(image);

    // If auth cookie not already set by browser, set it with passed in auth
    const headers = {} as any;
    if (
      !globalThis?.document?.cookie?.includes("auth=") &&
      !this.#headers?.Cookie?.includes("auth=")
    ) {
      headers.Cookie = `auth=${auth}`;
    }

    let url: string | undefined = undefined;
    let delete_url: string | undefined = undefined;

    const response = await this.#fetchFunction(this.#pictrsUrl, {
      method: HttpType.Post,
      body: formData as unknown as BodyInit,
      headers: {
        ...this.#headers,
        ...headers,
      },
    });

    if (response.status === 413) {
      return { msg: "too_large" };
    }

    const responseJson = await response.json();

    if (responseJson.msg === "ok") {
      const { file: hash, delete_token: deleteToken } = responseJson.files[0];
      delete_url = `${this.#pictrsUrl}/delete/${deleteToken}/${hash}`;
      url = `${this.#pictrsUrl}/${hash}`;
    }

    return {
      ...responseJson,
      url,
      delete_url,
    };
  }

  #buildFullUrl(endpoint: string) {
    return `${this.#apiUrl}${endpoint}`;
  }

  async #wrapper<BodyType extends object, ResponseType>(
    type_: HttpType,
    endpoint: string,
    form: BodyType,
  ): Promise<ResponseType> {
    let response: Response;
    if (type_ === HttpType.Get) {
      const getUrl = `${this.#buildFullUrl(endpoint)}?${encodeGetParams(form)}`;
      response = await this.#fetchFunction(getUrl, {
        method: HttpType.Get,
        headers: this.#headers,
      });
    } else {
      response = await this.#fetchFunction(this.#buildFullUrl(endpoint), {
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
    } catch (error) {
      throw response.statusText;
    }

    if (!response.ok) {
      throw json["error"] ?? response.statusText;
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
    .filter(kv => !!kv[1])
    .map(kv => kv.map(encodeURIComponent).join("="))
    .join("&");
}

function createFormData(image: File | Buffer): FormData {
  let formData = new FormData();

  if (image.constructor.name === "File") {
    formData.append("images[]", image);
  } else {
    // The filename doesn't affect the file type or file name that ends up in pictrs
    formData.append("images[]", image, { filename: "image.jpg" });
  }

  return formData;
}
