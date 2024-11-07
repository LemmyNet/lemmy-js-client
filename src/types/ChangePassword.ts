// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { SensitiveString } from "./SensitiveString";

/**
 * Changes your account password.
 */
export type ChangePassword = {
  new_password: SensitiveString;
  new_password_verify: SensitiveString;
  old_password: SensitiveString;
};
