import { Option } from "@sniptt/monads";
import { Expose, Transform, Type } from "class-transformer";
import "reflect-metadata";
import { toOption, toUndefined } from "../utils";
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
  @Type(() => PersonSafe)
  person: PersonSafe;
  counts: PersonAggregates;
}

export class PersonMentionView {
  @Type(() => PersonMention)
  person_mention: PersonMention;
  @Type(() => Comment)
  comment: Comment;
  @Type(() => PersonSafe)
  creator: PersonSafe;
  @Type(() => Post)
  post: Post;
  @Type(() => CommunitySafe)
  community: CommunitySafe;
  @Type(() => PersonSafe)
  recipient: PersonSafe;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  subscribed: SubscribedType;
  saved: boolean;
  creator_blocked: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  my_vote: Option<number>;
}

export class LocalUserSettingsView {
  @Type(() => LocalUserSettings)
  local_user: LocalUserSettings;
  @Type(() => PersonSafe)
  person: PersonSafe;
  counts: PersonAggregates;
}

export class SiteView {
  @Type(() => Site)
  site: Site;
  counts: SiteAggregates;
}

export class PrivateMessageView {
  @Type(() => PrivateMessage)
  private_message: PrivateMessage;
  @Type(() => PersonSafe)
  creator: PersonSafe;
  @Type(() => PersonSafe)
  recipient: PersonSafe;
}

export class PostView {
  @Type(() => Post)
  post: Post;
  @Type(() => PersonSafe)
  creator: PersonSafe;
  @Type(() => CommunitySafe)
  community: CommunitySafe;
  creator_banned_from_community: boolean;
  counts: PostAggregates;
  subscribed: SubscribedType;
  saved: boolean;
  read: boolean;
  creator_blocked: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  my_vote: Option<number>;
}

export class PostReportView {
  @Type(() => PostReport)
  post_report: PostReport;
  @Type(() => Post)
  post: Post;
  @Type(() => CommunitySafe)
  community: CommunitySafe;
  @Type(() => PersonSafe)
  creator: PersonSafe;
  @Type(() => PersonSafe)
  post_creator: PersonSafe;
  creator_banned_from_community: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  my_vote: Option<number>;
  counts: PostAggregates;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => PersonSafe)
  resolver: Option<PersonSafe>;
}

export class CommentView {
  @Type(() => Comment)
  comment: Comment;
  @Type(() => PersonSafe)
  creator: PersonSafe;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => PersonSafe)
  recipient: Option<PersonSafe>;
  @Type(() => Post)
  post: Post;
  @Type(() => CommunitySafe)
  community: CommunitySafe;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  subscribed: SubscribedType;
  saved: boolean;
  creator_blocked: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  my_vote: Option<number>;
}

export class CommentReportView {
  @Type(() => CommentReport)
  comment_report: CommentReport;
  @Type(() => Comment)
  comment: Comment;
  @Type(() => Post)
  post: Post;
  @Type(() => CommunitySafe)
  community: CommunitySafe;
  @Type(() => PersonSafe)
  creator: PersonSafe;
  @Type(() => PersonSafe)
  comment_creator: PersonSafe;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  my_vote: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => PersonSafe)
  resolver: Option<PersonSafe>;
}

export class ModAddCommunityView {
  @Type(() => ModAddCommunity)
  mod_add_community: ModAddCommunity;
  @Type(() => PersonSafe)
  moderator: PersonSafe;
  @Type(() => CommunitySafe)
  community: CommunitySafe;
  @Type(() => PersonSafe)
  modded_person: PersonSafe;
}

export class ModTransferCommunityView {
  @Type(() => ModTransferCommunity)
  mod_transfer_community: ModTransferCommunity;
  @Type(() => PersonSafe)
  moderator: PersonSafe;
  @Type(() => CommunitySafe)
  community: CommunitySafe;
  @Type(() => PersonSafe)
  modded_person: PersonSafe;
}

export class ModAddView {
  @Type(() => ModAdd)
  mod_add: ModAdd;
  @Type(() => PersonSafe)
  moderator: PersonSafe;
  @Type(() => PersonSafe)
  modded_person: PersonSafe;
}

export class ModBanFromCommunityView {
  @Type(() => ModBanFromCommunity)
  mod_ban_from_community: ModBanFromCommunity;
  @Type(() => PersonSafe)
  moderator: PersonSafe;
  @Type(() => CommunitySafe)
  community: CommunitySafe;
  @Type(() => PersonSafe)
  banned_person: PersonSafe;
}

