import {
    Component,
    ChangeDetectionStrategy,
} from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { IAppState } from '../../store';

const TEMPLATE = require('./header.component.html');
@Component({
    selector: 'header-component',
    template: TEMPLATE,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [ require('../../styles/index.less') ]
})
export class Header {

    constructor(private ngRedux: NgRedux<IAppState>) {}

};
