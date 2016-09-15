import { ClientActions } from './client.actions';
import { LoginActions } from './login.actions';

const ACTION_PROVIDERS = [ ClientActions, LoginActions ];

export {
  ClientActions,
  LoginActions,
  ACTION_PROVIDERS,
};
