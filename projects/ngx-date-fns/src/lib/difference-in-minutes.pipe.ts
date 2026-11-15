import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInMinutes } from 'date-fns/differenceInMinutes';

@Pipe({ name: 'dfnsDifferenceInMinutes', standalone: true })
export class DifferenceInMinutesPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInMinutes(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInMinutesPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInMinutesPipe],
  exports: [DifferenceInMinutesPipe]
})
export class DifferenceInMinutesPipeModule {}
