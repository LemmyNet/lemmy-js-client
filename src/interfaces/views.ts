import {
  CommentAggregates,
  CommunityAggregates,
  PersonAggregates,
  PostAggregates,
  SiteAggregates,
} from "./aggregates";
import { SubscribedType } from "./others";
import {
  AdminPurgeComment,
  AdminPurgeCommunity,
  AdminPurgePerson,
  AdminPurgePost,
  Comment,
  CommentReply,
  CommentReport,
  Community,
  CustomEmoji,
  CustomEmojiKeyword,
  LocalSite,
  LocalSiteRateLimit,
  LocalUserSettings,
  ModAdd,
  ModAddCommunity,
  ModBan,
  ModBanFromCommunity,
  ModFeaturePost,
  ModLockPost,
  ModRemoveComment,
  ModRemoveCommunity,
  ModRemovePost,
  ModTransferCommunity,
  Person,
  PersonMention,
  Post,
  PostReport,
  PrivateMessage,
  PrivateMessageReport,
  RegistrationApplication,
  Site,
  Tagline,
} from "./source";

export interface PersonView {
  person: Person;
  counts: PersonAggregates;
}

export interface PersonMentionView {
  person_mention: PersonMention;
  comment: Comment;
  creator: Person;
  post: Post;
  community: Community;
  recipient: Person;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  subscribed: SubscribedType;
  saved: boolean;
  creator_blocked: boolean;
  my_vote?: number;
}

export interface LocalUserSettingsView {
  local_user: LocalUserSettings;
  person: Person;
  counts: PersonAggregates;
}

export interface SiteView {
  site: Site;
  local_site: LocalSite;
  local_site_rate_limit: LocalSiteRateLimit;
  taglines?: Tagline[];
  counts: SiteAggregates;
}

export interface PrivateMessageView {
  private_message: PrivateMessage;
  creator: Person;
  recipient: Person;
}

export interface PostView {
  post: Post;
  creator: Person;
  community: Community;
  creator_banned_from_community: boolean;
  counts: PostAggregates;
  subscribed: SubscribedType;
  saved: boolean;
  read: boolean;
  creator_blocked: boolean;
  my_vote?: number;
  unread_comments: number;
}

export interface PostReportView {
  post_report: PostReport;
  post: Post;
  community: Community;
  creator: Person;
  post_creator: Person;
  creator_banned_from_community: boolean;
  my_vote?: number;
  counts: PostAggregates;
  resolver?: Person;
}

export interface CommentView {
  comment: Comment;
  creator: Person;
  post: Post;
  community: Community;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  subscribed: SubscribedType;
  saved: boolean;
  creator_blocked: boolean;
  my_vote?: number;
}

export interface CommentReplyView {
  comment_reply: CommentReply;
  comment: Comment;
  creator: Person;
  post: Post;
  community: Community;
  recipient: Person;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  subscribed: SubscribedType;
  saved: boolean;
  creator_blocked: boolean;
  my_vote?: number;
}

export interface CommentReportView {
  comment_report: CommentReport;
  comment: Comment;
  post: Post;
  community: Community;
  creator: Person;
  comment_creator: Person;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  my_vote?: number;
  resolver?: Person;
}

export interface ModAddCommunityView {
  mod_add_community: ModAddCommunity;
  moderator?: Person;
  community: Community;
  modded_person: Person;
}

export interface ModTransferCommunityView {
  mod_transfer_community: ModTransferCommunity;
  moderator?: Person;
  community: Community;
  modded_person: Person;
}

export interface ModAddView {
  mod_add: ModAdd;
  moderator?: Person;
  modded_person: Person;
}

export interface ModBanFromCommunityView {
  mod_ban_from_community: ModBanFromCommunity;
  moderator?: Person;
  community: Community;
  banned_person: Person;
}

export interface ModBanView {
  mod_ban: ModBan;
  moderator?: Person;
  banned_person: Person;
}

export interface ModLockPostView {
  mod_lock_post: ModLockPost;
  moderator?: Person;
  post: Post;
  community: Community;
}

export interface ModRemoveCommentView {
  mod_remove_comment: ModRemoveComment;
  moderator?: Person;
  comment: Comment;
  commenter: Person;
  post: Post;
  community: Community;
}

export interface ModRemoveCommunityView {
  mod_remove_community: ModRemoveCommunity;
  moderator?: Person;
  community: Community;
}

export interface ModRemovePostView {
  mod_remove_post: ModRemovePost;
  moderator?: Person;
  post: Post;
  community: Community;
}

export interface ModFeaturePostView {
  mod_feature_post: ModFeaturePost;
  moderator?: Person;
  post: Post;
  community: Community;
}

export interface AdminPurgeCommunityView {
  admin_purge_community: AdminPurgeCommunity;
  admin?: Person;
}

export interface AdminPurgePersonView {
  admin_purge_person: AdminPurgePerson;
  admin?: Person;
}

export interface AdminPurgePostView {
  admin_purge_post: AdminPurgePost;
  admin?: Person;
  community: Community;
}

export interface AdminPurgeCommentView {
  admin_purge_comment: AdminPurgeComment;
  admin?: Person;
  post: Post;
}

export interface CommunityFollowerView {
  community: Community;
  follower: Person;
}

export interface CommunityBlockView {
  person: Person;
  community: Community;
}

export interface CommunityModeratorView {
  community: Community;
  moderator: Person;
}

export interface CommunityPersonBanView {
  community: Community;
  person: Person;
}

export interface PersonBlockView {
  person: Person;
  target: Person;
}

export interface CommunityView {
  community: Community;
  subscribed: SubscribedType;
  blocked: boolean;
  counts: CommunityAggregates;
}

export interface RegistrationApplicationView {
  registration_application: RegistrationApplication;
  creator_local_user: LocalUserSettings;
  creator: Person;
  admin?: Person;
}

export interface CommentNode {
  comment_view: CommentView | PersonMentionView | CommentReplyView;
  children: CommentNode[];
  depth: number;
}

export interface PrivateMessageReportView {
  private_message_report: PrivateMessageReport;
  private_message: PrivateMessage;
  private_message_creator: Person;
  creator: Person;
  resolver?: Person;
}

export class CustomEmojiView {
  custom_emoji: CustomEmoji;
  keywords: CustomEmojiKeyword[];
}
