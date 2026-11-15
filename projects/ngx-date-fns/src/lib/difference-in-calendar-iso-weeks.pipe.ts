import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInCalendarISOWeeks } from 'date-fns/differenceInCalendarISOWeeks';

@Pipe({ name: 'dfnsDifferenceInCalendarISOWeeks', standalone: true })
export class DifferenceInCalendarISOWeeksPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInCalendarISOWeeks(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInCalendarISOWeeksPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInCalendarISOWeeksPipe],
  exports: [DifferenceInCalendarISOWeeksPipe]
})
export class DifferenceInCalendarISOWeeksPipeModule {}
