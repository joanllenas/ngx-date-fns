import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnPushRoutingModule } from './on-push-routing.module';
import { StrategyOnPushComponent } from './on-push.component';
import { TestOnPushComponent } from './test-onpush.component';
import { DateFnsModule } from 'ngx-date-fns';

@NgModule({
  imports: [CommonModule, OnPushRoutingModule, DateFnsModule],
  declarations: [StrategyOnPushComponent, TestOnPushComponent]
})
export class OrdersModule {}
