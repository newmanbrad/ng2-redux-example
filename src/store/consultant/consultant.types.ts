import { List, Record } from 'immutable';

export interface IConsultant {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  active: boolean;
}

export type IConsultants = List<IConsultant>;

export const ConsultantRecord = Record({
  id: 0,
  firstname: '',
  lastname: '',
  email: '',
  active: false
});
