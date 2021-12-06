import { CommentReportView, CommentView } from "../views";

export interface CreateComment {
  content: string;
  parent_id?: number;
  post_id: number;
  /**
   * An optional front end ID, to tell which is comment is coming back.
   */
  form_id?: string;
  auth: string;
}

export interface EditComment {
  content: string;
  comment_id: number;
  /**
   * An optional front end ID, to tell which is comment is coming back.
   */
  form_id?: string;
  auth: string;
}

/**
 * Only the creator can delete the comment.
 */
export interface DeleteComment {
  comment_id: number;
  deleted: boolean;
  auth: string;
}

/**
 * Only a mod or admin can remove the comment.
 */
export interface RemoveComment {
  comment_id: number;
  removed: boolean;
  reason?: string;
  auth: string;
}

/**
 * Only the recipient can do this.
 */
export interface MarkCommentAsRead {
  comment_id: number;
  read: boolean;
  auth: string;
}

export interface SaveComment {
  comment_id: number;
  save: boolean;
  auth: string;
}

export interface CommentResponse {
  comment_view: CommentView;
  recipient_ids: number[];
  /**
   * An optional front end ID, to tell which is comment is coming back.
   */
  form_id?: string;
}

export interface CreateCommentLike {
  comment_id: number;
  score: number;
  auth: string;
}

/**
 * Comment listing types are `All, Subscribed, Community`
 *
 * You can use either `community_id` or `community_name` as an id.
 * To get posts for a federated community by name, use `name@instance.tld` .
 */
export interface GetComments {
  /**
   * The [[ListingType]].
   */
  type_?: string;
  /**
   * The [[SortType]].
   */
  sort?: string;
  page?: number;
  limit?: number;
  community_id?: number;
  community_name?: string;
  saved_only?: boolean;
  auth?: string;
}

export interface GetCommentsResponse {
  comments: CommentView[];
}

export interface CreateCommentReport {
  comment_id: number;
  reason: string;
  auth: string;
}

export interface CommentReportResponse {
  comment_report_view: CommentReportView;
}

export interface ResolveCommentReport {
  report_id: number;
  /**
   * Either resolve or unresolve a report.
   */
  resolved: boolean;
  auth: string;
}

export interface ListCommentReports {
  page?: number;
  limit?: number;
  /**
   * if no community is given, it returns reports for all communities moderated by the auth user.
   */
  community_id?: number;

  /**
   * Only shows the unresolved reports.
   */
  unresolved_only?: boolean;
  auth: string;
}

export interface ListCommentReportsResponse {
  comment_reports: CommentReportView[];
}
