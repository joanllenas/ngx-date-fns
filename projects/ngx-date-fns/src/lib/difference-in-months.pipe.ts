import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInMonths } from 'date-fns/differenceInMonths';

@Pipe({ name: 'dfnsDifferenceInMonths', standalone: true })
export class DifferenceInMonthsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInMonths(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInMonthsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInMonthsPipe],
  exports: [DifferenceInMonthsPipe]
})
export class DifferenceInMonthsPipeModule {}
