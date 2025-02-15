// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";
import type { CommunityVisibility } from "./CommunityVisibility";
import type { LanguageId } from "./LanguageId";

/**
 * Edit a community.
 */
export type EditCommunity = {
  community_id: CommunityId;
  /**
   * A longer title.
   */
  title?: string;
  /**
   * A sidebar for the community in markdown.
   */
  sidebar?: string;
  /**
   * A shorter, one line description of your community.
   */
  description?: string;
  /**
   * Whether its an NSFW community.
   */
  nsfw?: boolean;
  /**
   * Whether to restrict posting only to moderators.
   */
  posting_restricted_to_mods?: boolean;
  discussion_languages?: Array<LanguageId>;
  visibility?: CommunityVisibility;
};
