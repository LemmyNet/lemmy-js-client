export const EMPTY_REQUEST = { state: "empty" } as const;
export type EmptyRequestState = { state: "empty" };

export const LOADING_REQUEST = { state: "loading" } as const;
export type LoadingRequestState = { state: "loading" };

export type FailedRequestState = { state: "failed"; err: Error };

export type SuccessRequestState<T> = { state: "success"; data: T };

/**
 * Shows the state of an API request.
 *
 * Can be empty, loading, failed, or success
 */
export type RequestState<T> =
  | EmptyRequestState
  | LoadingRequestState
  | FailedRequestState
  | SuccessRequestState<T>;
