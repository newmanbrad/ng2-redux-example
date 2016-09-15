import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { LoginActions } from '../../actions';
import { IAppState } from '../../store';
import { Modal } from 'ng2-modal';

const TEMPLATE = require('./login.template.html');
@Component({
    selector: 'login',
    styles: [ require('../../styles/index.less').toString() ],
    template: TEMPLATE,
    providers: [ LoginActions ]
})

export class Login {
    @ViewChild(Modal)
    private Modal: Modal;

    // forms items
    loginForm: FormGroup;
    password = new FormControl('', Validators.required);
    email = new FormControl('', Validators.required);

    constructor(private ngRedux: NgRedux<IAppState>,
                fb: FormBuilder,
                private _loginActions: LoginActions) {

        this.loginForm = fb.group({
            password: this.password,
            email: this.email
        });
    }

    openLoginModal() {
        this.Modal.open();
    }

    onSubmit() {
        this.password.markAsTouched();
        this.email.markAsTouched();

        if (this.password.value && this.email.value) {
          this._loginActions.loginUser(this.loginForm.value);
        }
    }

    clearForm() {
        this.loginForm.reset();
    }
}
