// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { SensitiveString } from "./SensitiveString";

/**
 * Logging into lemmy.
 */
export type Login = {
  username_or_email: SensitiveString;
  password: SensitiveString;
  /**
   * May be required, if totp is enabled for their account.
   */
  totp_2fa_token?: string;
};
