import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSameISOWeek } from 'date-fns/isSameISOWeek';

@Pipe({
  name: 'dfnsIsSameISOWeek',
  standalone: true
})
export class IsSameISOWeekPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameISOWeek(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `IsSameISOWeekPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsSameISOWeekPipe],
  exports: [IsSameISOWeekPipe]
})
export class IsSameISOWeekPipeModule {}
