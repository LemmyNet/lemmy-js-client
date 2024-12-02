// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";
import type { ReportCombinedPaginationCursor } from "./ReportCombinedPaginationCursor";

/**
 * List reports.
 */
export type ListReports = {
  /**
   * Only shows the unresolved reports
   */
  unresolved_only?: boolean;
  /**
   * if no community is given, it returns reports for all communities moderated by the auth user
   */
  community_id?: CommunityId;
  page_cursor?: ReportCombinedPaginationCursor;
  page_back?: boolean;
};