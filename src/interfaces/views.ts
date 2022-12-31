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
  CommunitySafe,
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
  PersonMention,
  PersonSafe,
  Post,
  PostReport,
  PrivateMessage,
  PrivateMessageReport,
  RegistrationApplication,
  Site,
  Tagline,
} from "./source";

export interface PersonViewSafe {
  person: PersonSafe;
  counts: PersonAggregates;
}

export interface PersonMentionView {
  person_mention: PersonMention;
  comment: Comment;
  creator: PersonSafe;
  post: Post;
  community: CommunitySafe;
  recipient: PersonSafe;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  subscribed: SubscribedType;
  saved: boolean;
  creator_blocked: boolean;
  my_vote?: number;
}

export interface LocalUserSettingsView {
  local_user: LocalUserSettings;
  person: PersonSafe;
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
  creator: PersonSafe;
  recipient: PersonSafe;
}

export interface PostView {
  post: Post;
  creator: PersonSafe;
  community: CommunitySafe;
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
  community: CommunitySafe;
  creator: PersonSafe;
  post_creator: PersonSafe;
  creator_banned_from_community: boolean;
  my_vote?: number;
  counts: PostAggregates;
  resolver?: PersonSafe;
}

export interface CommentView {
  comment: Comment;
  creator: PersonSafe;
  post: Post;
  community: CommunitySafe;
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
  creator: PersonSafe;
  post: Post;
  community: CommunitySafe;
  recipient: PersonSafe;
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
  community: CommunitySafe;
  creator: PersonSafe;
  comment_creator: PersonSafe;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  my_vote?: number;
  resolver?: PersonSafe;
}

export interface ModAddCommunityView {
  mod_add_community: ModAddCommunity;
  moderator?: PersonSafe;
  community: CommunitySafe;
  modded_person: PersonSafe;
}

export interface ModTransferCommunityView {
  mod_transfer_community: ModTransferCommunity;
  moderator?: PersonSafe;
  community: CommunitySafe;
  modded_person: PersonSafe;
}

export interface ModAddView {
  mod_add: ModAdd;
  moderator?: PersonSafe;
  modded_person: PersonSafe;
}

export interface ModBanFromCommunityView {
  mod_ban_from_community: ModBanFromCommunity;
  moderator?: PersonSafe;
  community: CommunitySafe;
  banned_person: PersonSafe;
}

export interface ModBanView {
  mod_ban: ModBan;
  moderator?: PersonSafe;
  banned_person: PersonSafe;
}

export interface ModLockPostView {
  mod_lock_post: ModLockPost;
  moderator?: PersonSafe;
  post: Post;
  community: CommunitySafe;
}

export interface ModRemoveCommentView {
  mod_remove_comment: ModRemoveComment;
  moderator?: PersonSafe;
  comment: Comment;
  commenter: PersonSafe;
  post: Post;
  community: CommunitySafe;
}

export interface ModRemoveCommunityView {
  mod_remove_community: ModRemoveCommunity;
  moderator?: PersonSafe;
  community: CommunitySafe;
}

export interface ModRemovePostView {
  mod_remove_post: ModRemovePost;
  moderator?: PersonSafe;
  post: Post;
  community: CommunitySafe;
}

export interface ModFeaturePostView {
  mod_feature_post: ModFeaturePost;
  moderator?: PersonSafe;
  post: Post;
  community: CommunitySafe;
}

export interface AdminPurgeCommunityView {
  admin_purge_community: AdminPurgeCommunity;
  admin?: PersonSafe;
}

export interface AdminPurgePersonView {
  admin_purge_person: AdminPurgePerson;
  admin?: PersonSafe;
}

export interface AdminPurgePostView {
  admin_purge_post: AdminPurgePost;
  admin?: PersonSafe;
  community: CommunitySafe;
}

export interface AdminPurgeCommentView {
  admin_purge_comment: AdminPurgeComment;
  admin?: PersonSafe;
  post: Post;
}

export interface CommunityFollowerView {
  community: CommunitySafe;
  follower: PersonSafe;
}

export interface CommunityBlockView {
  person: PersonSafe;
  community: CommunitySafe;
}

export interface CommunityModeratorView {
  community: CommunitySafe;
  moderator: PersonSafe;
}

export interface CommunityPersonBanView {
  community: CommunitySafe;
  person: PersonSafe;
}

export interface PersonBlockView {
  person: PersonSafe;
  target: PersonSafe;
}

export interface CommunityView {
  community: CommunitySafe;
  subscribed: SubscribedType;
  blocked: boolean;
  counts: CommunityAggregates;
}

export interface RegistrationApplicationView {
  registration_application: RegistrationApplication;
  creator_local_user: LocalUserSettings;
  creator: PersonSafe;
  admin?: PersonSafe;
}

export interface CommentNode {
  comment_view: CommentView | PersonMentionView | CommentReplyView;
  children: CommentNode[];
  depth: number;
}

export interface PrivateMessageReportView {
  private_message_report: PrivateMessageReport;
  private_message: PrivateMessage;
  private_message_creator: PersonSafe;
  creator: PersonSafe;
  resolver?: PersonSafe;
}
