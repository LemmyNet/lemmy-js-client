import fetch from 'node-fetch';
import {
  MessageType,
  LoginForm,
  RegisterForm,
  CommunityForm,
  DeleteCommunityForm,
  RemoveCommunityForm,
  PostForm,
  DeletePostForm,
  RemovePostForm,
  LockPostForm,
  StickyPostForm,
  SavePostForm,
  CommentForm,
  DeleteCommentForm,
  RemoveCommentForm,
  MarkCommentAsReadForm,
  SaveCommentForm,
  CommentLikeForm,
  GetPostForm,
  GetPostsForm,
  CreatePostLikeForm,
  GetCommunityForm,
  FollowCommunityForm,
  GetFollowedCommunitiesForm,
  GetUserDetailsForm,
  ListCommunitiesForm,
  GetModlogForm,
  BanFromCommunityForm,
  AddModToCommunityForm,
  TransferCommunityForm,
  AddAdminForm,
  TransferSiteForm,
  BanUserForm,
  SiteForm,
  GetRepliesForm,
  GetUserMentionsForm,
  MarkUserMentionAsReadForm,
  SearchForm,
  UserSettingsForm,
  DeleteAccountForm,
  PasswordResetForm,
  PasswordChangeForm,
  PrivateMessageForm,
  EditPrivateMessageForm,
  DeletePrivateMessageForm,
  MarkPrivateMessageAsReadForm,
  GetPrivateMessagesForm,
  GetCommentsForm,
  UserJoinForm,
  GetSiteConfig,
  GetSiteForm,
  SiteConfigForm,
  MarkAllAsReadForm,
  GetSiteResponse,
  GetSiteConfigResponse,
  SiteResponse,
  LoginResponse,
  ListCategoriesResponse,
  GetModlogResponse,
  SearchResponse,
  PostResponse,
  CommentResponse,
  CommunityResponse,
  GetRepliesResponse,
  BanUserResponse,
  GetPostResponse,
  AddAdminResponse,
  GetPostsResponse,
  UserJoinResponse,
  GetCaptchaResponse,
  GetCommentsResponse,
  UserDetailsResponse,
  UserMentionResponse,
  GetUserMentionsResponse,
  GetCommunityResponse,
  PrivateMessageResponse,
  ListCommunitiesResponse,
  PrivateMessagesResponse,
  BanFromCommunityResponse,
  AddModToCommunityResponse,
  GetFollowedCommunitiesResponse,
  PasswordResetResponse,
  PostJoinForm,
  PostJoinResponse,
  CommunityJoinForm,
  CommunityJoinResponse,
} from './interfaces';

enum HttpType {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
}

export class LemmyHttp {
  private baseUrl: string;
  private headers: { [key: string]: string } = {};

  constructor(baseUrl: string, headers?: { [key: string]: string }) {
    this.baseUrl = baseUrl;

    if (headers) {
      this.headers = headers;
    }
  }

  async getSite(form: GetSiteForm): Promise<GetSiteResponse> {
    return this.wrapper(HttpType.Get, '/site', form);
  }

  async createSite(form: SiteForm): Promise<SiteResponse> {
    return this.wrapper(HttpType.Post, '/site', form);
  }

  async editSite(form: SiteForm): Promise<SiteResponse> {
    return this.wrapper(HttpType.Put, '/site', form);
  }

  async transferSite(form: TransferSiteForm): Promise<GetSiteResponse> {
    return this.wrapper(HttpType.Post, '/site/transfer', form);
  }

  async getSiteConfig(form: GetSiteConfig): Promise<GetSiteConfigResponse> {
    return this.wrapper(HttpType.Get, '/site/config', form);
  }

  async saveSiteConfig(form: SiteConfigForm): Promise<GetSiteConfigResponse> {
    return this.wrapper(HttpType.Put, '/site/config', form);
  }

  async listCategories(): Promise<ListCategoriesResponse> {
    return this.wrapper(HttpType.Get, '/categories', {});
  }

