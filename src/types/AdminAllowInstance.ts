// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { InstanceId } from "./InstanceId";
import type { PersonId } from "./PersonId";

export type AdminAllowInstance = {
  id: number;
  instance_id: InstanceId;
  admin_person_id: PersonId;
  allowed: boolean;
  reason?: string;
  published: string;
};