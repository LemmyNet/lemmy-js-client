// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { PersonId } from "./PersonId";

export interface GetPrivateMessages {
  unread_only?: boolean;
  page?: /* integer */ number;
  limit?: /* integer */ number;
  creator_id?: PersonId;
}
