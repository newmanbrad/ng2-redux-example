import { combineReducers } from 'redux';
import * as clients from './clients';
import * as consultants from './consultant';
import * as session from './session';
import { routerReducer } from 'ng2-redux-router';

/*
 * This is where we 'assemble' the full store out of its modules.
 */

export interface IAppState {
  clients?: clients.IClients;
  session?: session.ISession;
  consultants?: consultants.IConsultants;
}

export const rootReducer = combineReducers<IAppState>({
  clients: clients.clientReducer,
  session: session.sessionReducer,
  consultants: consultants.consultantReducer,
  router: routerReducer
});

export function deimmutify(state: IAppState): Object {
  return {
    clients: clients.deimmutifyClients(state.clients),
    session: session.deimmutifySession(state.session),
    consultants: consultants.deimmutifyConsultants(state.consultants)
  };
}

export function reimmutify(plain): IAppState {
  return plain ? {
    clients: clients.reimmutifyClients(plain.clients),
    session: session.reimmutifySession(plain.session),
    consultants: consultants.reimmutifyConsultants(plain.consultants)
  } : {};
}
