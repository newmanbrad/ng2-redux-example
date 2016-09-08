import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { ClientActions } from '../../actions';
import { reimmutify } from '../../store';


import { Observable } from 'rxjs';
import { IAppState, IClients } from '../../store';

const TEMPLATE = require('./clients.component.html');
@Component({
  selector: 'client-component',
  template: TEMPLATE,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ ClientActions ],
  styles: [ require('../../styles/index.less').toString() ]
})
export class Clients {
  @select() clients$: Observable<IClients>;

  constructor(private ngRedux: NgRedux<IAppState>,
              private _clientActions: ClientActions) {}

  // form handler
  submitted = false;
  onSubmit(client) {
    if ( client.company === null || client.company === '' ) { return null; }
    if ( client.email === null || client.email === '' ) { return null; }
    this.submitted = true;
    this._clientActions.addClient(client);
  }

};
