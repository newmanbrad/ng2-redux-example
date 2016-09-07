import { List, Map } from 'immutable';
import { IClients, IClient, ClientRecord } from './clients.types';
import { reimmutifyClients } from './clients.transformers';

export const INITIAL_STATE: IClients = reimmutifyClients([]);
