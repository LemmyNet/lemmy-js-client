// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { LocalSiteId } from "./LocalSiteId";

export interface LocalSiteRateLimit {
  id: number;
  local_site_id: LocalSiteId;
  message: number;
  message_per_second: number;
  post: number;
  post_per_second: number;
  register: number;
  register_per_second: number;
  image: number;
  image_per_second: number;
  comment: number;
  comment_per_second: number;
  search: number;
  search_per_second: number;
  published: string;
  updated?: string;
}
