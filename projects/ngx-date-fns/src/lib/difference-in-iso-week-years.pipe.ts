import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInISOWeekYears from 'date-fns/esm/differenceInISOWeekYears';

@Pipe({ name: 'dfnsDifferenceInISOWeekYears' })
export class DifferenceInISOWeekYearsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInISOWeekYears(dateLeft, dateRight);
  }
}

@NgModule({
  declarations: [DifferenceInISOWeekYearsPipe],
  exports: [DifferenceInISOWeekYearsPipe]
})
export class DifferenceInISOWeekYearsPipeModule {}
