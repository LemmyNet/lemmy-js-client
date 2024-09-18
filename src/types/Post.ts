// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";
import type { LanguageId } from "./LanguageId";
import type { PersonId } from "./PersonId";
import type { PostId } from "./PostId";

export interface Post {
  id: PostId;
  name: string;
  url?: string;
  body?: string;
  creator_id: PersonId;
  community_id: CommunityId;
  removed: boolean;
  locked: boolean;
  published: string;
  updated?: string;
  deleted: boolean;
  nsfw: boolean;
  embed_title?: string;
  embed_description?: string;
  thumbnail_url?: string;
  ap_id: string;
  local: boolean;
  embed_video_url?: string;
  language_id: LanguageId;
  featured_community: boolean;
  featured_local: boolean;
  url_content_type?: string;
  alt_text?: string;
  scheduled_publish_time?: number;
}
