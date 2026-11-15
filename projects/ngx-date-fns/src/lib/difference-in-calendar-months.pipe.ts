import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInCalendarMonths } from 'date-fns/differenceInCalendarMonths';

@Pipe({ name: 'dfnsDifferenceInCalendarMonths', standalone: true })
export class DifferenceInCalendarMonthsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInCalendarMonths(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInCalendarMonthsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInCalendarMonthsPipe],
  exports: [DifferenceInCalendarMonthsPipe]
})
export class DifferenceInCalendarMonthsPipeModule {}
