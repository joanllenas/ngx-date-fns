import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInISOWeekYears } from 'date-fns/differenceInISOWeekYears';

@Pipe({ name: 'dfnsDifferenceInISOWeekYears', standalone: true })
export class DifferenceInISOWeekYearsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInISOWeekYears(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInISOWeekYearsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInISOWeekYearsPipe],
  exports: [DifferenceInISOWeekYearsPipe]
})
export class DifferenceInISOWeekYearsPipeModule {}
