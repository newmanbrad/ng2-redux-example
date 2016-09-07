import { Injectable } from '@angular/core';
const localStorage = require('store');

@Injectable()
export class ClientService {

  getNextClientId(): Promise<number> {
    return new Promise((resolve, reject) => {
      let clientId = localStorage.get('clientId') as number;
      clientId = typeof clientId === 'undefined' ? 1 : ++clientId;
      localStorage.set('clientId', clientId);
      resolve(clientId);
    });
  }
}
