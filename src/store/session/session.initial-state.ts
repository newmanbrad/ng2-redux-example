import { reimmutifySession } from './session.transformers';

export const INITIAL_STATE = reimmutifySession({
  token: null,
  user: {},
  hasError: false,
  isLoading: false,
});
