import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSameQuarter } from 'date-fns/isSameQuarter';

@Pipe({
  name: 'dfnsIsSameQuarter',
  standalone: true
})
export class IsSameQuarterPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameQuarter(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `IsSameQuarterPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsSameQuarterPipe],
  exports: [IsSameQuarterPipe]
})
export class IsSameQuarterPipeModule {}
