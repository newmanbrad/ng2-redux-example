import { Component } from '@angular/core';

const TEMPLATE = require('./clients.template.html');
@Component({
  selector: 'clients-page',
  template: TEMPLATE,
  styles: [ require('../styles/index.less') ]
})
export class ClientsPage { };
