import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInBusinessDays from 'date-fns/esm/differenceInBusinessDays';

@Pipe({ name: 'dfnsDifferenceInBusinessDays' })
export class DifferenceInBusinessDaysPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInBusinessDays(dateLeft, dateRight);
  }
}

@NgModule({
  declarations: [DifferenceInBusinessDaysPipe],
  exports: [DifferenceInBusinessDaysPipe]
})
export class DifferenceInBusinessDaysPipeModule {}
