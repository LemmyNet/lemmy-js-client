import { Option } from "@sniptt/monads";
import { Expose, Transform, Type } from "class-transformer";
import "reflect-metadata";
import { toOption, toUndefined } from "../../utils";
import { CommentSortType, ListingType } from "../others";
import { CommentReportView, CommentView } from "../views";

export class CreateComment {
  content: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  parent_id: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  language_id: Option<number>;
  post_id: number;
  /**
   * An optional front end ID, to tell which is comment is coming back.
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  form_id: Option<string>;
  auth: string;

  constructor(init: CreateComment) {
    Object.assign(this, init);
  }
}

export class EditComment {
  comment_id: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  content: Option<string>;
  /**
   * "Distinguishes" a comment, or speak officially. Only doable by community mods or admins.
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  distinguished: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  language_id: Option<number>;
  /**
   * An optional front end ID, to tell which is comment is coming back.
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  form_id: Option<string>;
  auth: string;

  constructor(init: EditComment) {
    Object.assign(this, init);
  }
}

/**
 * Only the creator can delete the comment.
 */
export class DeleteComment {
  comment_id: number;
  deleted: boolean;
  auth: string;

  constructor(init: DeleteComment) {
    Object.assign(this, init);
  }
}

/**
 * Only a mod or admin can remove the comment.
 */
export class RemoveComment {
  comment_id: number;
  removed: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  auth: string;

  constructor(init: RemoveComment) {
    Object.assign(this, init);
  }
}

export class SaveComment {
  comment_id: number;
  save: boolean;
  auth: string;

  constructor(init: SaveComment) {
    Object.assign(this, init);
  }
}

export class CommentResponse {
  @Type(() => CommentView)
  comment_view: CommentView;
  recipient_ids: number[];
  /**
   * An optional front end ID, to tell which is comment is coming back.
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  form_id: Option<string>;
}

export class CreateCommentLike {
  comment_id: number;
  score: number;
  auth: string;

  constructor(init: CreateCommentLike) {
    Object.assign(this, init);
  }
}

/**
 * Comment listing types are `All, Subscribed, Community`
 *
 * You can use either `community_id` or `community_name` as an id.
 * To get posts for a federated community by name, use `name@instance.tld` .
 */
export class GetComments {
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  type_: Option<ListingType>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  sort: Option<CommentSortType>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  max_depth: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_id: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_name: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  post_id: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  parent_id: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  saved_only: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;

  constructor(init: GetComments) {
    Object.assign(this, init);
  }
}

export class GetCommentsResponse {
  @Type(() => CommentView)
  comments: CommentView[];
}

export class CreateCommentReport {
  comment_id: number;
  reason: string;
  auth: string;

  constructor(init: CreateCommentReport) {
    Object.assign(this, init);
  }
}

export class CommentReportResponse {
  @Type(() => CommentReportView)
  comment_report_view: CommentReportView;
}

export class ResolveCommentReport {
  report_id: number;
  /**
   * Either resolve or unresolve a report.
   */
  resolved: boolean;
  auth: string;

  constructor(init: ResolveCommentReport) {
    Object.assign(this, init);
  }
}

export class ListCommentReports {
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  /**
   * if no community is given, it returns reports for all communities moderated by the auth user.
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_id: Option<number>;

  /**
   * Only shows the unresolved reports.
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  unresolved_only: Option<boolean>;
  auth: string;

  constructor(init: ListCommentReports) {
    Object.assign(this, init);
  }
}

export class ListCommentReportsResponse {
  @Type(() => CommentReportView)
  comment_reports: CommentReportView[];
}
