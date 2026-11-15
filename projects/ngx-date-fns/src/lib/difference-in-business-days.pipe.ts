import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInBusinessDays } from 'date-fns/differenceInBusinessDays';

@Pipe({ name: 'dfnsDifferenceInBusinessDays', standalone: true })
export class DifferenceInBusinessDaysPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInBusinessDays(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInBusinessDaysPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInBusinessDaysPipe],
  exports: [DifferenceInBusinessDaysPipe]
})
export class DifferenceInBusinessDaysPipeModule {}
