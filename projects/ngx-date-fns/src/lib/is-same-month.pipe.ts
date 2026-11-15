import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSameMonth } from 'date-fns/isSameMonth';

@Pipe({ name: 'dfnsIsSameMonth', standalone: true })
export class IsSameMonthPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameMonth(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `IsSameMonthPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsSameMonthPipe],
  exports: [IsSameMonthPipe]
})
export class IsSameMonthPipeModule {}
