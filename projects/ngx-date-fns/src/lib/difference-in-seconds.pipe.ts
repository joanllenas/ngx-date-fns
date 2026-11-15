import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInSeconds } from 'date-fns/differenceInSeconds';

@Pipe({ name: 'dfnsDifferenceInSeconds', standalone: true })
export class DifferenceInSecondsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInSeconds(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInSecondsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInSecondsPipe],
  exports: [DifferenceInSecondsPipe]
})
export class DifferenceInSecondsPipeModule {}
