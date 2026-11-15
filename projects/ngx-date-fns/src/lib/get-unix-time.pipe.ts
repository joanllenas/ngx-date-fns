import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getUnixTime } from 'date-fns/getUnixTime';

@Pipe({ name: 'dfnsGetUnixTime', standalone: true })
export class GetUnixTimePipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getUnixTime(date);
  }
}

/**
 * @deprecated Import the standalone `GetUnixTimePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetUnixTimePipe],
  exports: [GetUnixTimePipe]
})
export class GetUnixTimePipeModule {}
