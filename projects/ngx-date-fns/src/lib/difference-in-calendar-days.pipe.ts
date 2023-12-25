import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInCalendarDays } from 'date-fns/differenceInCalendarDays';

@Pipe({ name: 'dfnsDifferenceInCalendarDays' })
export class DifferenceInCalendarDaysPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInCalendarDays(dateLeft, dateRight);
  }
}

@NgModule({
  declarations: [DifferenceInCalendarDaysPipe],
  exports: [DifferenceInCalendarDaysPipe]
})
export class DifferenceInCalendarDaysPipeModule {}
