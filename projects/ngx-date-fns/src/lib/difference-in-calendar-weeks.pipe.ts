import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import { differenceInCalendarWeeks } from 'date-fns/differenceInCalendarWeeks';

@Pipe({ name: 'dfnsDifferenceInCalendarWeeks', standalone: true })
export class DifferenceInCalendarWeeksPipe implements PipeTransform {
  transform(
    dateLeft: DateFnsInputDate,
    dateRight: DateFnsInputDate,
    options?: {
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): number {
    return differenceInCalendarWeeks(dateLeft, dateRight, options);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInCalendarWeeksPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInCalendarWeeksPipe],
  exports: [DifferenceInCalendarWeeksPipe]
})
export class DifferenceInCalendarWeeksPipeModule {}
