import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInHours from 'date-fns/esm/differenceInHours';

@Pipe({ name: 'dfnsDifferenceInHours' })
export class DifferenceInHoursPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInHours(dateLeft, dateRight);
  }
}

@NgModule({
  declarations: [DifferenceInHoursPipe],
  exports: [DifferenceInHoursPipe]
})
export class DifferenceInHoursPipeModule {}
