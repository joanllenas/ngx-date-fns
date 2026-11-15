import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { lastDayOfMonth } from 'date-fns/lastDayOfMonth';

@Pipe({ name: 'dfnsLastDayOfMonth', standalone: true })
export class LastDayOfMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return lastDayOfMonth(date);
  }
}

/**
 * @deprecated Import the standalone `LastDayOfMonthPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [LastDayOfMonthPipe],
  exports: [LastDayOfMonthPipe]
})
export class LastDayOfMonthPipeModule {}
