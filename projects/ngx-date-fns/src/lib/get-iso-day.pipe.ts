import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getISODay } from 'date-fns/getISODay';

@Pipe({ name: 'dfnsGetISODay', standalone: true })
export class GetISODayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getISODay(date);
  }
}

/**
 * @deprecated Import the standalone `GetISODayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetISODayPipe],
  exports: [GetISODayPipe]
})
export class GetISODayPipeModule {}
