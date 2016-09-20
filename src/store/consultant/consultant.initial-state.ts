import { IConsultants } from './consultant.types';
import { reimmutifyConsultants } from './consultant.transformers';

export const INITIAL_STATE: IConsultants = reimmutifyConsultants([]);
