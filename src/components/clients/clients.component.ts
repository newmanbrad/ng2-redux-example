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
  styles: [ require('../../styles/index.less') ]
})
export class Clients {
  @select() clients$: Observable<IClients>;

  constructor(private ngRedux: NgRedux<IAppState>,
              private _clientActions: ClientActions) {}

  private onAddItem(client) {
    console.log(client);
    this.ngRedux.dispatch({ type: 'CLIENT_ADDED', payload: { 'id' : client.id, 'company' : client.company } });
  }

  private onRemoveItem(index: number) {
    if (index == null) {
      return;
    }

    this.ngRedux.dispatch({ type: 'CLIENT_DELETED', payload: { index }});
  }

  @Output() clientAdded: EventEmitter<any> = new EventEmitter();

};