  async getModlog(form: GetModlogForm): Promise<GetModlogResponse> {
    return this.wrapper(HttpType.Get, '/modlog', form);
  }

  async search(form: SearchForm): Promise<SearchResponse> {
    return this.wrapper(HttpType.Get, '/search', form);
  }

  async createCommunity(form: CommunityForm): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Post, '/community', form);
  }

  async getCommunity(form: GetCommunityForm): Promise<GetCommunityResponse> {
    return this.wrapper(HttpType.Get, '/community', form);
  }

  async editCommunity(form: CommunityForm): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Put, '/community', form);
  }

  async listCommunities(
    form: ListCommunitiesForm
  ): Promise<ListCommunitiesResponse> {
    return this.wrapper(HttpType.Get, '/community/list', form);
  }

  async followCommunity(form: FollowCommunityForm): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/follow', form);
  }

  async deleteCommunity(form: DeleteCommunityForm): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/delete', form);
  }

  async removeCommunity(form: RemoveCommunityForm): Promise<CommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/remove', form);
  }

  async transferCommunity(
    form: TransferCommunityForm
  ): Promise<GetCommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/transfer', form);
  }

  async banFromCommunity(
    form: BanFromCommunityForm
  ): Promise<BanFromCommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/ban_user', form);
  }

  async addModToCommunity(
    form: AddModToCommunityForm
  ): Promise<AddModToCommunityResponse> {
    return this.wrapper(HttpType.Post, '/community/mod', form);
  }

  async createPost(form: PostForm): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post', form);
  }

  async getPost(form: GetPostForm): Promise<GetPostResponse> {
    return this.wrapper(HttpType.Get, '/post', form);
  }

  async editPost(form: PostForm): Promise<PostResponse> {
    return this.wrapper(HttpType.Put, '/post', form);
  }

  async deletePost(form: DeletePostForm): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post/delete', form);
  }

  async removePost(form: RemovePostForm): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post/remove', form);
  }

  async lockPost(form: LockPostForm): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post/lock', form);
  }

  async stickyPost(form: StickyPostForm): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post/sticky', form);
  }

  async getPosts(form: GetPostsForm): Promise<GetPostsResponse> {
    return this.wrapper(HttpType.Get, '/post/list', form);
  }

  async likePost(form: CreatePostLikeForm): Promise<PostResponse> {
    return this.wrapper(HttpType.Post, '/post/like', form);
  }

  async savePost(form: SavePostForm): Promise<PostResponse> {
    return this.wrapper(HttpType.Put, '/post/save', form);
  }

  async createComment(form: CommentForm): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, '/comment', form);
  }

  async editComment(form: CommentForm): Promise<CommentResponse> {
    return this.wrapper(HttpType.Put, '/comment', form);
  }

  async deleteComment(form: DeleteCommentForm): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, '/comment/delete', form);
  }

  async removeComment(form: RemoveCommentForm): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, '/comment/remove', form);
  }

  async markCommentAsRead(
    form: MarkCommentAsReadForm
  ): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, '/comment/mark_as_read', form);
  }

  async likeComment(form: CommentLikeForm): Promise<CommentResponse> {
    return this.wrapper(HttpType.Post, '/comment/like', form);
  }

  async saveComment(form: SaveCommentForm): Promise<CommentResponse> {
    return this.wrapper(HttpType.Put, '/comment/save', form);
  }

  async getComments(form: GetCommentsForm): Promise<GetCommentsResponse> {
    return this.wrapper(HttpType.Get, '/comment/list', form);
  }

  async getPrivateMessages(
    form: GetPrivateMessagesForm
  ): Promise<PrivateMessagesResponse> {
    return this.wrapper(HttpType.Get, '/private_message/list', form);
  }

  async createPrivateMessage(
    form: PrivateMessageForm
  ): Promise<PrivateMessageResponse> {
    return this.wrapper(HttpType.Post, '/private_message', form);
  }

  async editPrivateMessage(
    form: EditPrivateMessageForm
  ): Promise<PrivateMessageResponse> {
    return this.wrapper(HttpType.Put, '/private_message', form);
  }

  async deletePrivateMessage(
    form: DeletePrivateMessageForm
  ): Promise<PrivateMessageResponse> {
    return this.wrapper(HttpType.Post, '/private_message/delete', form);
  }

  async markPrivateMessageAsRead(
    form: MarkPrivateMessageAsReadForm
  ): Promise<PrivateMessageResponse> {
    return this.wrapper(HttpType.Post, '/private_message/mark_as_read', form);
  }

  async register(form: RegisterForm): Promise<LoginResponse> {
    return this.wrapper(HttpType.Post, '/user/register', form);
  }

  async login(form: LoginForm): Promise<LoginResponse> {
    return this.wrapper(HttpType.Post, '/user/login', form);
  }

  async getUserDetails(form: GetUserDetailsForm): Promise<UserDetailsResponse> {
    return this.wrapper(HttpType.Get, '/user', form);
  }

  async getUserMentions(
    form: GetUserMentionsForm
  ): Promise<GetUserMentionsResponse> {
    return this.wrapper(HttpType.Get, '/user/mention', form);
  }

  async markUserMentionAsRead(
    form: MarkUserMentionAsReadForm
  ): Promise<UserMentionResponse> {
    return this.wrapper(HttpType.Post, '/user/mention/mark_as_read', form);
  }

  async getReplies(form: GetRepliesForm): Promise<GetRepliesResponse> {
    return this.wrapper(HttpType.Get, '/user/replies', form);
  }

  async getFollowedCommunities(
    form: GetFollowedCommunitiesForm
  ): Promise<GetFollowedCommunitiesResponse> {
    return this.wrapper(HttpType.Get, '/user/followed_communities', form);
  }

  async userJoin(form: UserJoinForm): Promise<UserJoinResponse> {
    return this.wrapper(HttpType.Post, '/user/join', form);
  }

  async postJoin(form: PostJoinForm): Promise<PostJoinResponse> {
    return this.wrapper(HttpType.Post, '/post/join', form);
  }

  async communityJoin(form: CommunityJoinForm): Promise<CommunityJoinResponse> {
    return this.wrapper(HttpType.Post, '/community/join', form);
  }

  async banUser(form: BanUserForm): Promise<BanUserResponse> {
    return this.wrapper(HttpType.Post, '/user/ban', form);
  }

  async getCaptcha(): Promise<GetCaptchaResponse> {
    return this.wrapper(HttpType.Get, '/user/get_captcha', {});
  }

  async deleteAccount(form: DeleteAccountForm): Promise<LoginResponse> {
    return this.wrapper(HttpType.Post, '/user/delete_account', form);
  }

  async passwordReset(form: PasswordResetForm): Promise<PasswordResetResponse> {
    return this.wrapper(HttpType.Post, '/user/password_reset', form);
  }

  async passwordChange(form: PasswordChangeForm): Promise<LoginResponse> {
    return this.wrapper(HttpType.Post, '/user/password_change', form);
  }

  async markAllAsRead(form: MarkAllAsReadForm): Promise<LoginResponse> {
    return this.wrapper(HttpType.Post, '/user/mark_all_as_read', form);
  }

  async saveUserSettings(form: UserSettingsForm): Promise<LoginResponse> {
    return this.wrapper(HttpType.Put, '/user/save_user_settings', form);
  }

  async addAdmin(form: AddAdminForm): Promise<AddAdminResponse> {
    return this.wrapper(HttpType.Post, '/admin/add', form);
  }

  private buildFullUrl(endpoint: string): string {
    return `${this.baseUrl}${endpoint}`;
  }

  private async wrapper<Res>(
    type_: HttpType,
    endpoint: string,
    form: MessageType
  ): Promise<Res> {
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
