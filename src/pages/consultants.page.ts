import { Component } from '@angular/core';

const TEMPLATE = require('./consultants.template.html');
@Component({
  selector: 'consultants-page',
  template: TEMPLATE,
  styles: [ require('../styles/index.less').toString() ]
})
export class ConsultantsPage { };
