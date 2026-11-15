import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { lastDayOfISOWeek } from 'date-fns/lastDayOfISOWeek';

@Pipe({ name: 'dfnsLastDayOfISOWeek', standalone: true })
export class LastDayOfISOWeekPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return lastDayOfISOWeek(date);
  }
}

/**
 * @deprecated Import the standalone `LastDayOfISOWeekPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [LastDayOfISOWeekPipe],
  exports: [LastDayOfISOWeekPipe]
})
export class LastDayOfISOWeekPipeModule {}
