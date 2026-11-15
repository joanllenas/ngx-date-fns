import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getTime } from 'date-fns/getTime';

@Pipe({ name: 'dfnsGetTime', standalone: true })
export class GetTimePipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getTime(date);
  }
}

/**
 * @deprecated Import the standalone `GetTimePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetTimePipe],
  exports: [GetTimePipe]
})
export class GetTimePipeModule {}
