import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getISOWeek } from 'date-fns/getISOWeek';

@Pipe({ name: 'dfnsGetISOWeek', standalone: true })
export class GetISOWeekPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getISOWeek(date);
  }
}

/**
 * @deprecated Import the standalone `GetISOWeekPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetISOWeekPipe],
  exports: [GetISOWeekPipe]
})
export class GetISOWeekPipeModule {}
