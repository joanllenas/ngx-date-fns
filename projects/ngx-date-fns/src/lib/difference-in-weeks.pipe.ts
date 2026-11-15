import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInWeeks } from 'date-fns/differenceInWeeks';

@Pipe({ name: 'dfnsDifferenceInWeeks', standalone: true })
export class DifferenceInWeeksPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInWeeks(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInWeeksPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInWeeksPipe],
  exports: [DifferenceInWeeksPipe]
})
export class DifferenceInWeeksPipeModule {}
