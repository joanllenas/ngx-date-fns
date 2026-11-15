import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSameISOWeekYear } from 'date-fns/isSameISOWeekYear';

@Pipe({
  name: 'dfnsIsSameISOWeekYear',
  standalone: true
})
export class IsSameISOWeekYearPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameISOWeekYear(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `IsSameISOWeekYearPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsSameISOWeekYearPipe],
  exports: [IsSameISOWeekYearPipe]
})
export class IsSameISOWeekYearPipeModule {}
