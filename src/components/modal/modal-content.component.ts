import { Component } from '@angular/core';

const TEMPLATE = require('./modal-content.template.html');
@Component({
  selector: 'modal-content',
  styles: [ require('./modal.css').toString() ],
  template: TEMPLATE
})
export class ModalContent {};
