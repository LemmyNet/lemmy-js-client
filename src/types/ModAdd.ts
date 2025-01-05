// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ModAddId } from "./ModAddId";
import type { PersonId } from "./PersonId";

/**
 * When someone is added as a site moderator.
 */
export type ModAdd = {
  id: ModAddId;
  mod_person_id: PersonId;
  other_person_id: PersonId;
  removed: boolean;
  when_: string;
};
