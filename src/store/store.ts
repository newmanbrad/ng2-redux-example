import { combineReducers } from 'redux';
import * as clients from './clients';

/*
 * This is where we 'assemble' the full store out of its modules.
 */

export interface IAppState {
  clients?: clients.IClients;
};

export const rootReducer = combineReducers<IAppState>({
  clients: clients.clientReducer
});

export function deimmutify(state: IAppState): Object {
  return {
    clients: clients.deimmutifyClients(state.clients)
  };
}

export function reimmutify(plain): IAppState {
  return plain ? {
    clients: clients.reimmutifyClients(plain.clients)
  } : {};
}
