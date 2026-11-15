import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInCalendarDays } from 'date-fns/differenceInCalendarDays';

@Pipe({ name: 'dfnsDifferenceInCalendarDays', standalone: true })
export class DifferenceInCalendarDaysPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInCalendarDays(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInCalendarDaysPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInCalendarDaysPipe],
  exports: [DifferenceInCalendarDaysPipe]
})
export class DifferenceInCalendarDaysPipeModule {}
