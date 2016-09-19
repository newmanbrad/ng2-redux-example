import { combineReducers } from 'redux';
import * as clients from './clients';
import * as session from './session';
import { routerReducer } from 'ng2-redux-router';

/*
 * This is where we 'assemble' the full store out of its modules.
 */

export interface IAppState {
  clients?: clients.IClients;
  session?: session.ISession;
}

export const rootReducer = combineReducers<IAppState>({
  clients: clients.clientReducer,
  session: session.sessionReducer,
  router: routerReducer
});

export function deimmutify(state: IAppState): Object {
  return {
    clients: clients.deimmutifyClients(state.clients),
    session: session.deimmutifySession(state.session)
  };
}

export function reimmutify(plain): IAppState {
  return plain ? {
    clients: clients.reimmutifyClients(plain.clients),
    session: session.reimmutifySession(plain.session)
  } : {};
}
