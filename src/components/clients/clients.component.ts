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
import { IAppState, IClients, IClient } from '../../store';

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
  id = new FormControl('');
  company = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  active = new FormControl('false');

  constructor(private ngRedux: NgRedux<IAppState>,
              private _clientActions: ClientActions,
              fb: FormBuilder) {

    this.clientForm = fb.group({
      id: this.id,
      company: this.company,
      email: this.email,
      active: this.active
    });
  }

  determineAddEdit(idValue, formValues) {
    if (idValue) {
      this._clientActions.updateClient(formValues);
    } else {
      this._clientActions.addClient(formValues);
    }
  }

  onSubmit() {
    this.determineAddEdit(this.clientForm.value.id, this.clientForm.value);
    this.clientForm.reset();
  }

  selectClient(client) {
    this.clientForm.patchValue({
      id: client.id,
      company: client.company,
      email: client.email,
      active: client.email
    });
  }

  clearForm() {
    this.clientForm.reset();
  }

}
