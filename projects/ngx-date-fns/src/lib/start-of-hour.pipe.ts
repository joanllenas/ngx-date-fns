import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { startOfHour } from 'date-fns/startOfHour';

@Pipe({ name: 'dfnsStartOfHour', standalone: true })
export class StartOfHourPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfHour(date);
  }
}

/**
 * @deprecated Import the standalone `StartOfHourPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [StartOfHourPipe],
  exports: [StartOfHourPipe]
})
export class StartOfHourPipeModule {}
