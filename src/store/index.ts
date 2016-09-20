const persistState = require('redux-localstorage');
const createLogger = require( 'redux-logger');
import { IAppState, rootReducer, deimmutify, reimmutify } from './store';
import { IClients, IClient } from './clients';
import { IConsultants, IConsultant } from './consultant';

export {
  IAppState,
  rootReducer,
  IClients,
  IClient,
  IConsultants,
  IConsultant,
  reimmutify,
};

export const middleware = [
  createLogger({
    level: 'info',
    collapsed: true,
    stateTransformer: deimmutify
  })
];

export const enhancers = [
  persistState(
    '', {
      key: 'skill-mapper',
      serialize: s => JSON.stringify(deimmutify(s)),
      deserialize: s => reimmutify(JSON.parse(s)),
    })
];