export class ModBanView {
  @Type(() => ModBan)
  mod_ban: ModBan;
  @Type(() => PersonSafe)
  moderator: PersonSafe;
  @Type(() => PersonSafe)
  banned_person: PersonSafe;
}

export class ModLockPostView {
  @Type(() => ModLockPost)
  mod_lock_post: ModLockPost;
  @Type(() => PersonSafe)
  moderator: PersonSafe;
  @Type(() => Post)
  post: Post;
  @Type(() => CommunitySafe)
  community: CommunitySafe;
}

export class ModRemoveCommentView {
  @Type(() => ModRemoveComment)
  mod_remove_comment: ModRemoveComment;
  @Type(() => PersonSafe)
  moderator: PersonSafe;
  @Type(() => Comment)
  comment: Comment;
  @Type(() => PersonSafe)
  commenter: PersonSafe;
  @Type(() => Post)
  post: Post;
  @Type(() => CommunitySafe)
  community: CommunitySafe;
}

export class ModRemoveCommunityView {
  @Type(() => ModRemoveCommunity)
  mod_remove_community: ModRemoveCommunity;
  @Type(() => PersonSafe)
  moderator: PersonSafe;
  @Type(() => CommunitySafe)
  community: CommunitySafe;
}

export class ModRemovePostView {
  @Type(() => ModRemovePost)
  mod_remove_post: ModRemovePost;
  @Type(() => PersonSafe)
  moderator: PersonSafe;
  @Type(() => Post)
  post: Post;
  @Type(() => CommunitySafe)
  community: CommunitySafe;
}

export class ModStickyPostView {
  @Type(() => ModStickyPost)
  mod_sticky_post: ModStickyPost;
  @Type(() => PersonSafe)
  moderator: PersonSafe;
  @Type(() => Post)
  post: Post;
  @Type(() => CommunitySafe)
  community: CommunitySafe;
}

export class AdminPurgeCommunityView {
  @Type(() => AdminPurgeCommunity)
  admin_purge_community: AdminPurgeCommunity;
  @Type(() => PersonSafe)
  admin: PersonSafe;
}

export class AdminPurgePersonView {
  @Type(() => AdminPurgePerson)
  admin_purge_person: AdminPurgePerson;
  @Type(() => PersonSafe)
  admin: PersonSafe;
}

export class AdminPurgePostView {
  @Type(() => AdminPurgePost)
  admin_purge_post: AdminPurgePost;
  @Type(() => PersonSafe)
  admin: PersonSafe;
  @Type(() => CommunitySafe)
  community: CommunitySafe;
}

export class AdminPurgeCommentView {
  @Type(() => AdminPurgeComment)
  admin_purge_comment: AdminPurgeComment;
  @Type(() => PersonSafe)
  admin: PersonSafe;
  @Type(() => Post)
  post: Post;
}

export class CommunityFollowerView {
  @Type(() => CommunitySafe)
  community: CommunitySafe;
  @Type(() => PersonSafe)
  follower: PersonSafe;
}

export class CommunityBlockView {
  @Type(() => PersonSafe)
  person: PersonSafe;
  @Type(() => CommunitySafe)
  community: CommunitySafe;
}

export class CommunityModeratorView {
  @Type(() => CommunitySafe)
  community: CommunitySafe;
  @Type(() => PersonSafe)
  moderator: PersonSafe;
}

export class CommunityPersonBanView {
  @Type(() => CommunitySafe)
  community: CommunitySafe;
  @Type(() => PersonSafe)
  person: PersonSafe;
}

export class PersonBlockView {
  @Type(() => PersonSafe)
  person: PersonSafe;
  @Type(() => PersonSafe)
  target: PersonSafe;
}

export class CommunityView {
  @Type(() => CommunitySafe)
  community: CommunitySafe;
  subscribed: SubscribedType;
  blocked: boolean;
  counts: CommunityAggregates;
}

export class RegistrationApplicationView {
  @Type(() => RegistrationApplication)
  registration_application: RegistrationApplication;
  @Type(() => LocalUserSettings)
  creator_local_user: LocalUserSettings;
  @Type(() => PersonSafe)
  creator: PersonSafe;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => PersonSafe)
  admin: Option<PersonSafe>;
}
