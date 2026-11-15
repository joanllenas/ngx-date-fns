import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import { endOfWeek } from 'date-fns/endOfWeek';

@Pipe({ name: 'dfnsEndOfWeek', standalone: true })
export class EndOfWeekPipe implements PipeTransform {
  transform(
    date: DateFnsInputDate,
    options?: {
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): Date {
    return endOfWeek(date, options);
  }
}

/**
 * @deprecated Import the standalone `EndOfWeekPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [EndOfWeekPipe],
  exports: [EndOfWeekPipe]
})
export class EndOfWeekPipeModule {}
