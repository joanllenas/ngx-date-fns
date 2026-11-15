import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getISOWeekYear } from 'date-fns/getISOWeekYear';

@Pipe({ name: 'dfnsGetISOWeekYear', standalone: true })
export class GetISOWeekYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getISOWeekYear(date);
  }
}

/**
 * @deprecated Import the standalone `GetISOWeekYearPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetISOWeekYearPipe],
  exports: [GetISOWeekYearPipe]
})
export class GetISOWeekYearPipeModule {}
