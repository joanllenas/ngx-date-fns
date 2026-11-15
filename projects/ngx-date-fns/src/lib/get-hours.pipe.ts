import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getHours } from 'date-fns/getHours';

@Pipe({ name: 'dfnsGetHours', standalone: true })
export class GetHoursPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getHours(date);
  }
}

/**
 * @deprecated Import the standalone `GetHoursPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetHoursPipe],
  exports: [GetHoursPipe]
})
export class GetHoursPipeModule {}
