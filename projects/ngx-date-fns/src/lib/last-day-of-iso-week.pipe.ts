import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import lastDayOfISOWeek from 'date-fns/esm/lastDayOfISOWeek';

@Pipe({ name: 'dfnsLastDayOfISOWeek' })
export class LastDayOfISOWeekPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return lastDayOfISOWeek(date);
  }
}

@NgModule({
  declarations: [LastDayOfISOWeekPipe],
  exports: [LastDayOfISOWeekPipe]
})
export class LastDayOfISOWeekPipeModule {}
