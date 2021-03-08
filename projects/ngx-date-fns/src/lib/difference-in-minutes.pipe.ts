import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInMinutes from 'date-fns/esm/differenceInMinutes';

@Pipe({ name: 'dfnsDifferenceInMinutes' })
export class DifferenceInMinutesPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInMinutes(dateLeft, dateRight);
  }
}

@NgModule({
  declarations: [DifferenceInMinutesPipe],
  exports: [DifferenceInMinutesPipe]
})
export class DifferenceInMinutesPipeModule {}
