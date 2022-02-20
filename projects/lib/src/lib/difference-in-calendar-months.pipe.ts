import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';

@Pipe({ name: 'dfnsDifferenceInCalendarMonths' })
export class DifferenceInCalendarMonthsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInCalendarMonths(dateLeft, dateRight);
  }
}

@NgModule({
  declarations: [DifferenceInCalendarMonthsPipe],
  exports: [DifferenceInCalendarMonthsPipe]
})
export class DifferenceInCalendarMonthsPipeModule {}
