import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { startOfMonth } from 'date-fns/startOfMonth';

@Pipe({ name: 'dfnsStartOfMonth', standalone: true })
export class StartOfMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfMonth(date);
  }
}

/**
 * @deprecated Import the standalone `StartOfMonthPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [StartOfMonthPipe],
  exports: [StartOfMonthPipe]
})
export class StartOfMonthPipeModule {}
