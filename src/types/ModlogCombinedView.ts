// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { AdminAllowInstanceView } from "./AdminAllowInstanceView";
import type { AdminBlockInstanceView } from "./AdminBlockInstanceView";
import type { AdminPurgeCommentView } from "./AdminPurgeCommentView";
import type { AdminPurgeCommunityView } from "./AdminPurgeCommunityView";
import type { AdminPurgePersonView } from "./AdminPurgePersonView";
import type { AdminPurgePostView } from "./AdminPurgePostView";
import type { ModAddCommunityView } from "./ModAddCommunityView";
import type { ModAddView } from "./ModAddView";
import type { ModBanFromCommunityView } from "./ModBanFromCommunityView";
import type { ModBanView } from "./ModBanView";
import type { ModFeaturePostView } from "./ModFeaturePostView";
import type { ModHideCommunityView } from "./ModHideCommunityView";
import type { ModLockPostView } from "./ModLockPostView";
import type { ModRemoveCommentView } from "./ModRemoveCommentView";
import type { ModRemoveCommunityView } from "./ModRemoveCommunityView";
import type { ModRemovePostView } from "./ModRemovePostView";
import type { ModTransferCommunityView } from "./ModTransferCommunityView";

export type ModlogCombinedView =
  | ({ type_: "AdminAllowInstance" } & AdminAllowInstanceView)
  | ({ type_: "AdminBlockInstance" } & AdminBlockInstanceView)
  | ({ type_: "AdminPurgeComment" } & AdminPurgeCommentView)
  | ({ type_: "AdminPurgeCommunity" } & AdminPurgeCommunityView)
  | ({ type_: "AdminPurgePerson" } & AdminPurgePersonView)
  | ({ type_: "AdminPurgePost" } & AdminPurgePostView)
  | ({ type_: "ModAdd" } & ModAddView)
  | ({ type_: "ModAddCommunity" } & ModAddCommunityView)
  | ({ type_: "ModBan" } & ModBanView)
  | ({ type_: "ModBanFromCommunity" } & ModBanFromCommunityView)
  | ({ type_: "ModFeaturePost" } & ModFeaturePostView)
  | ({ type_: "ModHideCommunity" } & ModHideCommunityView)
  | ({ type_: "ModLockPost" } & ModLockPostView)
  | ({ type_: "ModRemoveComment" } & ModRemoveCommentView)
  | ({ type_: "ModRemoveCommunity" } & ModRemoveCommunityView)
  | ({ type_: "ModRemovePost" } & ModRemovePostView)
  | ({ type_: "ModTransferCommunity" } & ModTransferCommunityView);