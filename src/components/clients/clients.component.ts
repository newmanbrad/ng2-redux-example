import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { ClientActions } from '../../actions';
import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import { Observable } from 'rxjs';
import { IAppState, IClients } from '../../store';

// decorator constants
const TEMPLATE = require('./clients.component.html');
@Component({
  selector: 'client-component',
  template: TEMPLATE,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ ClientActions ],
  styles: [ require('../../styles/index.less').toString() ]
})
export class Clients {

  /***
   * Build using reactive form directives. Don't use template driven forms as they
   * enable bi-directional data binding which can lead to mutability.
   * Do not mix ngModel with reactive forms!
   *
   * @select() provides access to the data store.
   ***/

  @select() clients$: Observable<IClients>;
  // forms items
  clientForm: FormGroup;
  company = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  active = new FormControl('');

  constructor(private ngRedux: NgRedux<IAppState>,
              private _clientActions: ClientActions,
              fb: FormBuilder) {

    this.clientForm = fb.group({
      company: this.company,
      email: this.email,
      active: this.active
    });
  }

  onSubmit() {
    this._clientActions.addClient(this.clientForm.value);
  }

}
