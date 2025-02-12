// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Community } from "./Community";
import type { ImageDetails } from "./ImageDetails";
import type { Person } from "./Person";
import type { PersonPostMention } from "./PersonPostMention";
import type { Post } from "./Post";
import type { PostTags } from "./PostTags";
import type { SubscribedType } from "./SubscribedType";

/**
 * A person post mention view.
 */
export type PersonPostMentionView = {
  person_post_mention: PersonPostMention;
  post: Post;
  creator: Person;
  community: Community;
  image_details?: ImageDetails;
  recipient: Person;
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
  post_tags: PostTags;
};
