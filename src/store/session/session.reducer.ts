import { Map } from 'immutable';
import { ISession, IUser, UserRecord } from './session.types';
import { INITIAL_STATE } from './session.initial-state';

import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from '../../constants';

export function sessionReducer(
  state: ISession = INITIAL_STATE,
  action): ISession {

  switch (action.type) {
    case LOGIN_USER:
      return state.merge({
        token: null,
        user: UserRecord({}),
        hasError: false,
        isLoading: true,
      });

    case LOGIN_USER_SUCCESS:
      return state.merge({
        token: action.payload.token,
        user: UserRecord({
            company: action.payload.user.company,
            email: action.payload.user.email,
            firstName: action.payload.user.firstName,
            lastName: action.payload.user.lastName
          }),
        hasError: false,
        isLoading: false,
      });

    case LOGIN_USER_ERROR:
      return state.merge({
        token: null,
        user: UserRecord({}),
        hasError: true,
        isLoading: false,
      });

    case LOGOUT_USER:
      return INITIAL_STATE;

    default:
      return state;
  }
}

