import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { startOfISOWeekYear } from 'date-fns/startOfISOWeekYear';

@Pipe({ name: 'dfnsStartOfISOWeekYear', standalone: true })
export class StartOfISOWeekYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfISOWeekYear(date);
  }
}

/**
 * @deprecated Import the standalone `StartOfISOWeekYearPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [StartOfISOWeekYearPipe],
  exports: [StartOfISOWeekYearPipe]
})
export class StartOfISOWeekYearPipeModule {}
