import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getDaysInYear } from 'date-fns/getDaysInYear';

@Pipe({ name: 'dfnsGetDaysInYear', standalone: true })
export class GetDaysInYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getDaysInYear(date);
  }
}

/**
 * @deprecated Import the standalone `GetDaysInYearPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetDaysInYearPipe],
  exports: [GetDaysInYearPipe]
})
export class GetDaysInYearPipeModule {}
