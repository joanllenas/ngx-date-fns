import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInCalendarISOWeeks from 'date-fns/esm/differenceInCalendarISOWeeks';

@Pipe({ name: 'dfnsDifferenceInCalendarISOWeeks' })
export class DifferenceInCalendarISOWeeksPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInCalendarISOWeeks(dateLeft, dateRight);
  }
}

@NgModule({
  declarations: [DifferenceInCalendarISOWeeksPipe],
  exports: [DifferenceInCalendarISOWeeksPipe]
})
export class DifferenceInCalendarISOWeeksPipeModule {}
