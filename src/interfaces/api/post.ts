import { Option, Some } from "@sniptt/monads";
import { Expose, Transform } from "class-transformer";
import { toUndefined } from "../../utils";
import { ListingType, SiteMetadata, SortType } from "../others";
import {
  CommentView,
  CommunityModeratorView,
  CommunityView,
  PostReportView,
  PostView,
} from "../views";

export class CreatePost {
  name: string;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  url: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  body: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  nsfw: Option<boolean>;
  community_id: number;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  honeypot: Option<string>;
  auth: string;

  constructor(init: CreatePost) {
    Object.assign(this, init);
  }
}

export class PostResponse {
  post_view: PostView;
}

export class GetPost {
  id: number;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;

  constructor(init: GetPost) {
    Object.assign(this, init);
  }
}

export class GetPostResponse {
  post_view: PostView;
  community_view: CommunityView;
  comments: CommentView[];
  moderators: CommunityModeratorView[];
  online: number;
}

export class GetPosts {
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  type_: Option<ListingType>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  sort: Option<SortType>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_id: Option<number>;
  /**
   * To get posts for a federated community by name, use `name@instance.tld` .
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_name: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  saved_only: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;

  constructor(init: GetPosts) {
    Object.assign(this, init);
  }
}

export class GetPostsResponse {
  posts: PostView[];
}

export class CreatePostLike {
  post_id: number;

  /**
   * `score` can be 0, -1, or 1. Anything else will be rejected.
   */
  score: number;
  auth: string;

  constructor(init: CreatePostLike) {
    Object.assign(this, init);
  }
}

export class EditPost {
  post_id: number;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  name: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  url: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  body: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  nsfw: Option<boolean>;
  auth: string;

  constructor(init: EditPost) {
    Object.assign(this, init);
  }
}

export class DeletePost {
  post_id: number;
  deleted: boolean;
  auth: string;

  constructor(init: DeletePost) {
    Object.assign(this, init);
  }
}

/**
 * Only admins and mods can remove a post.
 */
export class RemovePost {
  post_id: number;
  removed: boolean;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  auth: string;

  constructor(init: RemovePost) {
    Object.assign(this, init);
  }
}

/**
 * Marks a post as read.
 */
export class MarkPostAsRead {
  post_id: number;
  read: boolean;
  auth: string;

  constructor(init: MarkPostAsRead) {
    Object.assign(this, init);
  }
}

/**
 * Only admins and mods can lock a post.
 */
export class LockPost {
  post_id: number;
  locked: boolean;
  auth: string;

  constructor(init: LockPost) {
    Object.assign(this, init);
  }
}

/**
 * Only admins and mods can sticky a post.
 */
export class StickyPost {
  post_id: number;
  stickied: boolean;
  auth: string;

  constructor(init: StickyPost) {
    Object.assign(this, init);
  }
}

export class SavePost {
  post_id: number;
  save: boolean;
  auth: string;

  constructor(init: SavePost) {
    Object.assign(this, init);
  }
}

export class CreatePostReport {
  post_id: number;
  reason: string;
  auth: string;

  constructor(init: CreatePostReport) {
    Object.assign(this, init);
  }
}

export class PostReportResponse {
  post_report_view: PostReportView;
}

export class ResolvePostReport {
  report_id: number;
  /**
   * Either resolve or unresolve a report.
   */
  resolved: boolean;
  auth: string;

  constructor(init: ResolvePostReport) {
    Object.assign(this, init);
  }
}

export class ListPostReports {
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  /**
   * if no community is given, it returns reports for all communities moderated by the auth user.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_id: Option<number>;
  /**
   * Only shows the unresolved reports.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  unresolved_only: Option<boolean>;
  auth: string;

  constructor(init: ListPostReports) {
    Object.assign(this, init);
  }
}

export class ListPostReportsResponse {
  post_reports: PostReportView[];
}

export class GetSiteMetadata {
  url: string;

  constructor(init: GetSiteMetadata) {
    Object.assign(this, init);
  }
}

export class GetSiteMetadataResponse {
  metadata: SiteMetadata;
}
