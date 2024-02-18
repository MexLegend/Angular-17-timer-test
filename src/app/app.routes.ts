import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic-timer',
    pathMatch: 'full',
  },
  {
    path: 'basic-timer',
    loadComponent: () =>
      import('@pages/basic-timer/basic-timer.component').then(
        (comp) => comp.BasicTimerComponent
      ),
  },
  {
    path: 'signals-timer',
    loadComponent: () =>
      import('@pages/signals-timer/signals-timer.component').then(
        (comp) => comp.SignalsTimerComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'basic-timer',
  },
];
