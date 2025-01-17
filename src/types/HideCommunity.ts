// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";

/**
 * Hide a community from the main view.
 */
export type HideCommunity = {
  community_id: CommunityId;
  hidden: boolean;
  reason?: string;
};
