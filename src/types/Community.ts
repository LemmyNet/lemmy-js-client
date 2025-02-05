// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";
import type { CommunityVisibility } from "./CommunityVisibility";
import type { DbUrl } from "./DbUrl";
import type { InstanceId } from "./InstanceId";

/**
 * A community.
 */
export type Community = {
  id: CommunityId;
  name: string;
  /**
   * A longer title, that can contain other characters, and doesn't have to be unique.
   */
  title: string;
  /**
   * A sidebar for the community in markdown.
   */
  sidebar?: string;
  /**
   * Whether the community is removed by a mod.
   */
  removed: boolean;
  published: string;
  updated?: string;
  /**
   * Whether the community has been deleted by its creator.
   */
  deleted: boolean;
  /**
   * Whether its an NSFW community.
   */
  nsfw: boolean;
  /**
   * The federated ap_id.
   */
  ap_id: DbUrl;
  /**
   * Whether the community is local.
   */
  local: boolean;
  /**
   * A URL for an icon.
   */
  icon?: DbUrl;
  /**
   * A URL for a banner.
   */
  banner?: DbUrl;
  /**
   * Whether the community is hidden.
   */
  hidden: boolean;
  /**
   * Whether posting is restricted to mods only.
   */
  posting_restricted_to_mods: boolean;
  instance_id: InstanceId;
  visibility: CommunityVisibility;
  /**
   * A shorter, one-line description of the site.
   */
  description?: string;
};
