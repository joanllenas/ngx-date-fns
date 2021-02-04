import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrategyOnPushComponent } from './on-push.component';

const routes: Routes = [
  {
    path: '',
    component: StrategyOnPushComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnPushRoutingModule {}
