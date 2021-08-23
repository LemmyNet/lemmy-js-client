import fetch from 'node-fetch';
import {
  CommentResponse,
  CreateComment,
  CreateCommentLike,
  DeleteComment,
  EditComment,
  GetComments,
  GetCommentsResponse,
  MarkCommentAsRead,
  RemoveComment,
  SaveComment,
} from './interfaces/api/comment';
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
} from './interfaces/api/community';
import {
  CreatePost,
  CreatePostLike,
  DeletePost,
  EditPost,
  GetPost,
  GetPostResponse,
  GetPosts,
  GetPostsResponse,
  GetSiteMetadata,
  GetSiteMetadataResponse,
  LockPost,
  PostResponse,
  RemovePost,
  SavePost,
  StickyPost,
} from './interfaces/api/post';
import {
  CreateSite,
  EditSite,
  GetModlog,
  GetModlogResponse,
  GetSite,
  GetSiteConfig,
  GetSiteConfigResponse,
  GetSiteResponse,
  ResolveObject,
  ResolveObjectResponse,
  SaveSiteConfig,
  Search,
  SearchResponse,
  SiteResponse,
  TransferSite,
} from './interfaces/api/site';
import {
  AddAdmin,
  AddAdminResponse,
  BanPerson,
  BanPersonResponse,
  CreatePrivateMessage,
  DeleteAccount,
  DeletePrivateMessage,
  EditPrivateMessage,
  GetCaptchaResponse,
  GetPrivateMessages,
  GetReplies,
  GetRepliesResponse,
  GetPersonDetails,
  GetPersonDetailsResponse,
  GetPersonMentions,
  GetPersonMentionsResponse,
  Login,
  LoginResponse,
  MarkAllAsRead,
  MarkPrivateMessageAsRead,
  MarkPersonMentionAsRead,
  PasswordChange,
  PasswordReset,
  PasswordResetResponse,
  PrivateMessageResponse,
  PrivateMessagesResponse,
  Register,
  SaveUserSettings,
  ChangePassword,
  PersonMentionResponse,
  BlockPerson,
  BlockPersonResponse,
} from './interfaces/api/person';

import { VERSION } from './interfaces/others';

enum HttpType {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
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
   */
  async getSite(form: GetSite): Promise<GetSiteResponse> {
    return this.wrapper(HttpType.Get, '/site', form);
  }

  /**
   * Create your site.
   */
  async createSite(form: CreateSite): Promise<SiteResponse> {
    return this.wrapper(HttpType.Post, '/site', form);
  }

  /**
   * Edit your site.
   */
  async editSite(form: EditSite): Promise<SiteResponse> {
    return this.wrapper(HttpType.Put, '/site', form);
  }

  /**
   * Transfer your site to another user.
   */
  async transferSite(form: TransferSite): Promise<GetSiteResponse> {
    return this.wrapper(HttpType.Post, '/site/transfer', form);
  }

  /**
   * Get your site configuration.
   */
  async getSiteConfig(form: GetSiteConfig): Promise<GetSiteConfigResponse> {
    return this.wrapper(HttpType.Get, '/site/config', form);
  }

  /**
   * Save your site config.
   */
  async saveSiteConfig(form: SaveSiteConfig): Promise<GetSiteConfigResponse> {
    return this.wrapper(HttpType.Put, '/site/config', form);
  }

  /**
   * Get the modlog.
   */
  async getModlog(form: GetModlog): Promise<GetModlogResponse> {
    return this.wrapper(HttpType.Get, '/modlog', form);
  }

  /**
   * Search lemmy.
   */
  async search(form: Search): Promise<SearchResponse> {
    return this.wrapper(HttpType.Get, '/search', form);
  }

  /**
   * Fetch a non-local / federated object.
   */
  async resolveObject(form: ResolveObject): Promise<ResolveObjectResponse> {
    return this.wrapper(HttpType.Get, '/resolve_object', form);
  }

