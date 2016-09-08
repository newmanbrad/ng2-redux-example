import { Component } from '@angular/core';
import { DevToolsExtension, NgRedux } from 'ng2-redux';

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
  constructor(private _ngRedux: NgRedux<IAppState>,
              private _devTools: DevToolsExtension) {

    const tools = _devTools.enhancer({
      deserializeState: reimmutify,
    });
    _ngRedux.configureStore(
      rootReducer,
      {},
      middleware,
      tools ? [ ...enhancers, tools ] : enhancers);
  }

};
