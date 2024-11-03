// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CustomEmojiId } from "./CustomEmojiId";

/**
 * Edit  a custom emoji.
 */
export type EditCustomEmoji = {
  id: CustomEmojiId;
  category: string;
  image_url: string;
  alt_text: string;
  keywords: Array<string>;
};
