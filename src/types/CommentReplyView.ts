// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Comment } from "./Comment";
import type { CommentAggregates } from "./CommentAggregates";
import type { CommentReply } from "./CommentReply";
import type { Community } from "./Community";
import type { Person } from "./Person";
import type { Post } from "./Post";
import type { SubscribedType } from "./SubscribedType";

export interface CommentReplyView {
  comment_reply: CommentReply;
  comment: Comment;
  creator: Person;
  post: Post;
  community: Community;
  recipient: Person;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  creator_is_moderator: boolean;
  subscribed: SubscribedType;
  saved: boolean;
  creator_blocked: boolean;
  my_vote?: number;
}
