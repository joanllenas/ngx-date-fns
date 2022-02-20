import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInDays from 'date-fns/differenceInDays';

@Pipe({ name: 'dfnsDifferenceInDays' })
export class DifferenceInDaysPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInDays(dateLeft, dateRight);
  }
}

@NgModule({
  declarations: [DifferenceInDaysPipe],
  exports: [DifferenceInDaysPipe]
})
export class DifferenceInDaysPipeModule {}
