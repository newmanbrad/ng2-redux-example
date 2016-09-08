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

  submitted = false;
  onSubmit() { this.submitted = true; }

  @Output() clientAdded: EventEmitter<any> = new EventEmitter();
  // @Input() formModel: NgFormModel;

  @Output() submit = new EventEmitter<Event>();

};
