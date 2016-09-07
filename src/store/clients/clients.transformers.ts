import { List, Map } from 'immutable';
import { IClients, IClient, ClientRecord } from './clients.types';

export function deimmutifyClients(state: IClients): Object[] {
  return state.toJS();
}

export function reimmutifyClients(plain): IClients {
  return List<IClient>(plain);
}

function reimmutifyClient(client: any) {
  return ClientRecord(
    Object.assign({}, client, {
      order: Map<number, number>(client.order),
    }));
}
