import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./component/login/login.component').then(
        (com) => com.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./component/register/register.component').then(
        (com) => com.RegisterComponent
      ),
  },
];
