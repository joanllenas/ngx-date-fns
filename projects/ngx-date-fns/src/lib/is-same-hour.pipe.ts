import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSameHour } from 'date-fns/isSameHour';

@Pipe({
  name: 'dfnsIsSameHour'
})
export class IsSameHourPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameHour(dateLeft, dateRight);
  }
}

@NgModule({
  declarations: [IsSameHourPipe],
  exports: [IsSameHourPipe]
})
export class IsSameHourPipeModule {}
