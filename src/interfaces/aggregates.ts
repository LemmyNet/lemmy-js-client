export interface UserAggregates {
  id: number;
  user_id: number;
  post_count: number;
  post_score: number;
  comment_count: number;
  comment_score: number;
}

export interface SiteAggregates {
  id: number;
  site_id: number;
  users: number;
  posts: number;
  comments: number;
  communities: number;
}

export interface PostAggregates {
  id: number;
  post_id: number;
  comments: number;
  score: number;
  upvotes: number;
  downvotes: number;
  newest_comment_time: string;
}

export interface CommunityAggregates {
  id: number;
  community_id: number;
  subscribers: number;
  posts: number;
  comments: number;
}

export interface CommentAggregates {
  id: number;
  comment_id: number;
  score: number;
  upvotes: number;
  downvotes: number;
}
