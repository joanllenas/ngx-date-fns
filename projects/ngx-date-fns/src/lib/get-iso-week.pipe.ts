import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getISOWeek from 'date-fns/esm/getISOWeek';

@Pipe({ name: 'dfnsGetISOWeek' })
export class GetISOWeekPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getISOWeek(date);
  }
}

@NgModule({
  declarations: [GetISOWeekPipe],
  exports: [GetISOWeekPipe]
})
export class GetISOWeekPipeModule {}
