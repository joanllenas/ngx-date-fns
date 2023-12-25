import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSameISOWeek } from 'date-fns/isSameISOWeek';

@Pipe({
  name: 'dfnsIsSameISOWeek'
})
export class IsSameISOWeekPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameISOWeek(dateLeft, dateRight);
  }
}

@NgModule({
  declarations: [IsSameISOWeekPipe],
  exports: [IsSameISOWeekPipe]
})
export class IsSameISOWeekPipeModule {}
