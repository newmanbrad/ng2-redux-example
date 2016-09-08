import { List, Record, fromJS } from 'immutable';
import { IClients, IClient, ClientRecord } from './clients.types';
import { INITIAL_STATE } from './clients.initial-state';

import {
    CLIENT_ADDED,
    CLIENT_DELETED, SELECT_CLIENT,
} from '../../constants';

export function clientReducer(state: IClients = INITIAL_STATE, action): IClients {
  if (!action.type || !action.payload) {
    return state;
  }

  switch (action.type) {
    case CLIENT_ADDED:
      return state.push(action.payload);
    case CLIENT_DELETED:
      console.log(action.payload.id);
      return state.filter(n => n.id !== action.payload.id) as IClients;
    case SELECT_CLIENT:
      return state.filter(n => n.id === action.payload.id) as IClients;
    default:
      return state;
  }
};



