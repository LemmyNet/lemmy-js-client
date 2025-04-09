// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentSortType } from "./CommentSortType";
import type { LanguageId } from "./LanguageId";
import type { ListingType } from "./ListingType";
import type { PostListingMode } from "./PostListingMode";
import type { PostSortType } from "./PostSortType";
import type { SensitiveString } from "./SensitiveString";

/**
 * Saves settings for your user.
 */
export type SaveUserSettings = {
  /**
   * Show nsfw posts.
   */
  show_nsfw?: boolean;
  /**
   * Blur nsfw posts.
   */
  blur_nsfw?: boolean;
  /**
   * Your user's theme.
   */
  theme?: string;
  /**
   * The default post listing type, usually "local"
   */
  default_listing_type?: ListingType;
  /**
   * A post-view mode that changes how multiple post listings look.
   */
  post_listing_mode?: PostListingMode;
  /**
   * The default post sort, usually "active"
   */
  default_post_sort_type?: PostSortType;
  /**
   * A default time range limit to apply to post sorts, in seconds. 0 means none.
   */
  default_post_time_range_seconds?: number;
  /**
   * The default comment sort, usually "hot"
   */
  default_comment_sort_type?: CommentSortType;
  /**
   * The language of the lemmy interface
   */
  interface_language?: string;
  /**
   * Your display name, which can contain strange characters, and does not need to be unique.
   */
  display_name?: string;
  /**
   * Your email.
   */
  email?: SensitiveString;
  /**
   * Your bio / info, in markdown.
   */
  bio?: string;
  /**
   * Your matrix user id. Ex: @my_user:matrix.org
   */
  matrix_user_id?: string;
  /**
   * Whether to show or hide avatars.
   */
  show_avatars?: boolean;
  /**
   * Sends notifications to your email.
   */
  send_notifications_to_email?: boolean;
  /**
   * Whether this account is a bot account. Users can hide these accounts easily if they wish.
   */
  bot_account?: boolean;
  /**
   * Whether to show bot accounts.
   */
  show_bot_accounts?: boolean;
  /**
   * Whether to show read posts.
   */
  show_read_posts?: boolean;
  /**
   * A list of languages you are able to see discussion in.
   */
  discussion_languages?: Array<LanguageId>;
  blocking_keywords?: Array<string>;
  /**
   * Open links in a new tab
   */
  open_links_in_new_tab?: boolean;
  /**
   * Enable infinite scroll
   */
  infinite_scroll_enabled?: boolean;
  /**
   * Whether to allow keyboard navigation (for browsing and interacting with posts and comments).
   */
  enable_keyboard_navigation?: boolean;
  /**
   * Whether user avatars or inline images in the UI that are gifs should be allowed to play or
   * should be paused
   */
  enable_animated_images?: boolean;
  /**
   * Whether a user can send / receive private messages
   */
  enable_private_messages?: boolean;
  /**
   * Whether to auto-collapse bot comments.
   */
  collapse_bot_comments?: boolean;
  /**
   * Some vote display mode settings
   */
  show_scores?: boolean;
  show_upvotes?: boolean;
  show_downvotes?: boolean;
  show_upvote_percentage?: boolean;
  /**
   * Whether to automatically mark fetched posts as read.
   */
  auto_mark_fetched_posts_as_read?: boolean;
  /**
   * Whether to hide posts containing images/videos.
   */
  hide_media?: boolean;
};
