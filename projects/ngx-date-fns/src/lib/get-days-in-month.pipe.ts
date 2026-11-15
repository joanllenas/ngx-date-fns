import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getDaysInMonth } from 'date-fns/getDaysInMonth';

@Pipe({ name: 'dfnsGetDaysInMonth', standalone: true })
export class GetDaysInMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getDaysInMonth(date);
  }
}

/**
 * @deprecated Import the standalone `GetDaysInMonthPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetDaysInMonthPipe],
  exports: [GetDaysInMonthPipe]
})
export class GetDaysInMonthPipeModule {}
