/**
 * Aggregate data for a person.
 */
export interface PersonAggregates {
  id: number;
  person_id: number;
  post_count: number;
  post_score: number;
  comment_count: number;
  comment_score: number;
}

/**
 * Aggregate data for your site.
 */
export interface SiteAggregates {
  id: number;
  site_id: number;
  users: number;
  posts: number;
  comments: number;
  communities: number;
  /**
   * Active users per day.
   */
  users_active_day: number;
  /**
   * Active users per week.
   */
  users_active_week: number;
  /**
   * Active users per month.
   */
  users_active_month: number;
  /**
   * Active users per year.
   */
  users_active_half_year: number;
}

/**
 * Aggregate data for your post.
 */
export interface PostAggregates {
  id: number;
  post_id: number;
  comments: number;
  score: number;
  upvotes: number;
  downvotes: number;
  /**
   * Newest comment time, limited to 2 days, to prevent necrobumping.
   */
  newest_comment_time_necro: string;
  newest_comment_time: string;
  featured_community: boolean;
  featured_local: boolean;
}

/**
 * Aggregate data for your community.
 */
export interface CommunityAggregates {
  id: number;
  community_id: number;
  subscribers: number;
  posts: number;
  comments: number;
  /**
   * Active users per day.
   */
  users_active_day: number;
  /**
   * Active users per week.
   */
  users_active_week: number;
  /**
   * Active users per month.
   */
  users_active_month: number;
  /**
   * Active users per year.
   */
  users_active_half_year: number;
}

/**
 * Aggregate data for your comment.
 */
export interface CommentAggregates {
  id: number;
  comment_id: number;
  score: number;
  upvotes: number;
  downvotes: number;
  child_count: number;
}
