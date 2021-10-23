import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isSameDay from 'date-fns/isSameDay';

@Pipe({
  name: 'dfnsIsSameDay'
})
export class IsSameDayPipe implements PipeTransform {

  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameDay(dateLeft, dateRight);
  }

}

@NgModule({
  declarations: [IsSameDayPipe],
  exports: [IsSameDayPipe]
})
export class IsSameDayPipeModule { }
