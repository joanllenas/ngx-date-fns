import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { endOfISOWeek } from 'date-fns/endOfISOWeek';

@Pipe({ name: 'dfnsEndOfISOWeek', standalone: true })
export class EndOfISOWeekPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfISOWeek(date);
  }
}

/**
 * @deprecated Import the standalone `EndOfISOWeekPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [EndOfISOWeekPipe],
  exports: [EndOfISOWeekPipe]
})
export class EndOfISOWeekPipeModule {}
