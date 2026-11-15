import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { lastDayOfISOWeekYear } from 'date-fns/lastDayOfISOWeekYear';

@Pipe({ name: 'dfnsLastDayOfISOWeekYear', standalone: true })
export class LastDayOfISOWeekYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return lastDayOfISOWeekYear(date);
  }
}

/**
 * @deprecated Import the standalone `LastDayOfISOWeekYearPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [LastDayOfISOWeekYearPipe],
  exports: [LastDayOfISOWeekYearPipe]
})
export class LastDayOfISOWeekYearPipeModule {}
