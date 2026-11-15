import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInCalendarYears } from 'date-fns/differenceInCalendarYears';

@Pipe({ name: 'dfnsDifferenceInCalendarYears', standalone: true })
export class DifferenceInCalendarYearsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInCalendarYears(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInCalendarYearsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInCalendarYearsPipe],
  exports: [DifferenceInCalendarYearsPipe]
})
export class DifferenceInCalendarYearsPipeModule {}
