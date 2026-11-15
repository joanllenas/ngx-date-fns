import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { endOfISOWeekYear } from 'date-fns/endOfISOWeekYear';

@Pipe({ name: 'dfnsEndOfISOWeekYear', standalone: true })
export class EndOfISOWeekYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfISOWeekYear(date);
  }
}

/**
 * @deprecated Import the standalone `EndOfISOWeekYearPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [EndOfISOWeekYearPipe],
  exports: [EndOfISOWeekYearPipe]
})
export class EndOfISOWeekYearPipeModule {}
