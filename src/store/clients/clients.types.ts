import { List, Record, Map } from 'immutable';

export interface IClient {
  id: number;
  company: string;
  email: string;
  active: boolean;
  order: Map<number, number>;
}

export type IClients = List<IClient>;

export const ClientRecord = Record({
  id: 0,
  company: '',
  email: '',
  active: false,
  order: Map<number, number>()
});
