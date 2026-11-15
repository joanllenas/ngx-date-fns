import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getISOWeeksInYear } from 'date-fns/getISOWeeksInYear';

@Pipe({ name: 'dfnsGetISOWeeksInYear', standalone: true })
export class GetISOWeeksInYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getISOWeeksInYear(date);
  }
}

/**
 * @deprecated Import the standalone `GetISOWeeksInYearPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetISOWeeksInYearPipe],
  exports: [GetISOWeeksInYearPipe]
})
export class GetISOWeeksInYearPipeModule {}
