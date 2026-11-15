import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isWeekend } from 'date-fns/isWeekend';

@Pipe({ name: 'dfnsIsWeekend', standalone: true })
export class IsWeekendPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isWeekend(date);
  }
}

/**
 * @deprecated Import the standalone `IsWeekendPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsWeekendPipe],
  exports: [IsWeekendPipe]
})
export class IsWeekendPipeModule {}
