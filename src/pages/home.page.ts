import { Component } from '@angular/core';

const TEMPLATE = require('./home.template.html');
@Component({
    selector: 'home-page',
    template: TEMPLATE,
    styles: [ require('../styles/index.less') ]
})
export class HomePage { };
