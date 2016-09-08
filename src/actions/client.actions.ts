import {
  CLIENT_ADDED,
  CLIENT_DELETED,
  CLIENT_UPDATED,
  SELECT_CLIENT,
  UNSELECT_CLIENT
} from '../constants';

import { Injectable } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux } from 'ng2-redux';
import { ClientService } from '../services/client';

@Injectable()
export class ClientActions {
constructor(
  private _ngRedux: NgRedux<IAppState>,
  private _client: ClientService) {}

  addClient = (client) => {
    console.info('Adding client info:', client);
    return this._client.getNextClientId().then(clientId => {
      return this._ngRedux.dispatch({
        type: CLIENT_ADDED,
        payload: {
          id: clientId,
          company: client.company,
          email: client.email,
          active: client.active
        }
      });
    });
  };

  removeClient = (clientId: number) => {
    return this._ngRedux.dispatch({
      type: CLIENT_DELETED,
      payload: { id: clientId }
    });
  }

  selectClient = (clientId: number) => {
    return this._ngRedux.dispatch({
      type: SELECT_CLIENT,
      payload: { id: clientId }
    });
  }

}

