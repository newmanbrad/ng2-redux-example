import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from '../constants';

import { Injectable } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux } from 'ng2-redux';
// services
import { LoginService } from '../services/login';

@Injectable()
export class LoginActions {
  constructor(
    private _ngRedux: NgRedux<IAppState>,
    private _loginService: LoginService) {}

  loginUser(credentials) {
    this._ngRedux.dispatch({type: LOGIN_USER});
    const promise = this._loginService.login(credentials);

    promise.then(response => {
      this.loginSuccess(response);
    }).catch(err => {
      // console.info(err);
      this.loginError();
    });
  };

  logoutUser() {
    this._ngRedux.dispatch({ type: LOGOUT_USER});
  };

  loginSuccess(user) {
    this._ngRedux.dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });
  }

  loginError() {
    this._ngRedux.dispatch({
      type: LOGIN_USER_ERROR
    });
  }

}

