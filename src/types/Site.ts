// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { DbUrl } from "./DbUrl";
import type { InstanceId } from "./InstanceId";
import type { SiteId } from "./SiteId";

/**
 * The site.
 */
export type Site = {
  id: SiteId;
  name: string;
  /**
   * A sidebar for the site in markdown.
   */
  sidebar?: string;
  published: string;
  updated?: string;
  /**
   * An icon URL.
   */
  icon?: DbUrl;
  /**
   * A banner url.
   */
  banner?: DbUrl;
  /**
   * A shorter, one-line description of the site.
   */
  description?: string;
  /**
   * The federated ap_id.
   */
  ap_id: DbUrl;
  /**
   * The time the site was last refreshed.
   */
  last_refreshed_at: string;
  /**
   * The site inbox
   */
  inbox_url: DbUrl;
  public_key: string;
  instance_id: InstanceId;
  /**
   * If present, nsfw content is visible by default. Should be displayed by frontends/clients
   * when the site is first opened by a user.
   */
  content_warning?: string;
};
