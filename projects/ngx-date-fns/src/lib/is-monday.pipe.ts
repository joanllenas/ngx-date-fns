import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isMonday } from 'date-fns/isMonday';

@Pipe({
  name: 'dfnsIsMonday',
  standalone: true
})
export class IsMondayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isMonday(date);
  }
}

/**
 * @deprecated Import the standalone `IsMondayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsMondayPipe],
  exports: [IsMondayPipe]
})
export class IsMondayPipeModule {}
