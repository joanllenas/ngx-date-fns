import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSameHour } from 'date-fns/isSameHour';

@Pipe({
  name: 'dfnsIsSameHour',
  standalone: true
})
export class IsSameHourPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameHour(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `IsSameHourPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsSameHourPipe],
  exports: [IsSameHourPipe]
})
export class IsSameHourPipeModule {}
