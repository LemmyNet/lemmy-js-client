// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Community } from "./Community";
import type { ModFeaturePost } from "./ModFeaturePost";
import type { Person } from "./Person";
import type { Post } from "./Post";

export interface ModFeaturePostView {
  mod_feature_post: ModFeaturePost;
  moderator?: Person;
  post: Post;
  community: Community;
}
