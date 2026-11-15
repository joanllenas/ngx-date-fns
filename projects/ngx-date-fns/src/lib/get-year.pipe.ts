import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getYear } from 'date-fns/getYear';

@Pipe({ name: 'dfnsGetYear', standalone: true })
export class GetYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getYear(date);
  }
}

/**
 * @deprecated Import the standalone `GetYearPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetYearPipe],
  exports: [GetYearPipe]
})
export class GetYearPipeModule {}
