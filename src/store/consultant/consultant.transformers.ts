import { List, Map } from 'immutable';
import { IConsultants, IConsultant, ConsultantRecord } from './consultant.types';

export function deimmutifyConsultants(state: IConsultants): Object[] {
  return state.toJS();
}

export function reimmutifyConsultants(plain): IConsultants {
  return List<IConsultant>(plain);
}

function reimmutifyConsultant(consultant: any) {
  return ConsultantRecord(
    Object.assign({}, consultant, {
      client: Map<number, number>(consultant.client),
    }));
}
