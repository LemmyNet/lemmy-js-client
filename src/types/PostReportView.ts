// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Community } from "./Community";
import type { Person } from "./Person";
import type { Post } from "./Post";
import type { PostAggregates } from "./PostAggregates";
import type { PostReport } from "./PostReport";

export interface PostReportView {
  post_report: PostReport;
  post: Post;
  community: Community;
  creator: Person;
  post_creator: Person;
  creator_banned_from_community: boolean;
  my_vote?: number;
  counts: PostAggregates;
  resolver?: Person;
}
