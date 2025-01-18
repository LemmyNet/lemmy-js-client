// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";
import type { DbUrl } from "./DbUrl";
import type { TagId } from "./TagId";

/**
 * A tag that can be assigned to a post within a community.
 * The tag object is created by the community moderators.
 * The assignment happens by the post creator and can be updated by the community moderators.
 *
 * A tag is a federatable object that gives additional context to another object, which can be
 * displayed and filtered on currently, we only have community post tags, which is a tag that is
 * created by post authors as well as mods  of a community, to categorize a post. in the future we
 * may add more tag types, depending on the requirements, this will lead to either expansion of
 * this table (community_id optional, addition of tag_type enum) or split of this table / creation
 * of new tables.
 */
export type Tag = {
  id: TagId;
  ap_id: DbUrl;
  name: string;
  /**
   * the community that owns this tag
   */
  community_id: CommunityId;
  published: string;
  updated?: string;
  deleted: boolean;
};