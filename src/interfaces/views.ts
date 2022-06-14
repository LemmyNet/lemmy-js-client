import { Option, Some } from "@sniptt/monads";
import { Expose, Transform, Type } from "class-transformer";
import "reflect-metadata";
import { toUndefined } from "../utils";
import {
  CommentAggregates,
  CommunityAggregates,
  PersonAggregates,
  PostAggregates,
  SiteAggregates,
} from "./aggregates";
import {
  Comment,
  CommentReport,
  CommunitySafe,
  LocalUserSettings,
  ModAdd,
  ModAddCommunity,
  ModBan,
  ModBanFromCommunity,
  ModLockPost,
  ModRemoveComment,
  ModRemoveCommunity,
  ModRemovePost,
  ModStickyPost,
  ModTransferCommunity,
  PersonMention,
  PersonSafe,
  Post,
  PostReport,
  PrivateMessage,
  RegistrationApplication,
  Site,
} from "./source";

export class PersonViewSafe {
  person: PersonSafe;
  counts: PersonAggregates;
}

export class PersonMentionView {
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
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  my_vote: Option<number>;
}

export class LocalUserSettingsView {
  local_user: LocalUserSettings;
  person: PersonSafe;
  counts: PersonAggregates;
}

export class SiteView {
  site: Site;
  counts: SiteAggregates;
}

export class PrivateMessageView {
  private_message: PrivateMessage;
  creator: PersonSafe;
  recipient: PersonSafe;
}

export class PostView {
  post: Post;
  creator: PersonSafe;
  community: CommunitySafe;
  creator_banned_from_community: boolean;
  counts: PostAggregates;
  subscribed: boolean;
  saved: boolean;
  read: boolean;
  creator_blocked: boolean;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  my_vote: Option<number>;
}

export class PostReportView {
  post_report: PostReport;
  post: Post;
  community: CommunitySafe;
  creator: PersonSafe;
  post_creator: PersonSafe;
  creator_banned_from_community: boolean;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  my_vote: Option<number>;
  counts: PostAggregates;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => PersonSafe)
  resolver: Option<PersonSafe>;
}

export class CommentView {
  comment: Comment;
  creator: PersonSafe;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => PersonSafe)
  recipient: Option<PersonSafe>;
  post: Post;
  community: CommunitySafe;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  subscribed: boolean;
  saved: boolean;
  creator_blocked: boolean;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  my_vote: Option<number>;
}

export class CommentReportView {
  comment_report: CommentReport;
  comment: Comment;
  post: Post;
  community: CommunitySafe;
  creator: PersonSafe;
  comment_creator: PersonSafe;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  my_vote: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => PersonSafe)
  resolver: Option<PersonSafe>;
}

export class ModAddCommunityView {
  mod_add_community: ModAddCommunity;
  moderator: PersonSafe;
  community: CommunitySafe;
  modded_person: PersonSafe;
}

export class ModTransferCommunityView {
  mod_transfer_community: ModTransferCommunity;
  moderator: PersonSafe;
  community: CommunitySafe;
  modded_person: PersonSafe;
}

export class ModAddView {
  mod_add: ModAdd;
  moderator: PersonSafe;
  modded_person: PersonSafe;
}

export class ModBanFromCommunityView {
  mod_ban_from_community: ModBanFromCommunity;
  moderator: PersonSafe;
  community: CommunitySafe;
  banned_person: PersonSafe;
}

export class ModBanView {
  mod_ban: ModBan;
  moderator: PersonSafe;
  banned_person: PersonSafe;
}

export class ModLockPostView {
  mod_lock_post: ModLockPost;
  moderator: PersonSafe;
  post: Post;
  community: CommunitySafe;
}

export class ModRemoveCommentView {
  mod_remove_comment: ModRemoveComment;
  moderator: PersonSafe;
  comment: Comment;
  commenter: PersonSafe;
  post: Post;
  community: CommunitySafe;
}

export class ModRemoveCommunityView {
  mod_remove_community: ModRemoveCommunity;
  moderator: PersonSafe;
  community: CommunitySafe;
}

export class ModRemovePostView {
  mod_remove_post: ModRemovePost;
  moderator: PersonSafe;
  post: Post;
  community: CommunitySafe;
}

export class ModStickyPostView {
  mod_sticky_post: ModStickyPost;
  moderator: PersonSafe;
  post: Post;
  community: CommunitySafe;
}

export class CommunityFollowerView {
  community: CommunitySafe;
  follower: PersonSafe;
}

export class CommunityBlockView {
  person: PersonSafe;
  community: CommunitySafe;
}

export class CommunityModeratorView {
  community: CommunitySafe;
  moderator: PersonSafe;
}

export class CommunityPersonBanView {
  community: CommunitySafe;
  person: PersonSafe;
}

export class PersonBlockView {
  person: PersonSafe;
  target: PersonSafe;
}

export class CommunityView {
  community: CommunitySafe;
  subscribed: boolean;
  blocked: boolean;
  counts: CommunityAggregates;
}

export class RegistrationApplicationView {
  registration_application: RegistrationApplication;
  creator_local_user: LocalUserSettings;
  creator: PersonSafe;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => PersonSafe)
  admin: Option<PersonSafe>;
}
