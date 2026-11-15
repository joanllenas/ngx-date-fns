import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { startOfToday } from 'date-fns/startOfToday';

@Pipe({ name: 'dfnsStartOfToday', standalone: true })
export class StartOfTodayPipe implements PipeTransform {
  transform(): Date {
    return startOfToday();
  }
}

/**
 * @deprecated Import the standalone `StartOfTodayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [StartOfTodayPipe],
  exports: [StartOfTodayPipe]
})
export class StartOfTodayPipeModule {}
