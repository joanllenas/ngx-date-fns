import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSaturday } from 'date-fns/isSaturday';

@Pipe({
  name: 'dfnsIsSaturday',
  standalone: true
})
export class IsSaturdayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isSaturday(date);
  }
}

/**
 * @deprecated Import the standalone `IsSaturdayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsSaturdayPipe],
  exports: [IsSaturdayPipe]
})
export class IsSaturdayPipeModule {}
