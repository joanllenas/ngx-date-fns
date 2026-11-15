import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getDayOfYear } from 'date-fns/getDayOfYear';

@Pipe({ name: 'dfnsGetDayOfYear', standalone: true })
export class GetDayOfYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getDayOfYear(date);
  }
}

/**
 * @deprecated Import the standalone `GetDayOfYearPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetDayOfYearPipe],
  exports: [GetDayOfYearPipe]
})
export class GetDayOfYearPipeModule {}
