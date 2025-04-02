// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { InstanceActions } from "./InstanceActions";
import type { LocalUser } from "./LocalUser";
import type { Person } from "./Person";

/**
 * A local user view.
 */
export type LocalUserView = {
  local_user: LocalUser;
  person: Person;
  instance_actions?: InstanceActions;
};
