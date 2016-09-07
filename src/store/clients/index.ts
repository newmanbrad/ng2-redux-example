import { IClients, IClient } from './clients.types';
import { clientReducer } from './clients.reducer';
import { deimmutifyClients, reimmutifyClients } from './clients.transformers';

export {
  IClients,
  IClient,
  clientReducer,
  deimmutifyClients,
  reimmutifyClients,
};
