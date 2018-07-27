import * as userActions from './user.actions';
import * as fromRoot from '../../store/root.reducers';

export interface FeatureState extends fromRoot.State {
  followers: State;
}

export interface State {
  followers: any[];
}

const initialState: State = {
  followers: ['adsada', 'dadasd', 'xzczczx']
};

export function userFollowersReducer(
  state = initialState,
  actions: userActions.userActions
) {
  switch (actions.type) {
    // case userActions.SET_USER_FOLLOWERS:
    //   return {
    //     ...state,
    //     followers: [...actions.payload]
    //   };
    default:
      return state;
  }
}
