// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { PersonId } from "./PersonId";

export type PersonActions = {
  target_id: PersonId;
  person_id: PersonId;
  followed?: string;
  follow_pending?: boolean;
  blocked?: string;
};
