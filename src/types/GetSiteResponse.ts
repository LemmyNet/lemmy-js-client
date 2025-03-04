// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Language } from "./Language";
import type { LanguageId } from "./LanguageId";
import type { LocalSiteUrlBlocklist } from "./LocalSiteUrlBlocklist";
import type { OAuthProvider } from "./OAuthProvider";
import type { PersonView } from "./PersonView";
import type { PublicOAuthProvider } from "./PublicOAuthProvider";
import type { SiteView } from "./SiteView";
import type { Tagline } from "./Tagline";

/**
 * An expanded response for a site.
 */
export type GetSiteResponse = {
  site_view: SiteView;
  admins: Array<PersonView>;
  version: string;
  all_languages: Array<Language>;
  discussion_languages: Array<LanguageId>;
  /**
   * If the site has any taglines, a random one is included here for displaying
   */
  tagline?: Tagline;
  /**
   * A list of external auth methods your site supports.
   */
  oauth_providers: Array<PublicOAuthProvider>;
  admin_oauth_providers: Array<OAuthProvider>;
  blocked_urls: Array<LocalSiteUrlBlocklist>;
  image_upload_disabled: boolean;
};
