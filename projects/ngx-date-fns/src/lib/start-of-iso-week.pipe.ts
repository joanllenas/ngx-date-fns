import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import startOfISOWeek from 'date-fns/esm/startOfISOWeek';

@Pipe({ name: 'dfnsStartOfISOWeek' })
export class StartOfISOWeekPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfISOWeek(date);
  }
}

@NgModule({
  declarations: [StartOfISOWeekPipe],
  exports: [StartOfISOWeekPipe]
})
export class StartOfISOWeekPipeModule {}
