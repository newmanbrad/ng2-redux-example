import { IConsultants } from './consultant.types';
import { INITIAL_STATE } from './consultant.initial-state';

import {
    CONSULTANT_ADDED,
    CONSULTANT_DELETED,
    UPDATE_CONSULTANT
} from '../../constants';

export function consultantReducer(state: IConsultants = INITIAL_STATE, action): IConsultants {
  if (!action.type || !action.payload) {
    return state;
  }

  switch (action.type) {
    case CONSULTANT_ADDED:
      return state.push(action.payload);
    case CONSULTANT_DELETED:
      return state.filter(n => n.id !== action.payload.id) as IConsultants;
    case UPDATE_CONSULTANT:
      return state.map(consultant =>
        consultant.id === action.payload.id ?
              Object.assign({}, consultant, action.payload) :
          consultant
      ) as IConsultants;
    default:
      return state;
  }
};



