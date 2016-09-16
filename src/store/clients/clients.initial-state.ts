import { IClients } from './clients.types';
import { reimmutifyClients } from './clients.transformers';

export const INITIAL_STATE: IClients = reimmutifyClients([]);
