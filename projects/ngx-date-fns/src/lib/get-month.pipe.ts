import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getMonth } from 'date-fns/getMonth';

@Pipe({ name: 'dfnsGetMonth', standalone: true })
export class GetMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getMonth(date);
  }
}

/**
 * @deprecated Import the standalone `GetMonthPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetMonthPipe],
  exports: [GetMonthPipe]
})
export class GetMonthPipeModule {}
