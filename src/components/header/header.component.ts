import {
    Component,
    ChangeDetectionStrategy,
    Output, EventEmitter
} from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { IAppState } from '../../store';

const TEMPLATE = require('./header.template.html');
@Component({
    selector: 'header-component',
    template: TEMPLATE,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [ require('../../styles/index.less') ]
})
export class Header {
    constructor(private ngRedux: NgRedux<IAppState>) {}

    @Output() openLogin: EventEmitter<any> = new EventEmitter();
    launchLogin() {
        this.openLogin.emit();
    }
};
