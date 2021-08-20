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

export class LemmyHttp {
  private apiUrl: string;
  private headers: { [key: string]: string } = {};

  /**
   * Generates a new instance of LemmyHttp
   * @param baseUrl the base url, without the vX version: https://lemmy.ml -> goes to https://lemmy.ml/api/vX
   * @param headers optional headers. Should contain x-real-ip and x-forwarded-for
   */
  constructor(baseUrl: string, headers?: { [key: string]: string }) {
    this.apiUrl = `${baseUrl}/api/${VERSION}`;

    if (headers) {
      this.headers = headers;
    }
  }

  async getSite(form: GetSite): Promise<GetSiteResponse> {
    return this.wrapper(HttpType.Get, '/site', form);
  }

  async createSite(form: CreateSite): Promise<SiteResponse> {
    return this.wrapper(HttpType.Post, '/site', form);
  }

  async editSite(form: EditSite): Promise<SiteResponse> {
    return this.wrapper(HttpType.Put, '/site', form);
  }

  async transferSite(form: TransferSite): Promise<GetSiteResponse> {
    return this.wrapper(HttpType.Post, '/site/transfer', form);
  }

  async getSiteConfig(form: GetSiteConfig): Promise<GetSiteConfigResponse> {
    return this.wrapper(HttpType.Get, '/site/config', form);
  }

  async saveSiteConfig(form: SaveSiteConfig): Promise<GetSiteConfigResponse> {
    return this.wrapper(HttpType.Put, '/site/config', form);
  }

  async getModlog(form: GetModlog): Promise<GetModlogResponse> {
    return this.wrapper(HttpType.Get, '/modlog', form);
  }

  async search(form: Search): Promise<SearchResponse> {
    return this.wrapper(HttpType.Get, '/search', form);
  }

