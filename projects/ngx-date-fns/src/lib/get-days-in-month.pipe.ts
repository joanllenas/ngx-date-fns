import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getDaysInMonth } from 'date-fns/getDaysInMonth';

@Pipe({ name: 'dfnsGetDaysInMonth' })
export class GetDaysInMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getDaysInMonth(date);
  }
}

@NgModule({
  declarations: [GetDaysInMonthPipe],
  exports: [GetDaysInMonthPipe]
})
export class GetDaysInMonthPipeModule {}
