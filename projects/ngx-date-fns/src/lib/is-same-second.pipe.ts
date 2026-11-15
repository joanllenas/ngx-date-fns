import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSameSecond } from 'date-fns/isSameSecond';

@Pipe({
  name: 'dfnsIsSameSecond',
  standalone: true
})
export class IsSameSecondPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameSecond(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `IsSameSecondPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsSameSecondPipe],
  exports: [IsSameSecondPipe]
})
export class IsSameSecondPipeModule {}
