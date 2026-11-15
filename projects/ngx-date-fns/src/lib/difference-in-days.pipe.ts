import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInDays } from 'date-fns/differenceInDays';

@Pipe({ name: 'dfnsDifferenceInDays', standalone: true })
export class DifferenceInDaysPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInDays(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInDaysPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInDaysPipe],
  exports: [DifferenceInDaysPipe]
})
export class DifferenceInDaysPipeModule {}
