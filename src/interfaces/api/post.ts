import { SiteMetadata } from '..';
import {
  CommunityView,
  CommentView,
  CommunityModeratorView,
  PostReportView,
  PostView,
} from '../views';

export interface CreatePost {
  name: string;
  url?: string;
  body?: string;
  nsfw?: boolean;
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
  community_view: CommunityView;
  comments: CommentView[];
  moderators: CommunityModeratorView[];
  online: number;
}

export interface GetPosts {
  /**
   * The [[ListingType]].
   *
   * Post listing types are `All, Subscribed, Community`
   */
  type_?: string;
  /**
   * The [[SortType]].
   */
  sort?: string;
  page?: number;
  limit?: number;
  community_id?: number;
  /**
   * To get posts for a federated community by name, use `name@instance.tld` .
   */
  community_name?: string;
  saved_only?: boolean;
  auth?: string;
}

export interface GetPostsResponse {
  posts: PostView[];
}

export interface CreatePostLike {
  post_id: number;

  /**
   * `score` can be 0, -1, or 1. Anything else will be rejected.
   */
  score: number;
  auth: string;
}

export interface EditPost {
  post_id: number;
  name?: string;
  url?: string;
  body?: string;
  nsfw?: boolean;
  auth: string;
}

export interface DeletePost {
  post_id: number;
  deleted: boolean;
  auth: string;
}

/**
 * Only admins and mods can remove a post.
 */
export interface RemovePost {
  post_id: number;
  removed: boolean;
  reason?: string;
  auth: string;
}

/**
 * Only admins and mods can lock a post.
 */
export interface LockPost {
  post_id: number;
  locked: boolean;
  auth: string;
}

/**
 * Only admins and mods can sticky a post.
 */
export interface StickyPost {
  post_id: number;
  stickied: boolean;
  auth: string;
}

export interface SavePost {
  post_id: number;
  save: boolean;
  auth: string;
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

export interface GetSiteMetadata {
  url: string;
}

export interface GetSiteMetadataResponse {
  metadata: SiteMetadata;
}
