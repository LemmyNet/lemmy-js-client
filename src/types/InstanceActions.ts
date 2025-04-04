// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { InstanceId } from "./InstanceId";
import type { PersonId } from "./PersonId";

export type InstanceActions = {
  person_id: PersonId;
  instance_id: InstanceId;
  /**
   * When the instance was blocked.
   */
  blocked?: string;
  /**
   * When this user received a site ban.
   */
  received_ban?: string;
  /**
   * When their ban expires.
   */
  ban_expires?: string;
};
