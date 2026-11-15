import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSameYear } from 'date-fns/isSameYear';

@Pipe({ name: 'dfnsIsSameYear', standalone: true })
export class IsSameYearPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameYear(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `IsSameYearPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsSameYearPipe],
  exports: [IsSameYearPipe]
})
export class IsSameYearPipeModule {}
