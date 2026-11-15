import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { endOfDay } from 'date-fns/endOfDay';

@Pipe({ name: 'dfnsEndOfDay', standalone: true })
export class EndOfDayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfDay(date);
  }
}

/**
 * @deprecated Import the standalone `EndOfDayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [EndOfDayPipe],
  exports: [EndOfDayPipe]
})
export class EndOfDayPipeModule {}
