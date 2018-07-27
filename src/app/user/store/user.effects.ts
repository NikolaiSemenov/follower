import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient, HttpRequest } from '@angular/common/http';

import * as UserActions from './user.actions';

@Injectable()
export class userEffects {
  @Effect()
  userFollowersFetch = this.actions$
    .ofType(UserActions.FETCH_USER_FOLLOWERS)
    .pipe(
      switchMap((action: UserActions.fetchUserFollowers) => {
        return this.httpClient.get(
          'https://api.github.com/users/mosh-hamedani/followers',
          {
            observe: 'body',
            responseType: 'json'
          }
        );
      }),
      map(userFollowers => {
        console.log(typeof userFollowers);
        return {
          type: UserActions.SET_USER_FOLLOWERS,
          payload: userFollowers
        };
      })
    );

  constructor(private actions$: Actions, private httpClient: HttpClient) {}
}
