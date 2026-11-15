import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInMilliseconds } from 'date-fns/differenceInMilliseconds';

@Pipe({ name: 'dfnsDifferenceInMilliseconds', standalone: true })
export class DifferenceInMillisecondsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInMilliseconds(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInMillisecondsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInMillisecondsPipe],
  exports: [DifferenceInMillisecondsPipe]
})
export class DifferenceInMillisecondsPipeModule {}
