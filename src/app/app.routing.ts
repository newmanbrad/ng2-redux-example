import {
  Routes,
  RouterModule
} from '@angular/router';

import { APP_ROUTES } from './app.routes';

const appRoutes: Routes = APP_ROUTES ;

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
