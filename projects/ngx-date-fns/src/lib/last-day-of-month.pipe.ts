import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import lastDayOfMonth from 'date-fns/esm/lastDayOfMonth';

@Pipe({ name: 'dfnsLastDayOfMonth' })
export class LastDayOfMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return lastDayOfMonth(date);
  }
}

@NgModule({
  declarations: [LastDayOfMonthPipe],
  exports: [LastDayOfMonthPipe]
})
export class LastDayOfMonthPipeModule {}
