import { ActionReducerMap } from '@ngrx/store';

import * as fromUser from '../user/store/user.reducers';

export interface State {
  user: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.userFollowersReducer
};
