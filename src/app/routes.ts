import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { StrategyDefaultComponent } from './pages/default/default.component';

export const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  {
    path: 'strategy-on-push',
    loadChildren: () =>
      import('./pages/on-push/on-push.module').then(m => m.OrdersModule)
  },
  { path: 'strategy-default', component: StrategyDefaultComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];
