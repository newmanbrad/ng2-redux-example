import { Component } from '@angular/core';
import { Clients } from '../components';

const TEMPLATE = require('./clients.template.html');
@Component({
  selector: 'clients-page',
  template: TEMPLATE,
  styles: [ require('../styles/index.less') ]
})
export class ClientsPage {

};
