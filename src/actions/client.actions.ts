import {
    CLIENT_ADDED,
    CLIENT_DELETED,
    UPDATE_CLIENT
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
  };

  updateClient = (client) => {
    return this._ngRedux.dispatch({
      type: UPDATE_CLIENT,
      payload: {
        id: client.id,
        company: client.company,
        email: client.email,
        active: client.active
      }
    });
  }

}

