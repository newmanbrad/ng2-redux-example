import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
// redux goodness
import { DevToolsExtension, NgRedux } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
// routing
import {
  routing,
  appRoutingProviders
} from './app.routing';
import { App } from './app';
import { Clients, Header } from '../components';
import { ReactiveFormsModule } from '@angular/forms';
// bootstrap stuff

// modules
import { Login } from '../components/login/login.component';
import { ModalModule } from 'ng2-modal';
// Pages
import {
  ClientsPage,
  HomePage,
  ConsultantsPage
} from '../pages';
// services
import { ClientService } from '../services/client';
import { LoginService } from '../services/login';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    CommonModule,
    ReactiveFormsModule,
    ModalModule
  ],
  declarations: [
    App,
    // pages
    ClientsPage,
    HomePage,
    ConsultantsPage,
    // components
    Clients,
    Header,
    Login
  ],
  bootstrap: [
    App
  ],
  providers: [
    DevToolsExtension,
    NgRedux,
    NgReduxRouter,
    appRoutingProviders,
    ClientService,
    LoginService
  ]
})
export class AppModule { }
