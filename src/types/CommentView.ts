// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Comment } from "./Comment";
import type { CommentActions } from "./CommentActions";
import type { Community } from "./Community";
import type { CommunityActions } from "./CommunityActions";
import type { InstanceActions } from "./InstanceActions";
import type { Person } from "./Person";
import type { PersonActions } from "./PersonActions";
import type { Post } from "./Post";
import type { TagsView } from "./TagsView";

/**
 * A comment view.
 */
export type CommentView = {
  comment: Comment;
  creator: Person;
  post: Post;
  community: Community;
  community_actions?: CommunityActions;
  comment_actions?: CommentActions;
  person_actions?: PersonActions;
  instance_actions?: InstanceActions;
  home_instance_actions?: InstanceActions;
  creator_community_actions?: CommunityActions;
  creator_is_admin: boolean;
  post_tags: TagsView;
  can_mod: boolean;
};
