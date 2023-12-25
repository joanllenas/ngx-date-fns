import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { StrategyDefaultComponent } from './pages/default/default.component';
import { TestOnPushComponent } from './pages/on-push/test-onpush.component';

export const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'strategy-on-push', component: TestOnPushComponent },
  { path: 'strategy-default', component: StrategyDefaultComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];
