import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSunday } from 'date-fns/isSunday';

@Pipe({
  name: 'dfnsIsSunday',
  standalone: true
})
export class IsSundayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isSunday(date);
  }
}

/**
 * @deprecated Import the standalone `IsSundayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsSundayPipe],
  exports: [IsSundayPipe]
})
export class IsSundayPipeModule {}
