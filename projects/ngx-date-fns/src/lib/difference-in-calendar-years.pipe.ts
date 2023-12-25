import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInCalendarYears } from 'date-fns/differenceInCalendarYears';

@Pipe({ name: 'dfnsDifferenceInCalendarYears' })
export class DifferenceInCalendarYearsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInCalendarYears(dateLeft, dateRight);
  }
}

@NgModule({
  declarations: [DifferenceInCalendarYearsPipe],
  exports: [DifferenceInCalendarYearsPipe]
})
export class DifferenceInCalendarYearsPipeModule {}
