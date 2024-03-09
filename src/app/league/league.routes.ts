import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./league.component').then(c => c.LeagueComponent)
  }
];
