import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isSameWeek from 'date-fns/isSameWeek';

@Pipe({
  name: 'dfnsIsSameWeek'
})
export class IsSameWeekPipe implements PipeTransform {

  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameWeek(dateLeft, dateRight);
  }

}

@NgModule({
  declarations: [IsSameWeekPipe],
  exports: [IsSameWeekPipe]
})
export class IsSameWeekPipeModule { }
