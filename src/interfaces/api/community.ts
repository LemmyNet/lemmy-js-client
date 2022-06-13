import { Option, Some } from "@sniptt/monads";
import { Expose, Transform } from "class-transformer";
import { toUndefined } from "../../utils";
import { ListingType, SortType } from "../others";
import { Site } from "../source";
import {
  CommunityModeratorView,
  CommunityView,
  PersonViewSafe,
} from "../views";

/**
 * You can use either `id` or `name` as an id.
 *
 * To get a federated community by name, use `name@instance.tld` .
 */
export class GetCommunity {
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  id: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  name: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;

  constructor(id: Option<number>, name: Option<string>, auth: Option<string>) {
    this.id = id;
    this.name = name;
    this.auth = auth;
  }
}

export class GetCommunityResponse {
  community_view: CommunityView;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  site: Option<Site>;
  moderators: CommunityModeratorView[];
  online: number;
}

export class CreateCommunity {
  name: string;
  title: string;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  description: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  icon: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banner: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  nsfw: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  posting_restricted_to_mods: Option<boolean>;
  auth: string;

  constructor(
    name: string,
    title: string,
    description: Option<string>,
    icon: Option<string>,
    banner: Option<string>,
    nsfw: Option<boolean>,
    posting_restricted_to_mods: Option<boolean>,
    auth: string
  ) {
    this.name = name;
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.banner = banner;
    this.nsfw = nsfw;
    this.posting_restricted_to_mods = posting_restricted_to_mods;
    this.auth = auth;
  }
}

export class CommunityResponse {
  community_view: CommunityView;
}

export class ListCommunities {
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  type_: Option<ListingType>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  sort: Option<SortType>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;

  constructor(
    type_: Option<ListingType>,
    sort: Option<SortType>,
    page: Option<number>,
    limit: Option<number>,
    auth: Option<string>
  ) {
    this.type_ = type_;
    this.sort = sort;
    this.page = page;
    this.limit = limit;
    this.auth = auth;
  }
}

export class ListCommunitiesResponse {
  communities: CommunityView[];
}

export class BanFromCommunity {
  community_id: number;
  person_id: number;
  ban: boolean;

  /**
   * Removes/Restores their comments and posts for that community.
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  remove_data: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  /**
   * The expire time in Unix seconds
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  expires: Option<number>;
  auth: string;

  constructor(
    community_id: number,
    person_id: number,
    ban: boolean,
    remove_data: Option<boolean>,
    reason: Option<string>,
    expires: Option<number>,
    auth: string
  ) {
    this.community_id = community_id;
    this.person_id = person_id;
    this.ban = ban;
    this.remove_data = remove_data;
    this.reason = reason;
    this.expires = expires;
    this.auth = auth;
  }
}

export class BanFromCommunityResponse {
  person_view: PersonViewSafe;
  banned: boolean;
}

export class AddModToCommunity {
  community_id: number;
  person_id: number;
  added: boolean;
  auth: string;

  constructor(
    community_id: number,
    person_id: number,
    added: boolean,
    auth: string
  ) {
    this.community_id = community_id;
    this.person_id = person_id;
    this.added = added;
    this.auth = auth;
  }
}

export class AddModToCommunityResponse {
  moderators: CommunityModeratorView[];
}

/**
 * Only mods can edit a community.
 */
export class EditCommunity {
  community_id: number;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  title: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  description: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  icon: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banner: Option<string>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  nsfw: Option<boolean>;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  posting_restricted_to_mods: Option<boolean>;
  auth: string;

  constructor(
    community_id: number,
    title: Option<string>,
    description: Option<string>,
    icon: Option<string>,
    banner: Option<string>,
    nsfw: Option<boolean>,
    posting_restricted_to_mods: Option<boolean>,
    auth: string
  ) {
    this.community_id = community_id;
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.banner = banner;
    this.nsfw = nsfw;
    this.posting_restricted_to_mods = posting_restricted_to_mods;
    this.auth = auth;
  }
}

export class DeleteCommunity {
  community_id: number;
  deleted: boolean;
  auth: string;

  constructor(community_id: number, deleted: boolean, auth: string) {
    this.community_id = community_id;
    this.deleted = deleted;
    this.auth = auth;
  }
}

/**
 * Only admins can remove a community.
 */
export class RemoveCommunity {
  community_id: number;
  removed: boolean;
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  /**
   * The expire time in Unix seconds
   */
  @Transform(({ value }) => Some(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  expires: Option<number>;
  auth: string;

  constructor(
    community_id: number,
    removed: boolean,
    reason: Option<string>,
    expires: Option<number>,
    auth: string
  ) {
    this.community_id = community_id;
    this.removed = removed;
    this.reason = reason;
    this.expires = expires;
    this.auth = auth;
  }
}

export class FollowCommunity {
  community_id: number;
  follow: boolean;
  auth: string;

  constructor(community_id: number, follow: boolean, auth: string) {
    this.community_id = community_id;
    this.follow = follow;
    this.auth = auth;
  }
}

export class TransferCommunity {
  community_id: number;
  person_id: number;
  auth: string;

  constructor(community_id: number, person_id: number, auth: string) {
    this.community_id = community_id;
    this.person_id = person_id;
    this.auth = auth;
  }
}

export class BlockCommunity {
  community_id: number;
  block: boolean;
  auth: string;

  constructor(community_id: number, block: boolean, auth: string) {
    this.community_id = community_id;
    this.block = block;
    this.auth = auth;
  }
}

export class BlockCommunityResponse {
  community_view: CommunityView;
  blocked: boolean;
}
