import { Component, ViewChild } from '@angular/core';
import { DevToolsExtension, NgRedux } from 'ng2-redux';
import { Login }  from '../components/';
import { NgReduxRouter } from 'ng2-redux-router';

import {
  IAppState,
  rootReducer,
  middleware,
  enhancers,
} from '../store';

import { reimmutify } from '../store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

const TEMPLATE = require('./app.template.html');
@Component({
  selector: 'app',
  template: TEMPLATE,
  styles: [ require('../styles/index.css').toString(), require('../styles/index.less').toString() ]
})
export class App {

  /***
   *  I am using the ViewChild decorator to
   *  fire an Event on the the child Login component.
   *  Then expose child methods privately to this component.
   */

  @ViewChild(Login)
  private Login: Login;

  constructor(private _ngRedux: NgRedux<IAppState>,
              private _devTools: DevToolsExtension,
              private _ngReduxRouter: NgReduxRouter) {

    const tools = _devTools.enhancer({
      deserializeState: reimmutify,
    });
    _ngRedux.configureStore(
      rootReducer,
      {},
      middleware,
      tools ? [ ...enhancers, tools ] : enhancers);

    _ngReduxRouter.initialize(/* args */);
  }

  openLoginModal(event) {
    // Fire child event
    this.Login.openLoginModal();
  }
};
