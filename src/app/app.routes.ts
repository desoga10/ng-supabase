import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

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
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./component/dashboard/dashboard.component').then(
        (com) => com.DashboardComponent
      ),
  },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
