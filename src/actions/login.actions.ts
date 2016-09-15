import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from '../constants';

import { Injectable } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux } from 'ng2-redux';

@Injectable()
export class LoginActions {
  constructor(
    private _ngRedux: NgRedux<IAppState>) {}

  loginUser(credentials) {
    this._ngRedux.dispatch({
      type: LOGIN_USER,
      payload: credentials,
    });
  };

  logoutUser() {
    this._ngRedux.dispatch({ type: LOGOUT_USER});
  };

  loginSuccess() {
    this._ngRedux.dispatch({
      type: LOGIN_USER_SUCCESS
    });
  }

  loginError() {
    this._ngRedux.dispatch({
      type: LOGIN_USER_ERROR
    });
  }

}

