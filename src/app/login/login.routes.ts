import { Routes } from '@angular/router';

import { loginComponent } from './login.component';

export const LoginRoutes: Routes = [
  { path: '',  redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login',  component: loginComponent }
];
