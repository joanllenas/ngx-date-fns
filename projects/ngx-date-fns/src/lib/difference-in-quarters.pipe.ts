import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInQuarters } from 'date-fns/differenceInQuarters';

@Pipe({ name: 'dfnsDifferenceInQuarters', standalone: true })
export class DifferenceInQuartersPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInQuarters(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInQuartersPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInQuartersPipe],
  exports: [DifferenceInQuartersPipe]
})
export class DifferenceInQuartersPipeModule {}
