import { List, Record, fromJS } from 'immutable';
import { IClients, IClient, ClientRecord } from './clients.types';
import { INITIAL_STATE } from './clients.initial-state';

import {
    CLIENT_ADDED,
    CLIENT_DELETED,
    UPDATE_CLIENT
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
    case UPDATE_CLIENT:
      // return state.map(client => { return client.id === action.payload.id ? Object.assign({}, client, action.payload) : client; });
      return state;
    default:
      return state;
  }
};



