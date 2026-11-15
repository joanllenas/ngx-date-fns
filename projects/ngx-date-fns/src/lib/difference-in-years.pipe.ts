import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInYears } from 'date-fns/differenceInYears';

@Pipe({ name: 'dfnsDifferenceInYears', standalone: true })
export class DifferenceInYearsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInYears(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `DifferenceInYearsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [DifferenceInYearsPipe],
  exports: [DifferenceInYearsPipe]
})
export class DifferenceInYearsPipeModule {}
