import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInWeeks from 'date-fns/esm/differenceInWeeks';

@Pipe({ name: 'dfnsDifferenceInWeeks' })
export class DifferenceInWeeksPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInWeeks(dateLeft, dateRight);
  }
}

@NgModule({
  declarations: [DifferenceInWeeksPipe],
  exports: [DifferenceInWeeksPipe]
})
export class DifferenceInWeeksPipeModule {}