  /**
   * Create a new community.
   */
  async createCommunity(form: CreateCommunity): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Post, '/community', form);
  }

  /**
   * Get / fetch a community.
   */
  async getCommunity(form: GetCommunity): Promise<GetCommunityResponse> {
    return this.wrapper(HttpType.Get, '/community', form);
  }

  /**
   * Edit a community.
   */
  async editCommunity(form: EditCommunity): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Put, '/community', form);
  }

  /**
   * List communities, with various filters.
   */
  async listCommunities(
    form: ListCommunities
  ): Promise<ListCommunitiesResponse> {
    return this.wrapper(HttpType.Get, '/community/list', form);
  }

  /**
   * Follow / subscribe to a community.
   */
  async followCommunity(form: FollowCommunity): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/follow', form);
  }

  /**
   * Block a community.
   */
  async blockCommunity(form: BlockCommunity): Promise<BlockCommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/block', form);
  }

  /**
   * Delete a community.
   */
  async deleteCommunity(form: DeleteCommunity): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/delete', form);
  }

  /**
   * A moderator remove for a community.
   */
  async removeCommunity(form: RemoveCommunity): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/remove', form);
  }

  /**
   * Transfer your community to an existing moderator.
   */
  async transferCommunity(
    form: TransferCommunity
  ): Promise<GetCommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/transfer', form);
  }

  /**
   * Ban a user from a community.
   */
  async banFromCommunity(
    form: BanFromCommunity
  ): Promise<BanFromCommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/ban_user', form);
  }

  /**
   * Add a moderator to your community.
   */
  async addModToCommunity(
    form: AddModToCommunity
  ): Promise<AddModToCommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/mod', form);
  }

  /**
   * Create a post.
   */
  async createPost(form: CreatePost): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post', form);
  }

  /**
   * Get / fetch a post.
   */
  async getPost(form: GetPost): Promise<GetPostResponse> {
    return this.wrapper(HttpType.Get, '/post', form);
  }

  /**
   * Edit a post.
   */
  async editPost(form: EditPost): Promise<PostResponse> {
    return this.wrapper(HttpType.Put, '/post', form);
  }

  /**
   * Delete a post.
   */
  async deletePost(form: DeletePost): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post/delete', form);
  }

  /**
   * A moderator remove for a post.
   */
  async removePost(form: RemovePost): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post/remove', form);
  }

  /**
   * A moderator can lock a post ( IE disable new comments ).
   */
  async lockPost(form: LockPost): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post/lock', form);
  }

  /**
   * A moderator can sticky a post ( IE stick it to the top of a community ).
   */
  async stickyPost(form: StickyPost): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post/sticky', form);
  }

  /**
   * Get / fetch posts, with various filters.
   */
  async getPosts(form: GetPosts): Promise<GetPostsResponse> {
    return this.wrapper(HttpType.Get, '/post/list', form);
  }

  /**
   * Like / vote on a post.
   */
  async likePost(form: CreatePostLike): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post/like', form);
  }

  /**
   * Save a post.
   */
  async savePost(form: SavePost): Promise<PostResponse> {
    return this.wrapper(HttpType.Put, '/post/save', form);
  }

  /**
   * Fetch metadata for any given site.
   */
  async getSiteMetadata(
    form: GetSiteMetadata
  ): Promise<GetSiteMetadataResponse> {
    return this.wrapper(HttpType.Get, '/post/site_metadata', form);
  }

  /**
   * Create a comment.
   */
  async createComment(form: CreateComment): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, '/comment', form);
  }

  /**
   * Edit a comment.
   */
  async editComment(form: EditComment): Promise<CommentResponse> {
    return this.wrapper(HttpType.Put, '/comment', form);
  }

  /**
   * Delete a comment.
   */
  async deleteComment(form: DeleteComment): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, '/comment/delete', form);
  }

  /**
   * A moderator remove for a comment.
   */
  async removeComment(form: RemoveComment): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, '/comment/remove', form);
  }

  /**
   * Mark a comment as read.
   */
  async markCommentAsRead(form: MarkCommentAsRead): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, '/comment/mark_as_read', form);
  }

  /**
   * Like / vote on a comment.
   */
  async likeComment(form: CreateCommentLike): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, '/comment/like', form);
  }

  /**
   * Save a comment.
   */
  async saveComment(form: SaveComment): Promise<CommentResponse> {
    return this.wrapper(HttpType.Put, '/comment/save', form);
  }

  /**
   * Get / fetch comments.
   */
  async getComments(form: GetComments): Promise<GetCommentsResponse> {
    return this.wrapper(HttpType.Get, '/comment/list', form);
  }

  /**
   * Get / fetch private messages.
   */
  async getPrivateMessages(
    form: GetPrivateMessages
  ): Promise<PrivateMessagesResponse> {
    return this.wrapper(HttpType.Get, '/private_message/list', form);
  }

  /**
   * Create a private message.
   */
  async createPrivateMessage(
    form: CreatePrivateMessage
  ): Promise<PrivateMessageResponse> {
    return this.wrapper(HttpType.Post, '/private_message', form);
  }

  /**
   * Edit a private message.
   */
  async editPrivateMessage(
    form: EditPrivateMessage
  ): Promise<PrivateMessageResponse> {
    return this.wrapper(HttpType.Put, '/private_message', form);
  }

  /**
   * Delete a private message.
   */
  async deletePrivateMessage(
    form: DeletePrivateMessage
  ): Promise<PrivateMessageResponse> {
    return this.wrapper(HttpType.Post, '/private_message/delete', form);
  }

  /**
   * Mark a private message as read.
   */
  async markPrivateMessageAsRead(
    form: MarkPrivateMessageAsRead
  ): Promise<PrivateMessageResponse> {
    return this.wrapper(HttpType.Post, '/private_message/mark_as_read', form);
  }

  /**
   * Register a new user.
   */
  async register(form: Register): Promise<LoginResponse> {
    return this.wrapper(HttpType.Post, '/user/register', form);
  }

  /**
   * Log into lemmy.
   */
  async login(form: Login): Promise<LoginResponse> {
    return this.wrapper(HttpType.Post, '/user/login', form);
  }

  /**
   * Get the details for a person.
   */
  async getPersonDetails(
    form: GetPersonDetails
  ): Promise<GetPersonDetailsResponse> {
    return this.wrapper(HttpType.Get, '/user', form);
  }

  /**
   * Get mentions for your user.
   */
  async getPersonMentions(
    form: GetPersonMentions
  ): Promise<GetPersonMentionsResponse> {
    return this.wrapper(HttpType.Get, '/user/mention', form);
  }

  /**
   * Mark a person mention as read.
   */
  async markPersonMentionAsRead(
    form: MarkPersonMentionAsRead
  ): Promise<PersonMentionResponse> {
    return this.wrapper(HttpType.Post, '/user/mention/mark_as_read', form);
  }

  /**
   * Get comment replies.
   */
  async getReplies(form: GetReplies): Promise<GetRepliesResponse> {
    return this.wrapper(HttpType.Get, '/user/replies', form);
  }

  /**
   * Ban a person from your site.
   */
  async banPerson(form: BanPerson): Promise<BanPersonResponse> {
    return this.wrapper(HttpType.Post, '/user/ban', form);
  }

  /**
   * Block a person.
   */
  async blockPerson(form: BlockPerson): Promise<BlockPersonResponse> {
    return this.wrapper(HttpType.Post, '/user/block', form);
  }

  /**
   * Fetch a Captcha.
   */
  async getCaptcha(): Promise<GetCaptchaResponse> {
    return this.wrapper(HttpType.Get, '/user/get_captcha', {});
  }

  /**
   * Delete your account.
   */
  async deleteAccount(form: DeleteAccount): Promise<LoginResponse> {
    return this.wrapper(HttpType.Post, '/user/delete_account', form);
  }

  /**
   * Reset your password.
   */
  async passwordReset(form: PasswordReset): Promise<PasswordResetResponse> {
    return this.wrapper(HttpType.Post, '/user/password_reset', form);
  }

  /**
   * Change your password from an email / token based reset.
   */
  async passwordChange(form: PasswordChange): Promise<LoginResponse> {
    return this.wrapper(HttpType.Post, '/user/password_change', form);
  }

  /**
   * Mark all replies as read.
   */
  async markAllAsRead(form: MarkAllAsRead): Promise<GetRepliesResponse> {
    return this.wrapper(HttpType.Post, '/user/mark_all_as_read', form);
  }

  /**
   * Save your user settings.
   */
  async saveUserSettings(form: SaveUserSettings): Promise<LoginResponse> {
    return this.wrapper(HttpType.Put, '/user/save_user_settings', form);
  }

  /**
   * Change your user password.
   */
  async changePassword(form: ChangePassword): Promise<LoginResponse> {
    return this.wrapper(HttpType.Put, '/user/change_password', form);
  }

  /**
   * Add an admin to your site.
   */
  async addAdmin(form: AddAdmin): Promise<AddAdminResponse> {
    return this.wrapper(HttpType.Post, '/admin/add', form);
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
        method: 'GET',
        headers: this.headers,
      }).then(d => d.json());
    } else {
      return fetch(this.buildFullUrl(endpoint), {
        method: type_,
        headers: {
          'Content-Type': 'application/json',
          ...this.headers,
        },
        body: JSON.stringify(form),
      }).then(d => d.json());
    }
  }
}

function encodeGetParams(p: any): string {
  return Object.entries(p)
    .map(kv => kv.map(encodeURIComponent).join('='))
    .join('&');
}
