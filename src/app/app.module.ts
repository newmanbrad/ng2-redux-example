import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
// redux goodness
import { DevToolsExtension, NgRedux } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
// import { provideReduxForms } from 'ng2-redux-form/source';

import {
  routing,
  appRoutingProviders
} from './app.routing';
import { App } from './app';
import { Clients, Header  } from '../components';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// bootstrap stuff
// import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

// Pages
import {
  ClientsPage
} from '../pages';

// services
import { ClientService } from '../services/client';


@NgModule({
  imports: [
    BrowserModule,
    routing,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AlertModule,
    DatepickerModule
  ],
  declarations: [
    App,
    ClientsPage,
    Clients,
    Header
  ],
  bootstrap: [
    App
  ],
  providers: [
    DevToolsExtension,
    NgRedux,
    NgReduxRouter,
    appRoutingProviders,
    ClientService
  ]
})
export class AppModule { }
