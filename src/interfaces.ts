export enum UserOperation {
  Login,
  Register,
  GetCaptcha,
  CreateCommunity,
  CreatePost,
  ListCommunities,
  ListCategories,
  GetPost,
  GetCommunity,
  CreateComment,
  EditComment,
  DeleteComment,
  RemoveComment,
  MarkCommentAsRead,
  SaveComment,
  CreateCommentLike,
  GetPosts,
  CreatePostLike,
  EditPost,
  DeletePost,
  RemovePost,
  LockPost,
  StickyPost,
  SavePost,
  EditCommunity,
  DeleteCommunity,
  RemoveCommunity,
  FollowCommunity,
  GetFollowedCommunities,
  GetUserDetails,
  GetReplies,
  GetUserMentions,
  MarkUserMentionAsRead,
  GetModlog,
  BanFromCommunity,
  AddModToCommunity,
  CreateSite,
  EditSite,
  GetSite,
  AddAdmin,
  BanUser,
  Search,
  MarkAllAsRead,
  SaveUserSettings,
  TransferCommunity,
  TransferSite,
  DeleteAccount,
  PasswordReset,
  PasswordChange,
  CreatePrivateMessage,
  EditPrivateMessage,
  DeletePrivateMessage,
  MarkPrivateMessageAsRead,
  GetPrivateMessages,
  UserJoin,
  GetComments,
  GetSiteConfig,
  SaveSiteConfig,
  PostJoin,
  CommunityJoin,
}

export enum SortType {
  Active = 'Active',
  Hot = 'Hot',
  New = 'New',
  TopDay = 'TopDay',
  TopWeek = 'TopWeek',
  TopMonth = 'TopMonth',
  TopYear = 'TopYear',
  TopAll = 'TopAll',
}

export enum ListingType {
  All = 'All',
  Local = 'Local',
  Subscribed = 'Subscribed',
  Community = 'Community',
}

export enum SearchType {
  All = 'All',
  Comments = 'Comments',
  Posts = 'Posts',
  Communities = 'Communities',
  Users = 'Users',
  Url = 'Url',
}

export interface User {
  id: number;
  name: string;
  preferred_username?: string;
  email?: string;
  avatar?: string;
  banner?: string;
  admin: boolean;
  banned: boolean;
  published: string;
  updated?: string;
  show_nsfw: boolean;
  theme: string;
  default_sort_type: number;
  default_listing_type: number;
  lang: string;
  show_avatars: boolean;
  send_notifications_to_email: boolean;
  matrix_user_id?: string;
  actor_id: string;
  bio?: string;
  local: boolean;
  last_refreshed_at: string;
}

export interface UserView {
  id: number;
  actor_id: string;
  name: string;
  preferred_username?: string;
  avatar?: string;
  banner?: string;
  matrix_user_id?: string;
  bio?: string;
  local: boolean;
  published: string;
  number_of_posts: number;
  post_score: number;
  number_of_comments: number;
  comment_score: number;
  banned: boolean;
}

export interface CommunityUser {
  id: number;
  user_id: number;
  user_actor_id: string;
  user_local: boolean;
  user_name: string;
  user_preferred_username?: string;
  avatar?: string;
  community_id: number;
  community_actor_id: string;
  community_local: boolean;
  community_name: string;
  community_icon?: string;
  published: string;
}

export interface Community {
  id: number;
  actor_id: string;
  local: boolean;
  name: string;
  title: string;
  icon?: string;
  banner?: string;
  description?: string;
  category_id: number;
  creator_id: number;
  removed: boolean;
  deleted: boolean;
  nsfw: boolean;
  published: string;
  updated?: string;
  creator_actor_id: string;
  creator_local: boolean;
  last_refreshed_at: string;
  creator_name: string;
  creator_preferred_username?: string;
  creator_avatar?: string;
  category_name: string;
  number_of_subscribers: number;
  number_of_posts: number;
  number_of_comments: number;
  user_id?: number;
  subscribed?: boolean;
}

