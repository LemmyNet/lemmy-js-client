// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Comment } from "./Comment";
import type { CommentAggregates } from "./CommentAggregates";
import type { Community } from "./Community";
import type { Person } from "./Person";
import type { Post } from "./Post";
import type { SubscribedType } from "./SubscribedType";

export interface CommentView {
  comment: Comment;
  creator: Person;
  post: Post;
  community: Community;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  subscribed: SubscribedType;
  saved: boolean;
  creator_blocked: boolean;
  my_vote?: number;
}