import {
  CLIENT_ADDED,
  CLIENT_DELETED,
  CLIENT_UPDATED
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
          company: client.company
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

}

