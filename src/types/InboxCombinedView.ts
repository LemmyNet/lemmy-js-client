// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentReplyView } from "./CommentReplyView";
import type { PersonCommentMentionView } from "./PersonCommentMentionView";
import type { PersonPostMentionView } from "./PersonPostMentionView";
import type { PrivateMessageView } from "./PrivateMessageView";

export type InboxCombinedView =
  | ({ type_: "CommentReply" } & CommentReplyView)
  | ({ type_: "CommentMention" } & PersonCommentMentionView)
  | ({ type_: "PostMention" } & PersonPostMentionView)
  | ({ type_: "PrivateMessage" } & PrivateMessageView);