  async createCommunity(form: CreateCommunity): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Post, '/community', form);
  }

  async getCommunity(form: GetCommunity): Promise<GetCommunityResponse> {
    return this.wrapper(HttpType.Get, '/community', form);
  }

  async editCommunity(form: EditCommunity): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Put, '/community', form);
  }

  async listCommunities(
    form: ListCommunities
  ): Promise<ListCommunitiesResponse> {
    return this.wrapper(HttpType.Get, '/community/list', form);
  }

  async followCommunity(form: FollowCommunity): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/follow', form);
  }

  async blockCommunity(form: BlockCommunity): Promise<BlockCommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/block', form);
  }

  async deleteCommunity(form: DeleteCommunity): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/delete', form);
  }

  async removeCommunity(form: RemoveCommunity): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/remove', form);
  }

  async transferCommunity(
    form: TransferCommunity
  ): Promise<GetCommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/transfer', form);
  }

  async banFromCommunity(
    form: BanFromCommunity
  ): Promise<BanFromCommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/ban_user', form);
  }

  async addModToCommunity(
    form: AddModToCommunity
  ): Promise<AddModToCommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/mod', form);
  }

  async createPost(form: CreatePost): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post', form);
  }

  async getPost(form: GetPost): Promise<GetPostResponse> {
    return this.wrapper(HttpType.Get, '/post', form);
  }

  async editPost(form: EditPost): Promise<PostResponse> {
    return this.wrapper(HttpType.Put, '/post', form);
  }

  async deletePost(form: DeletePost): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post/delete', form);
  }

  async removePost(form: RemovePost): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post/remove', form);
  }

  async lockPost(form: LockPost): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post/lock', form);
  }

  async stickyPost(form: StickyPost): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post/sticky', form);
  }

  async getPosts(form: GetPosts): Promise<GetPostsResponse> {
    return this.wrapper(HttpType.Get, '/post/list', form);
  }

  async likePost(form: CreatePostLike): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post/like', form);
  }

  async savePost(form: SavePost): Promise<PostResponse> {
    return this.wrapper(HttpType.Put, '/post/save', form);
  }

  async getSiteMetadata(
    form: GetSiteMetadata
  ): Promise<GetSiteMetadataResponse> {
    return this.wrapper(HttpType.Get, '/post/site_metadata', form);
  }

  async createComment(form: CreateComment): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, '/comment', form);
  }

  async editComment(form: EditComment): Promise<CommentResponse> {
    return this.wrapper(HttpType.Put, '/comment', form);
  }

  async deleteComment(form: DeleteComment): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, '/comment/delete', form);
  }

  async removeComment(form: RemoveComment): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, '/comment/remove', form);
  }

  async markCommentAsRead(form: MarkCommentAsRead): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, '/comment/mark_as_read', form);
  }

  async likeComment(form: CreateCommentLike): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, '/comment/like', form);
  }

  async saveComment(form: SaveComment): Promise<CommentResponse> {
    return this.wrapper(HttpType.Put, '/comment/save', form);
  }

  async getComments(form: GetComments): Promise<GetCommentsResponse> {
    return this.wrapper(HttpType.Get, '/comment/list', form);
  }

  async getPrivateMessages(
    form: GetPrivateMessages
  ): Promise<PrivateMessagesResponse> {
    return this.wrapper(HttpType.Get, '/private_message/list', form);
  }

  async createPrivateMessage(
    form: CreatePrivateMessage
  ): Promise<PrivateMessageResponse> {
    return this.wrapper(HttpType.Post, '/private_message', form);
  }

  async editPrivateMessage(
    form: EditPrivateMessage
  ): Promise<PrivateMessageResponse> {
    return this.wrapper(HttpType.Put, '/private_message', form);
  }

  async deletePrivateMessage(
    form: DeletePrivateMessage
  ): Promise<PrivateMessageResponse> {
    return this.wrapper(HttpType.Post, '/private_message/delete', form);
  }

  async markPrivateMessageAsRead(
    form: MarkPrivateMessageAsRead
  ): Promise<PrivateMessageResponse> {
    return this.wrapper(HttpType.Post, '/private_message/mark_as_read', form);
  }

  async register(form: Register): Promise<LoginResponse> {
    return this.wrapper(HttpType.Post, '/user/register', form);
  }

  async login(form: Login): Promise<LoginResponse> {
    return this.wrapper(HttpType.Post, '/user/login', form);
  }

  async getPersonDetails(
    form: GetPersonDetails
  ): Promise<GetPersonDetailsResponse> {
    return this.wrapper(HttpType.Get, '/user', form);
  }

  async getPersonMentions(
    form: GetPersonMentions
  ): Promise<GetPersonMentionsResponse> {
    return this.wrapper(HttpType.Get, '/user/mention', form);
  }

  async markPersonMentionAsRead(
    form: MarkPersonMentionAsRead
  ): Promise<PersonMentionResponse> {
    return this.wrapper(HttpType.Post, '/user/mention/mark_as_read', form);
  }

  async getReplies(form: GetReplies): Promise<GetRepliesResponse> {
    return this.wrapper(HttpType.Get, '/user/replies', form);
  }

  async banPerson(form: BanPerson): Promise<BanPersonResponse> {
    return this.wrapper(HttpType.Post, '/user/ban', form);
  }

  async blockPerson(form: BlockPerson): Promise<BlockPersonResponse> {
    return this.wrapper(HttpType.Post, '/user/block', form);
  }

  async getCaptcha(): Promise<GetCaptchaResponse> {
    return this.wrapper(HttpType.Get, '/user/get_captcha', {});
  }

  async deleteAccount(form: DeleteAccount): Promise<LoginResponse> {
    return this.wrapper(HttpType.Post, '/user/delete_account', form);
  }

  async passwordReset(form: PasswordReset): Promise<PasswordResetResponse> {
    return this.wrapper(HttpType.Post, '/user/password_reset', form);
  }

  async passwordChange(form: PasswordChange): Promise<LoginResponse> {
    return this.wrapper(HttpType.Post, '/user/password_change', form);
  }

  async markAllAsRead(form: MarkAllAsRead): Promise<GetRepliesResponse> {
    return this.wrapper(HttpType.Post, '/user/mark_all_as_read', form);
  }

  async saveUserSettings(form: SaveUserSettings): Promise<LoginResponse> {
    return this.wrapper(HttpType.Put, '/user/save_user_settings', form);
  }

  async changePassword(form: ChangePassword): Promise<LoginResponse> {
    return this.wrapper(HttpType.Put, '/user/change_password', form);
  }

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
