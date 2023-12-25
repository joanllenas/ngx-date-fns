import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { differenceInSeconds } from 'date-fns/differenceInSeconds';

@Pipe({ name: 'dfnsDifferenceInSeconds' })
export class DifferenceInSecondsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInSeconds(dateLeft, dateRight);
  }
}

@NgModule({
  declarations: [DifferenceInSecondsPipe],
  exports: [DifferenceInSecondsPipe]
})
export class DifferenceInSecondsPipeModule {}
