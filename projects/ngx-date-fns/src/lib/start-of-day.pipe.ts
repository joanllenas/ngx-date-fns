import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { startOfDay } from 'date-fns/startOfDay';

@Pipe({ name: 'dfnsStartOfDay', standalone: true })
export class StartOfDayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfDay(date);
  }
}

/**
 * @deprecated Import the standalone `StartOfDayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [StartOfDayPipe],
  exports: [StartOfDayPipe]
})
export class StartOfDayPipeModule {}
