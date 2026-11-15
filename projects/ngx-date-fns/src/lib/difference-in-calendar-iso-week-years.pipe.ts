import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInCalendarISOWeekYears } from 'date-fns/differenceInCalendarISOWeekYears';

@Pipe({ name: 'dfnsDifferenceInCalendarISOWeekYears', standalone: true })
export class DifferenceInCalendarISOWeekYearsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInCalendarISOWeekYears(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInCalendarISOWeekYearsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInCalendarISOWeekYearsPipe],
  exports: [DifferenceInCalendarISOWeekYearsPipe]
})
export class DifferenceInCalendarISOWeekYearsPipeModule {}
