import { IClients } from './clients.types';
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
      return state.filter(n => n.id !== action.payload.id) as IClients;
    case UPDATE_CLIENT:
      return state.map(client =>
          client.id === action.payload.id ?
              Object.assign({}, client, action.payload) :
              client
      ) as IClients;
    default:
      return state;
  }
};



