import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { lastDayOfYear } from 'date-fns/lastDayOfYear';

@Pipe({ name: 'dfnsLastDayOfYear', standalone: true })
export class LastDayOfYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return lastDayOfYear(date);
  }
}

/**
 * @deprecated Import the standalone `LastDayOfYearPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [LastDayOfYearPipe],
  exports: [LastDayOfYearPipe]
})
export class LastDayOfYearPipeModule {}
