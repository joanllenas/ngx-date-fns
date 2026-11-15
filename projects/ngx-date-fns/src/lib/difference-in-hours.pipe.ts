import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInHours } from 'date-fns/differenceInHours';

@Pipe({ name: 'dfnsDifferenceInHours', standalone: true })
export class DifferenceInHoursPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInHours(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInHoursPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInHoursPipe],
  exports: [DifferenceInHoursPipe]
})
export class DifferenceInHoursPipeModule {}
