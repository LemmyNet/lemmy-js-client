// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { PersonId } from "./PersonId";

export interface BanPerson {
  person_id: PersonId;
  ban: boolean;
  remove_or_restore_data?: boolean;
  reason?: string;
  expires?: number;
}
