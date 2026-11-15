import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSameDay } from 'date-fns/isSameDay';

@Pipe({
  name: 'dfnsIsSameDay',
  standalone: true
})
export class IsSameDayPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameDay(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `IsSameDayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsSameDayPipe],
  exports: [IsSameDayPipe]
})
export class IsSameDayPipeModule {}
