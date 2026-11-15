import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { startOfYesterday } from 'date-fns/startOfYesterday';

@Pipe({ name: 'dfnsStartOfYesterday', standalone: true })
export class StartOfYesterdayPipe implements PipeTransform {
  transform(): Date {
    return startOfYesterday();
  }
}

/**
 * @deprecated Import the standalone `StartOfYesterdayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [StartOfYesterdayPipe],
  exports: [StartOfYesterdayPipe]
})
export class StartOfYesterdayPipeModule {}
