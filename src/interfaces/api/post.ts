import {
  CommentView,
  CommunityModeratorView,
  PostReportView,
  PostView,
} from '../views';

export interface CreatePost {
  name: string;
  url?: string;
  body?: string;
  nsfw: boolean;
  community_id: number;
  auth: string;
}

export interface PostResponse {
  post_view: PostView;
}

export interface GetPost {
  id: number;
  auth?: string;
}

export interface GetPostResponse {
  post_view: PostView;
  comments: CommentView[];
  moderators: CommunityModeratorView[];
  online: number;
}

export interface GetPosts {
  type_: string;
  sort: string;
  page?: number;
  limit?: number;
  community_id?: number;
  community_name?: string;
  auth?: string;
}

export interface GetPostsResponse {
  posts: PostView[];
}

export interface CreatePostLike {
  post_id: number;
  score: number;
  auth: string;
}

export interface EditPost {
  edit_id: number;
  name: string;
  url?: string;
  body?: string;
  nsfw: boolean;
  auth: string;
}

export interface DeletePost {
  edit_id: number;
  deleted: boolean;
  auth: string;
}

export interface RemovePost {
  edit_id: number;
  removed: boolean;
  reason?: string;
  auth: string;
}

export interface LockPost {
  edit_id: number;
  locked: boolean;
  auth: string;
}

export interface StickyPost {
  edit_id: number;
  stickied: boolean;
  auth: string;
}

export interface SavePost {
  post_id: number;
  save: boolean;
  auth: string;
}

export interface PostJoin {
  post_id: number;
}

export interface PostJoinResponse {
  joined: boolean;
}

export interface CreatePostReport {
  post_id: number;
  reason: string;
  auth: string;
}

export interface CreatePostReportResponse {
  success: boolean;
}

export interface ResolvePostReport {
  report_id: number;
  resolved: boolean;
  auth: string;
}

export interface ResolvePostReportResponse {
  report_id: number;
  resolved: boolean;
}

export interface ListPostReports {
  page?: number;
  limit?: number;
  community?: number;
  auth: string;
}

export interface ListPostReportsResponse {
  posts: PostReportView[];
}
