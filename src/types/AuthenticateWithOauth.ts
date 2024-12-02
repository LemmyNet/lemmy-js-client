// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { OAuthProviderId } from "./OAuthProviderId";

/**
 * Logging in with an OAuth 2.0 authorization
 */
export type AuthenticateWithOauth = {
  code: string;
  oauth_provider_id: OAuthProviderId;
  redirect_uri: string;
  show_nsfw?: boolean;
  /**
   * Username is mandatory at registration time
   */
  username?: string;
  /**
   * An answer is mandatory if require application is enabled on the server
   */
  answer?: string;
  pkce_code_verifier?: string;
};
