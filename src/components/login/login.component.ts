import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import { Modal } from 'ng2-modal';

const TEMPLATE = require('./login.template.html');
@Component({
    selector: 'login',
    styles: [ require('../../styles/index.less').toString() ],
    template: TEMPLATE
})

export class Login {
    @ViewChild(Modal)
    private Modal: Modal;

    openLoginModal() {
        this.Modal.open();
    }
}
