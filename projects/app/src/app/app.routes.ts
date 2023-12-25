import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { StrategyDefaultComponent } from './pages/default/default.component';
import { StrategyOnPushComponent } from './pages/on-push/on-push.component';

export const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'strategy-on-push', component: StrategyOnPushComponent },
  { path: 'strategy-default', component: StrategyDefaultComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];
