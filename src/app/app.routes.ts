import { Routes } from '@angular/router';
import {
  ClientsPage,
  HomePage
} from '../pages';

export const APP_ROUTES: Routes = [{
  path: '',
  component: HomePage
}, {
  path: 'clients',
  component: ClientsPage
}];


