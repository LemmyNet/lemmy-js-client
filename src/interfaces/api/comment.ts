import { Option, Some } from "@sniptt/monads";
import { Expose, Transform } from "class-transformer";
import { toUndefined } from "../../utils";
import { ListingType, SortType } from "../others";
import { CommentReportView, CommentView } from "../views";

export class CreateComment {
  content: string;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  parent_id: Option<number>;
  post_id: number;
  /**
   * An optional front end ID, to tell which is comment is coming back.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  form_id: Option<string>;
  auth: string;

  constructor(
    content: string,
    parent_id: Option<number>,
    post_id: number,
    form_id: Option<string>,
    auth: string
  ) {
    this.content = content;
    this.parent_id = parent_id;
    this.post_id = post_id;
    this.form_id = form_id;
    this.auth = auth;
  }
}

export class EditComment {
  content: string;
  comment_id: number;
  /**
   * An optional front end ID, to tell which is comment is coming back.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  form_id: Option<string>;
  auth: string;

  constructor(
    content: string,
    comment_id: number,
    form_id: Option<string>,
    auth: string
  ) {
    this.content = content;
    this.comment_id = comment_id;
    this.form_id = form_id;
    this.auth = auth;
  }
}

/**
 * Only the creator can delete the comment.
 */
export class DeleteComment {
  comment_id: number;
  deleted: boolean;
  auth: string;

  constructor(comment_id: number, deleted: boolean, auth: string) {
    this.comment_id = comment_id;
    this.deleted = deleted;
    this.auth = auth;
  }
}

/**
 * Only a mod or admin can remove the comment.
 */
export class RemoveComment {
  comment_id: number;
  removed: boolean;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  auth: string;

  constructor(
    comment_id: number,
    removed: boolean,
    reason: Option<string>,
    auth: string
  ) {
    this.comment_id = comment_id;
    this.removed = removed;
    this.reason = reason;
    this.auth = auth;
  }
}

/**
 * Only the recipient can do this.
 */
export class MarkCommentAsRead {
  comment_id: number;
  read: boolean;
  auth: string;

  constructor(comment_id: number, read: boolean, auth: string) {
    this.comment_id = comment_id;
    this.read = read;
    this.auth = auth;
  }
}

export class SaveComment {
  comment_id: number;
  save: boolean;
  auth: string;

  constructor(comment_id: number, save: boolean, auth: string) {
    this.comment_id = comment_id;
    this.save = save;
    this.auth = auth;
  }
}

export class CommentResponse {
  comment_view: CommentView;
  recipient_ids: number[];
  /**
   * An optional front end ID, to tell which is comment is coming back.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  form_id: Option<string>;
}

export class CreateCommentLike {
  comment_id: number;
  score: number;
  auth: string;

  constructor(comment_id: number, score: number, auth: string) {
    this.comment_id = comment_id;
    this.score = score;
    this.auth = auth;
  }
}

/**
 * Comment listing types are `All, Subscribed, Community`
 *
 * You can use either `community_id` or `community_name` as an id.
 * To get posts for a federated community by name, use `name@instance.tld` .
 */
export class GetComments {
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

export class GetCommentsResponse {
  comments: CommentView[];
}

export class CreateCommentReport {
  comment_id: number;
  reason: string;
  auth: string;

  constructor(comment_id: number, reason: string, auth: string) {
    this.comment_id = comment_id;
    this.reason = reason;
    this.auth = auth;
  }
}

export class CommentReportResponse {
  comment_report_view: CommentReportView;
}

export class ResolveCommentReport {
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

export class ListCommentReports {
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

export class ListCommentReportsResponse {
  comment_reports: CommentReportView[];
}
