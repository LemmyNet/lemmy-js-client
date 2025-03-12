import { DeleteImageParams } from "./types/DeleteImageParams";
import { GetComment } from "./types/GetComment";
import { GetComments } from "./types/GetComments";
import { GetCommunity } from "./types/GetCommunity";
import { GetCommunityPendingFollowsCount } from "./types/GetCommunityPendingFollowsCount";
import { GetModlog } from "./types/GetModlog";
import { GetPersonDetails } from "./types/GetPersonDetails";
import { GetPost } from "./types/GetPost";
import { GetPosts } from "./types/GetPosts";
import { GetRandomCommunity } from "./types/GetRandomCommunity";
import { GetRegistrationApplication } from "./types/GetRegistrationApplication";
import { GetReportCount } from "./types/GetReportCount";
import { GetSiteMetadata } from "./types/GetSiteMetadata";
import { ListBannedPersons } from "./types/ListBannedPersons";
import { ListCommentLikes } from "./types/ListCommentLikes";
import { ListCommunities } from "./types/ListCommunities";
import { ListCommunityPendingFollows } from "./types/ListCommunityPendingFollows";
import { ListCustomEmojis } from "./types/ListCustomEmojis";
import { ListInbox } from "./types/ListInbox";
import { ListMedia } from "./types/ListMedia";
import { ListPersonContent } from "./types/ListPersonContent";
import { ListPersonSaved } from "./types/ListPersonSaved";
import { ListPostLikes } from "./types/ListPostLikes";
import { ListRegistrationApplications } from "./types/ListRegistrationApplications";
import { ListReports } from "./types/ListReports";
import { ListTaglines } from "./types/ListTaglines";
import { ResolveObject } from "./types/ResolveObject";
import { Search } from "./types/Search";

export const VERSION = "v4";

export interface UploadImage {
  image: File | Buffer;
}

// tsoa doesn't currently support types in GET queries, so these need to be extended.
// https://github.com/lukeautry/tsoa/issues/1743
export interface ListMediaI extends ListMedia {}
export interface GetModlogI extends GetModlog {}
export interface SearchI extends Search {}
export interface ResolveObjectI extends ResolveObject {}
export interface GetCommunityI extends GetCommunity {}
export interface ListCommunitiesI extends ListCommunities {}
export interface GetCommunityPendingFollowsCountI
  extends GetCommunityPendingFollowsCount {}
export interface ListCommunityPendingFollowsI
  extends ListCommunityPendingFollows {}
export interface GetRandomCommunityI extends GetRandomCommunity {}
export interface GetPostI extends GetPost {}
export interface GetPostsI extends GetPosts {}
export interface ListPostLikesI extends ListPostLikes {}
export interface GetSiteMetadataI extends GetSiteMetadata {}
export interface ListCommentLikesI extends ListCommentLikes {}
export interface GetCommentsI extends GetComments {}
export interface GetCommentI extends GetComment {}
export interface GetPersonDetailsI extends GetPersonDetails {}
export interface ListPersonContentI extends ListPersonContent {}
export interface GetReportCountI extends GetReportCount {}
export interface ListInboxI extends ListInbox {}
export interface ListPersonSavedI extends ListPersonSaved {}
export interface ListRegistrationApplicationsI
  extends ListRegistrationApplications {}
export interface GetRegistrationApplicationI
  extends GetRegistrationApplication {}
export interface ListCustomEmojisI extends ListCustomEmojis {}
export interface ListTaglinesI extends ListTaglines {}
export interface ListReportsI extends ListReports {}
export interface DeleteImageParamsI extends DeleteImageParams {}
export interface ListBannedPersonsI extends ListBannedPersons {}
