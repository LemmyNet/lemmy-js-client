// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { DbUrl } from "./DbUrl";
import type { InstanceId } from "./InstanceId";
import type { PersonId } from "./PersonId";

/**
 * A person.
 */
export type Person = {
  id: PersonId;
  name: string;
  /**
   * A shorter display name.
   */
  display_name?: string;
  /**
   * A URL for an avatar.
   */
  avatar?: DbUrl;
  published: string;
  updated?: string;
  /**
   * The federated ap_id.
   */
  ap_id: DbUrl;
  /**
   * An optional bio, in markdown.
   */
  bio?: string;
  /**
   * Whether the person is local to our site.
   */
  local: boolean;
  /**
   * A URL for a banner.
   */
  banner?: DbUrl;
  /**
   * Whether the person is deleted.
   */
  deleted: boolean;
  /**
   * A matrix id, usually given an @person:matrix.org
   */
  matrix_user_id?: string;
  /**
   * Whether the person is a bot account.
   */
  bot_account: boolean;
  instance_id: InstanceId;
  post_count: number;
  comment_count: number;
};