export interface Post {
  id: number;
  name: string;
  url?: string;
  body?: string;
  creator_id: number;
  community_id: number;
  removed: boolean;
  deleted: boolean;
  locked: boolean;
  stickied: boolean;
  embed_title?: string;
  embed_description?: string;
  embed_html?: string;
  thumbnail_url?: string;
  ap_id: string;
  local: boolean;
  nsfw: boolean;
  banned: boolean;
  banned_from_community: boolean;
  published: string;
  updated?: string;
  creator_actor_id: string;
  creator_local: boolean;
  creator_name: string;
  creator_preferred_username?: string;
  creator_published: string;
  creator_avatar?: string;
  community_actor_id: string;
  community_local: boolean;
  community_name: string;
  community_icon?: string;
  community_removed: boolean;
  community_deleted: boolean;
  community_nsfw: boolean;
  number_of_comments: number;
  score: number;
  upvotes: number;
  downvotes: number;
  hot_rank: number;
  hot_rank_active: number;
  newest_activity_time: string;
  user_id?: number;
  my_vote?: number;
  subscribed?: boolean;
  read?: boolean;
  saved?: boolean;
  duplicates?: Post[];
}

export interface Comment {
  id: number;
  ap_id: string;
  local: boolean;
  creator_id: number;
  post_id: number;
  post_name: string;
  parent_id?: number;
  content: string;
  removed: boolean;
  deleted: boolean;
  read: boolean;
  published: string;
  updated?: string;
  community_id: number;
  community_actor_id: string;
  community_local: boolean;
  community_name: string;
  community_icon?: string;
  banned: boolean;
  banned_from_community: boolean;
  creator_actor_id: string;
  creator_local: boolean;
  creator_name: string;
  creator_preferred_username?: string;
  creator_avatar?: string;
  creator_published: string;
  score: number;
  upvotes: number;
  downvotes: number;
  hot_rank: number;
  hot_rank_active: number;
  user_id?: number;
  my_vote?: number;
  subscribed?: number;
  saved?: boolean;
  user_mention_id?: number; // For mention type
  recipient_id?: number;
  recipient_actor_id?: string;
  recipient_local?: boolean;
  depth?: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface Site {
  id: number;
  name: string;
  description?: string;
  creator_id: number;
  published: string;
  updated?: string;
  creator_name: string;
  creator_preferred_username?: string;
  number_of_users: number;
  number_of_posts: number;
  number_of_comments: number;
  number_of_communities: number;
  enable_downvotes: boolean;
  open_registration: boolean;
  enable_nsfw: boolean;
  icon?: string;
  banner?: string;
}

export interface PrivateMessage {
  id: number;
  creator_id: number;
  recipient_id: number;
  content: string;
  deleted: boolean;
  read: boolean;
  published: string;
  updated?: string;
  ap_id: string;
  local: boolean;
  creator_name: string;
  creator_preferred_username?: string;
  creator_avatar?: string;
  creator_actor_id: string;
  creator_local: boolean;
  recipient_name: string;
  recipient_preferred_username?: string;
  recipient_avatar?: string;
  recipient_actor_id: string;
  recipient_local: boolean;
}

export interface FollowCommunityForm {
  community_id: number;
  follow: boolean;
  auth?: string;
}

export interface GetFollowedCommunitiesForm {
  auth: string;
}

export interface GetFollowedCommunitiesResponse {
  communities: CommunityUser[];
}

export interface GetUserDetailsForm {
  user_id?: number;
  username?: string;
  sort: SortType;
  page?: number;
  limit?: number;
  community_id?: number;
  saved_only: boolean;
}

export interface UserDetailsResponse {
  user: UserView;
  follows: CommunityUser[];
  moderates: CommunityUser[];
  comments: Comment[];
  posts: Post[];
  admins: UserView[];
}

export interface GetRepliesForm {
  sort: SortType;
  page?: number;
  limit?: number;
  unread_only: boolean;
  auth?: string;
}

export interface GetRepliesResponse {
  replies: Comment[];
}

export interface GetUserMentionsForm {
  sort: SortType;
  page?: number;
  limit?: number;
  unread_only: boolean;
  auth?: string;
}

export interface GetUserMentionsResponse {
  mentions: Comment[];
}

export interface MarkUserMentionAsReadForm {
  user_mention_id: number;
  read: boolean;
  auth?: string;
}

export interface UserMentionResponse {
  mention: Comment;
}

export interface BanFromCommunityForm {
  community_id: number;
  user_id: number;
  ban: boolean;
  remove_data?: boolean;
  reason?: string;
  expires?: number;
  auth?: string;
}

export interface BanFromCommunityResponse {
  user: UserView;
  banned: boolean;
}

export interface AddModToCommunityForm {
  community_id: number;
  user_id: number;
  added: boolean;
  auth?: string;
}

export interface TransferCommunityForm {
  community_id: number;
  user_id: number;
  auth?: string;
}

export interface TransferSiteForm {
  user_id: number;
  auth?: string;
}

export interface AddModToCommunityResponse {
  moderators: CommunityUser[];
}

export interface GetModlogForm {
  mod_user_id?: number;
  community_id?: number;
  page?: number;
  limit?: number;
}

export interface ModRemovePost {
  id: number;
  mod_user_id: number;
  post_id: number;
  reason?: string;
  removed?: boolean;
  when_: string;
  mod_user_name: string;
  post_name: string;
  community_id: number;
  community_name: string;
}

export interface ModLockPost {
  id: number;
  mod_user_id: number;
  post_id: number;
  locked?: boolean;
  when_: string;
  mod_user_name: string;
  post_name: string;
  community_id: number;
  community_name: string;
}

export interface ModStickyPost {
  id: number;
  mod_user_id: number;
  post_id: number;
  stickied?: boolean;
  when_: string;
  mod_user_name: string;
  post_name: string;
  community_id: number;
  community_name: string;
}

export interface ModRemoveComment {
  id: number;
  mod_user_id: number;
  comment_id: number;
  reason?: string;
  removed?: boolean;
  when_: string;
  mod_user_name: string;
  comment_user_id: number;
  comment_user_name: string;
  comment_content: string;
  post_id: number;
  post_name: string;
  community_id: number;
  community_name: string;
}

export interface ModRemoveCommunity {
  id: number;
  mod_user_id: number;
  community_id: number;
  reason?: string;
  removed?: boolean;
  expires?: number;
  when_: string;
  mod_user_name: string;
  community_name: string;
}

export interface ModBanFromCommunity {
  id: number;
  mod_user_id: number;
  other_user_id: number;
  community_id: number;
  reason?: string;
  banned?: boolean;
  expires?: number;
  when_: string;
  mod_user_name: string;
  other_user_name: string;
  community_name: string;
}

export interface ModBan {
  id: number;
  mod_user_id: number;
  other_user_id: number;
  reason?: string;
  banned?: boolean;
  expires?: number;
  when_: string;
  mod_user_name: string;
  other_user_name: string;
}

export interface ModAddCommunity {
  id: number;
  mod_user_id: number;
  other_user_id: number;
  community_id: number;
  removed?: boolean;
  when_: string;
  mod_user_name: string;
  other_user_name: string;
  community_name: string;
}

export interface ModAdd {
  id: number;
  mod_user_id: number;
  other_user_id: number;
  removed?: boolean;
  when_: string;
  mod_user_name: string;
  other_user_name: string;
}

export interface LoginForm {
  username_or_email: string;
  password: string;
}

export interface GetModlogResponse {
  removed_posts: ModRemovePost[];
  locked_posts: ModLockPost[];
  stickied_posts: ModStickyPost[];
  removed_comments: ModRemoveComment[];
  removed_communities: ModRemoveCommunity[];
  banned_from_community: ModBanFromCommunity[];
  banned: ModBan[];
  added_to_community: ModAddCommunity[];
  added: ModAdd[];
}

export interface RegisterForm {
  username: string;
  email?: string;
  password: string;
  password_verify: string;
  admin: boolean;
  show_nsfw: boolean;
  captcha_uuid?: string;
  captcha_answer?: string;
}

export interface GetCaptchaResponse {
  ok?: {
    png: string;
    wav?: string;
    uuid: string;
  };
}

export interface LoginResponse {
  jwt: string;
}

export interface UserSettingsForm {
  show_nsfw: boolean;
  theme: string;
  default_sort_type: number;
  default_listing_type: number;
  lang: string;
  avatar?: string;
  banner?: string;
  preferred_username?: string;
  email?: string;
  bio?: string;
  matrix_user_id?: string;
  new_password?: string;
  new_password_verify?: string;
  old_password?: string;
  show_avatars: boolean;
  send_notifications_to_email: boolean;
  auth: string;
}

export interface CommunityForm {
  name: string;
  edit_id?: number;
  title: string;
  description?: string;
  icon?: string;
  banner?: string;
  category_id: number;
  nsfw: boolean;
  auth?: string;
}

export interface DeleteCommunityForm {
  edit_id: number;
  deleted: boolean;
  auth?: string;
}

export interface RemoveCommunityForm {
  edit_id: number;
  removed: boolean;
  reason?: string;
  expires?: number;
  auth?: string;
}

export interface GetCommunityForm {
  id?: number;
  name?: string;
  auth?: string;
}

export interface GetCommunityResponse {
  community: Community;
  moderators: CommunityUser[];
  online: number;
}

export interface CommunityResponse {
  community: Community;
}

export interface ListCommunitiesForm {
  sort: SortType;
  page?: number;
  limit?: number;
  auth?: string;
}

export interface ListCommunitiesResponse {
  communities: Community[];
}

export interface ListCategoriesResponse {
  categories: Category[];
}

export interface PostForm {
  name: string;
  url?: string;
  body?: string;
  community_id?: number;
  edit_id?: number;
  nsfw: boolean;
  auth: string;
}

export interface DeletePostForm {
  edit_id: number;
  deleted: boolean;
  auth: string;
}

export interface RemovePostForm {
  edit_id: number;
  removed: boolean;
  reason?: string;
  auth: string;
}

export interface LockPostForm {
  edit_id: number;
  locked: boolean;
  auth: string;
}

export interface StickyPostForm {
  edit_id: number;
  stickied: boolean;
  auth: string;
}

export interface PostFormParams {
  name: string;
  url?: string;
  body?: string;
  community_name?: string;
  community_id?: number;
}

export interface GetPostForm {
  id: number;
  auth?: string;
}

export interface GetPostResponse {
  post: Post;
  comments: Comment[];
  community: Community;
  moderators: CommunityUser[];
  online: number;
}

export interface SavePostForm {
  post_id: number;
  save: boolean;
  auth?: string;
}

export interface PostResponse {
  post: Post;
}

export interface CommentForm {
  content: string;
  post_id?: number;
  parent_id?: number;
  edit_id?: number;
  creator_id?: number;
  form_id?: string;
  auth: string;
}

export interface DeleteCommentForm {
  edit_id: number;
  deleted: boolean;
  auth: string;
}

export interface RemoveCommentForm {
  edit_id: number;
  removed: boolean;
  reason?: string;
  auth: string;
}

export interface MarkCommentAsReadForm {
  edit_id: number;
  read: boolean;
  auth: string;
}

export interface SaveCommentForm {
  comment_id: number;
  save: boolean;
  auth?: string;
}

export interface CommentResponse {
  comment: Comment;
  recipient_ids: number[];
  form_id?: string;
}

export interface CommentLikeForm {
  comment_id: number;
  score: number;
  auth?: string;
}

export interface CommentNode {
  comment: Comment;
  children?: CommentNode[];
}

export interface GetPostsForm {
  type_: ListingType;
  sort: SortType;
  page?: number;
  limit?: number;
  community_id?: number;
  community_name?: string;
  auth?: string;
}

export interface GetPostsResponse {
  posts: Post[];
}

export interface GetCommentsForm {
  type_: ListingType;
  sort: SortType;
  page?: number;
  limit: number;
  community_id?: number;
  community_name?: string;
  auth?: string;
}

export interface GetCommentsResponse {
  comments: Comment[];
}

export interface CreatePostLikeForm {
  post_id: number;
  score: number;
  auth?: string;
}

export interface SiteForm {
  name: string;
  description?: string;
  icon?: string;
  banner?: string;
  enable_downvotes: boolean;
  open_registration: boolean;
  enable_nsfw: boolean;
  auth?: string;
}

export interface GetSiteConfig {
  auth?: string;
}

export interface GetSiteForm {
  auth?: string;
}

export interface GetSiteConfigResponse {
  config_hjson: string;
}

export interface SiteConfigForm {
  config_hjson: string;
  auth?: string;
}

export interface GetSiteResponse {
  site: Site;
  admins: UserView[];
  banned: UserView[];
  online: number;
  version: string;
  my_user?: User;
  federated_instances: string[];
}

export interface SiteResponse {
  site: Site;
}

export interface BanUserForm {
  user_id: number;
  ban: boolean;
  remove_data?: boolean;
  reason?: string;
  expires?: number;
  auth?: string;
}

export interface BanUserResponse {
  user: UserView;
  banned: boolean;
}

export interface AddAdminForm {
  user_id: number;
  added: boolean;
  auth?: string;
}

export interface AddAdminResponse {
  admins: UserView[];
}

export interface SearchForm {
  q: string;
  type_: SearchType;
  community_id?: number;
  community_name?: string;
  sort: SortType;
  page?: number;
  limit?: number;
  auth?: string;
}

export interface SearchResponse {
  type_: SearchType;
  posts?: Post[];
  comments?: Comment[];
  communities: Community[];
  users: UserView[];
}

export interface DeleteAccountForm {
  password: string;
}

export interface PasswordResetForm {
  email: string;
}

export interface PasswordResetResponse {}

export interface MarkAllAsReadForm {
  auth: string;
}

export interface PasswordChangeForm {
  token: string;
  password: string;
  password_verify: string;
}

export interface PrivateMessageForm {
  content: string;
  recipient_id: number;
  auth?: string;
}

export interface PrivateMessageFormParams {
  recipient_id: number;
}

export interface EditPrivateMessageForm {
  edit_id: number;
  content: string;
  auth?: string;
}

export interface DeletePrivateMessageForm {
  edit_id: number;
  deleted: boolean;
  auth?: string;
}

export interface MarkPrivateMessageAsReadForm {
  edit_id: number;
  read: boolean;
  auth?: string;
}

export interface GetPrivateMessagesForm {
  unread_only: boolean;
  page?: number;
  limit?: number;
  auth?: string;
}

export interface PrivateMessagesResponse {
  messages: PrivateMessage[];
}

export interface PrivateMessageResponse {
  message: PrivateMessage;
}

export interface UserJoinForm {
  auth: string;
}

export interface UserJoinResponse {
  joined: boolean;
}

export interface PostJoinForm {
  post_id: number;
}

export interface PostJoinResponse {
  joined: boolean;
}

export interface CommunityJoinForm {
  community_id: number;
}

export interface CommunityJoinResponse {
  joined: boolean;
}

export type MessageType =
  | LoginForm
  | RegisterForm
  | CommunityForm
  | DeleteCommunityForm
  | RemoveCommunityForm
  | FollowCommunityForm
  | ListCommunitiesForm
  | GetFollowedCommunitiesForm
  | PostForm
  | DeletePostForm
  | RemovePostForm
  | LockPostForm
  | StickyPostForm
  | GetPostForm
  | GetPostsForm
  | GetCommunityForm
  | CommentForm
  | DeleteCommentForm
  | RemoveCommentForm
  | MarkCommentAsReadForm
  | CommentLikeForm
  | SaveCommentForm
  | CreatePostLikeForm
  | BanFromCommunityForm
  | AddAdminForm
  | AddModToCommunityForm
  | TransferCommunityForm
  | TransferSiteForm
  | SaveCommentForm
  | BanUserForm
  | AddAdminForm
  | GetUserDetailsForm
  | GetRepliesForm
  | GetUserMentionsForm
  | MarkUserMentionAsReadForm
  | GetModlogForm
  | SiteForm
  | SearchForm
  | UserSettingsForm
  | DeleteAccountForm
  | PasswordResetForm
  | PasswordChangeForm
  | PrivateMessageForm
  | EditPrivateMessageForm
  | DeletePrivateMessageForm
  | MarkPrivateMessageAsReadForm
  | GetPrivateMessagesForm
  | SiteConfigForm
  | PostJoinForm
  | CommunityJoinForm;

type ResponseType =
  | SiteResponse
  | GetFollowedCommunitiesResponse
  | ListCommunitiesResponse
  | GetPostsResponse
  | PostResponse
  | GetRepliesResponse
  | GetUserMentionsResponse
  | ListCategoriesResponse
  | CommunityResponse
  | CommentResponse
  | UserMentionResponse
  | LoginResponse
  | GetCaptchaResponse
  | GetModlogResponse
  | SearchResponse
  | BanFromCommunityResponse
  | AddModToCommunityResponse
  | BanUserResponse
  | AddAdminResponse
  | PrivateMessageResponse
  | PrivateMessagesResponse
  | GetSiteConfigResponse
  | GetSiteResponse
  | PostJoinResponse
  | CommunityJoinResponse;

export interface WebSocketResponse {
  op: UserOperation;
  data: ResponseType;
}

export interface WebSocketJsonResponse {
  op?: string;
  data?: ResponseType;
  error?: string;
  reconnect?: boolean;
}
