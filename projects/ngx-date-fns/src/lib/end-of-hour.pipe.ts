import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { endOfHour } from 'date-fns/endOfHour';

@Pipe({ name: 'dfnsEndOfHour', standalone: true })
export class EndOfHourPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfHour(date);
  }
}

/**
 * @deprecated Import the standalone `EndOfHourPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [EndOfHourPipe],
  exports: [EndOfHourPipe]
})
export class EndOfHourPipeModule {}
