import { Component } from '@angular/core';

const TEMPLATE = require('./modal.template.html');
@Component({
  selector: 'modal',
  styles: [ require('./modal.css').toString() ],
  template: TEMPLATE
})
export class Modal {};
