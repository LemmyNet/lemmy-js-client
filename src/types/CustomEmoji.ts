// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CustomEmojiId } from "./CustomEmojiId";
import type { LocalSiteId } from "./LocalSiteId";

export interface CustomEmoji {
  id: CustomEmojiId;
  local_site_id: LocalSiteId;
  shortcode: string;
  image_url: string;
  alt_text: string;
  category: string;
  published: string;
  updated?: string;
}
