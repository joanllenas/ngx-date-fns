import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getMinutes } from 'date-fns/getMinutes';

@Pipe({ name: 'dfnsGetMinutes', standalone: true })
export class GetMinutesPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getMinutes(date);
  }
}

/**
 * @deprecated Import the standalone `GetMinutesPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetMinutesPipe],
  exports: [GetMinutesPipe]
})
export class GetMinutesPipeModule {}
