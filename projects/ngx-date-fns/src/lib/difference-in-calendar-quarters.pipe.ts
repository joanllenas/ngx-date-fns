import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInCalendarQuarters } from 'date-fns/differenceInCalendarQuarters';

@Pipe({ name: 'dfnsDifferenceInCalendarQuarters', standalone: true })
export class DifferenceInCalendarQuartersPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInCalendarQuarters(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInCalendarQuartersPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInCalendarQuartersPipe],
  exports: [DifferenceInCalendarQuartersPipe]
})
export class DifferenceInCalendarQuartersPipeModule {}
