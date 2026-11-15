import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isToday } from 'date-fns/isToday';

@Pipe({ name: 'dfnsIsToday', standalone: true })
export class IsTodayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isToday(date);
  }
}

/**
 * @deprecated Import the standalone `IsTodayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsTodayPipe],
  exports: [IsTodayPipe]
})
export class IsTodayPipeModule {}
