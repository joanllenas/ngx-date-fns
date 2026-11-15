import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getDate } from 'date-fns/getDate';

@Pipe({ name: 'dfnsGetDate', standalone: true })
export class GetDatePipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getDate(date);
  }
}

/**
 * @deprecated Import the standalone `GetDatePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetDatePipe],
  exports: [GetDatePipe]
})
export class GetDatePipeModule {}
