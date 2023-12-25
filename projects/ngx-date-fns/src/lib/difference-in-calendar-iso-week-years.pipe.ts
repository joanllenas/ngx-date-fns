import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInCalendarISOWeekYears } from 'date-fns/differenceInCalendarISOWeekYears';

@Pipe({ name: 'dfnsDifferenceInCalendarISOWeekYears' })
export class DifferenceInCalendarISOWeekYearsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInCalendarISOWeekYears(dateLeft, dateRight);
  }
}

@NgModule({
  declarations: [DifferenceInCalendarISOWeekYearsPipe],
  exports: [DifferenceInCalendarISOWeekYearsPipe]
})
export class DifferenceInCalendarISOWeekYearsPipeModule {}
