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

  constructor(
    name: string,
    url: Option<string>,
    body: Option<string>,
    nsfw: Option<boolean>,
    community_id: number,
    honeypot: Option<string>,
    auth: string
  ) {
    this.name = name;
    this.url = url;
    this.body = body;
    this.nsfw = nsfw;
    this.community_id = community_id;
    this.honeypot = honeypot;
    this.auth = auth;
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

  constructor(id: number, auth: Option<string>) {
    this.id = id;
    this.auth = auth;
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

  constructor(
    type_: Option<ListingType>,
    sort: Option<SortType>,
    page: Option<number>,
    limit: Option<number>,
    community_id: Option<number>,
    community_name: Option<string>,
    saved_only: Option<boolean>,
    auth: Option<string>
  ) {
    this.type_ = type_;
    this.sort = sort;
    this.page = page;
    this.limit = limit;
    this.community_id = community_id;
    this.community_name = community_name;
    this.saved_only = saved_only;
    this.auth = auth;
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

  constructor(post_id: number, score: number, auth: string) {
    this.post_id = post_id;
    this.score = score;
    this.auth = auth;
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

  constructor(
    post_id: number,
    name: Option<string>,
    url: Option<string>,
    body: Option<string>,
    nsfw: Option<boolean>,
    auth: string
  ) {
    this.post_id = post_id;
    this.name = name;
    this.url = url;
    this.body = body;
    this.nsfw = nsfw;
    this.auth = auth;
  }
}

export class DeletePost {
  post_id: number;
  deleted: boolean;
  auth: string;

  constructor(post_id: number, deleted: boolean, auth: string) {
    this.post_id = post_id;
    this.deleted = deleted;
    this.auth = auth;
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

  constructor(
    post_id: number,
    removed: boolean,
    reason: Option<string>,
    auth: string
  ) {
    this.post_id = post_id;
    this.removed = removed;
    this.reason = reason;
    this.auth = auth;
  }
}

/**
 * Marks a post as read.
 */
export class MarkPostAsRead {
  post_id: number;
  read: boolean;
  auth: string;

  constructor(post_id: number, read: boolean, auth: string) {
    this.post_id = post_id;
    this.read = read;
    this.auth = auth;
  }
}

/**
 * Only admins and mods can lock a post.
 */
export class LockPost {
  post_id: number;
  locked: boolean;
  auth: string;

  constructor(post_id: number, locked: boolean, auth: string) {
    this.post_id = post_id;
    this.locked = locked;
    this.auth = auth;
  }
}

/**
 * Only admins and mods can sticky a post.
 */
export class StickyPost {
  post_id: number;
  stickied: boolean;
  auth: string;

  constructor(post_id: number, stickied: boolean, auth: string) {
    this.post_id = post_id;
    this.stickied = stickied;
    this.auth = auth;
  }
}

export class SavePost {
  post_id: number;
  save: boolean;
  auth: string;

  constructor(post_id: number, save: boolean, auth: string) {
    this.post_id = post_id;
    this.save = save;
    this.auth = auth;
  }
}

export class CreatePostReport {
  post_id: number;
  reason: string;
  auth: string;

  constructor(post_id: number, reason: string, auth: string) {
    this.post_id = post_id;
    this.reason = reason;
    this.auth = auth;
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

  constructor(report_id: number, resolved: boolean, auth: string) {
    this.report_id = report_id;
    this.resolved = resolved;
    this.auth = auth;
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

  constructor(
    page: Option<number>,
    limit: Option<number>,
    community_id: Option<number>,
    unresolved_only: Option<boolean>,
    auth: string
  ) {
    this.page = page;
    this.limit = limit;
    this.community_id = community_id;
    this.unresolved_only = unresolved_only;
    this.auth = auth;
  }
}

export class ListPostReportsResponse {
  post_reports: PostReportView[];
}

export class GetSiteMetadata {
  url: string;

  constructor(url: string) {
    this.url = url;
  }
}

export class GetSiteMetadataResponse {
  metadata: SiteMetadata;
}
