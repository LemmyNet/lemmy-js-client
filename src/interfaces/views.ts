import {
  CommentAggregates,
  CommunityAggregates,
  PostAggregates,
  SiteAggregates,
  PersonAggregates,
} from './aggregates';
import {
  Comment,
  CommentReport,
  CommunitySafe,
  ModAdd,
  ModAddCommunity,
  ModTransferCommunity,
  ModBan,
  ModBanFromCommunity,
  ModLockPost,
  ModRemoveComment,
  ModRemoveCommunity,
  ModRemovePost,
  ModStickyPost,
  Post,
  PostReport,
  PrivateMessage,
  Site,
  PersonMention,
  PersonSafe,
  LocalUserSettings,
} from './source';

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
  subscribed: boolean;
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
  creator: PersonSafe;
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
  subscribed: boolean;
  saved: boolean;
  read: boolean;
  creator_blocked: boolean;
  my_vote?: number;
}

export interface PostReportView {
  post_report: PostReport;
  post: Post;
  community: CommunitySafe;
  creator: PersonSafe;
  post_creator: PersonSafe;
  resolver?: PersonSafe;
}

export interface CommentView {
  comment: Comment;
  creator: PersonSafe;
  recipient?: PersonSafe;
  post: Post;
  community: CommunitySafe;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  subscribed: boolean;
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
  resolver?: PersonSafe;
}

export interface ModAddCommunityView {
  mod_add_community: ModAddCommunity;
  moderator: PersonSafe;
  community: CommunitySafe;
  modded_person: PersonSafe;
}

export interface ModTransferCommunityView {
  mod_transfer_community: ModTransferCommunity;
  moderator: PersonSafe;
  community: CommunitySafe;
  modded_person: PersonSafe;
}

export interface ModAddView {
  mod_add: ModAdd;
  moderator: PersonSafe;
  modded_person: PersonSafe;
}

export interface ModBanFromCommunityView {
  mod_ban_from_community: ModBanFromCommunity;
  moderator: PersonSafe;
  community: CommunitySafe;
  banned_person: PersonSafe;
}

export interface ModBanView {
  mod_ban: ModBan;
  moderator: PersonSafe;
  banned_person: PersonSafe;
}

export interface ModLockPostView {
  mod_lock_post: ModLockPost;
  moderator: PersonSafe;
  post: Post;
  community: CommunitySafe;
}

export interface ModRemoveCommentView {
  mod_remove_comment: ModRemoveComment;
  moderator: PersonSafe;
  comment: Comment;
  commenter: PersonSafe;
  post: Post;
  community: CommunitySafe;
}

export interface ModRemoveCommunityView {
  mod_remove_community: ModRemoveCommunity;
  moderator: PersonSafe;
  community: CommunitySafe;
}

export interface ModRemovePostView {
  mod_remove_post: ModRemovePost;
  moderator: PersonSafe;
  post: Post;
  community: CommunitySafe;
}

export interface ModStickyPostView {
  mod_sticky_post: ModStickyPost;
  moderator: PersonSafe;
  post: Post;
  community: CommunitySafe;
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
  subscribed: boolean;
  blocked: boolean;
  counts: CommunityAggregates;
}
