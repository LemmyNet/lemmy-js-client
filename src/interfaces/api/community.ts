import { Option } from "@sniptt/monads";
import { Expose, Transform, Type } from "class-transformer";
import "reflect-metadata";
import { toOption, toUndefined } from "../../utils";
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
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  id: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  name: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;

  constructor(init: GetCommunity) {
    Object.assign(this, init);
  }
}

export class GetCommunityResponse {
  @Type(() => CommunityView)
  community_view: CommunityView;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => Site)
  site: Option<Site>;
  @Type(() => CommunityModeratorView)
  moderators: CommunityModeratorView[];
  online: number;
  discussion_languages: number[];
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  default_post_language: Option<number>;
}

export class CreateCommunity {
  name: string;
  title: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  description: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  icon: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banner: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  nsfw: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  posting_restricted_to_mods: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  discussion_languages: Option<number[]>;
  auth: string;

  constructor(init: CreateCommunity) {
    Object.assign(this, init);
  }
}

export class CommunityResponse {
  @Type(() => CommunityView)
  community_view: CommunityView;
  discussion_languages: number[];
}

export class ListCommunities {
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  type_: Option<ListingType>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  sort: Option<SortType>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;

  constructor(init: ListCommunities) {
    Object.assign(this, init);
  }
}

export class ListCommunitiesResponse {
  @Type(() => CommunityView)
  communities: CommunityView[];
}

export class BanFromCommunity {
  community_id: number;
  person_id: number;
  ban: boolean;

  /**
   * Removes/Restores their comments and posts for that community.
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  remove_data: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  /**
   * The expire time in Unix seconds
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  expires: Option<number>;
  auth: string;

  constructor(init: BanFromCommunity) {
    Object.assign(this, init);
  }
}

export class BanFromCommunityResponse {
  @Type(() => PersonViewSafe)
  person_view: PersonViewSafe;
  banned: boolean;
}

export class AddModToCommunity {
  community_id: number;
  person_id: number;
  added: boolean;
  auth: string;

  constructor(init: AddModToCommunity) {
    Object.assign(this, init);
  }
}

export class AddModToCommunityResponse {
  @Type(() => CommunityModeratorView)
  moderators: CommunityModeratorView[];
}

/**
 * Only mods can edit a community.
 */
export class EditCommunity {
  community_id: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  title: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  description: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  icon: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banner: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  nsfw: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  posting_restricted_to_mods: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  discussion_languages: Option<number[]>;
  auth: string;

  constructor(init: EditCommunity) {
    Object.assign(this, init);
  }
}

export class DeleteCommunity {
  community_id: number;
  deleted: boolean;
  auth: string;

  constructor(init: DeleteCommunity) {
    Object.assign(this, init);
  }
}

/**
 * Only admins can remove a community.
 */
export class RemoveCommunity {
  community_id: number;
  removed: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  /**
   * The expire time in Unix seconds
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  expires: Option<number>;
  auth: string;

  constructor(init: RemoveCommunity) {
    Object.assign(this, init);
  }
}

export class FollowCommunity {
  community_id: number;
  follow: boolean;
  auth: string;

  constructor(init: FollowCommunity) {
    Object.assign(this, init);
  }
}

export class TransferCommunity {
  community_id: number;
  person_id: number;
  auth: string;

  constructor(init: TransferCommunity) {
    Object.assign(this, init);
  }
}

export class BlockCommunity {
  community_id: number;
  block: boolean;
  auth: string;

  constructor(init: BlockCommunity) {
    Object.assign(this, init);
  }
}

export class BlockCommunityResponse {
  @Type(() => CommunityView)
  community_view: CommunityView;
  blocked: boolean;
}
