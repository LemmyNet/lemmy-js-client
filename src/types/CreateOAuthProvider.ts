// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.

export interface CreateOAuthProvider {
  display_name: string;
  issuer: string;
  authorization_endpoint: string;
  token_endpoint: string;
  userinfo_endpoint: string;
  id_claim: string;
  name_claim: string;
  client_id: string;
  client_secret: string;
  scopes: string;
  auto_verify_email: boolean;
  account_linking_enabled: boolean;
  enabled: boolean;
}
