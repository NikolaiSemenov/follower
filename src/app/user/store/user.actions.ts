import { Action } from '@ngrx/store';

export const FETCH_USER_FOLLOWERS = 'FETCH_USER_FOLLOWERS';
export const SET_USER_FOLLOWERS = 'SET_USER_FOLLOWERS';

export class fetchUserFollowers implements Action {
  readonly type = FETCH_USER_FOLLOWERS;
}

export class setUserFollowers implements Action {
  readonly type = SET_USER_FOLLOWERS;

  constructor(public payload: any[]) {}
}

export type userActions = fetchUserFollowers | setUserFollowers;
