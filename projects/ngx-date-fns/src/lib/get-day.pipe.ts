import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getDay } from 'date-fns/getDay';

@Pipe({ name: 'dfnsGetDay', standalone: true })
export class GetDayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getDay(date);
  }
}

/**
 * @deprecated Import the standalone `GetDayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetDayPipe],
  exports: [GetDayPipe]
})
export class GetDayPipeModule {}
