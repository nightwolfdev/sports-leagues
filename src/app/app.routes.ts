import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: ':sport/:league',
    loadChildren: () => import('./league/league.routes').then(r => r.routes),
    title: 'League'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Sports Leagues'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '*',
    redirectTo: 'home'
  }
];
