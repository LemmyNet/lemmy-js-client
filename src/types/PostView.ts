// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Community } from "./Community";
import type { ImageDetails } from "./ImageDetails";
import type { Person } from "./Person";
import type { Post } from "./Post";
import type { PostTags } from "./PostTags";
import type { SubscribedType } from "./SubscribedType";

/**
 * A post view.
 */
export type PostView = {
  post: Post;
  creator: Person;
  community: Community;
  image_details?: ImageDetails;
  creator_banned_from_community: boolean;
  banned_from_community: boolean;
  creator_is_moderator: boolean;
  creator_is_admin: boolean;
  subscribed: SubscribedType;
  saved: boolean;
  read: boolean;
  hidden: boolean;
  creator_blocked: boolean;
  my_vote?: number;
  unread_comments: number;
  tags: PostTags;
};
