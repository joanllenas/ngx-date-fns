import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSameMinute } from 'date-fns/isSameMinute';

@Pipe({
  name: 'dfnsIsSameMinute',
  standalone: true
})
export class IsSameMinutePipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameMinute(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `IsSameMinutePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsSameMinutePipe],
  exports: [IsSameMinutePipe]
})
export class IsSameMinutePipeModule {}
