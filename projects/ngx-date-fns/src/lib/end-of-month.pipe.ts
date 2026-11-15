import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { endOfMonth } from 'date-fns/endOfMonth';

@Pipe({ name: 'dfnsEndOfMonth', standalone: true })
export class EndOfMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfMonth(date);
  }
}

/**
 * @deprecated Import the standalone `EndOfMonthPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [EndOfMonthPipe],
  exports: [EndOfMonthPipe]
})
export class EndOfMonthPipeModule {}
