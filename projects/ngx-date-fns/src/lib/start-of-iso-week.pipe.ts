import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { startOfISOWeek } from 'date-fns/startOfISOWeek';

@Pipe({ name: 'dfnsStartOfISOWeek', standalone: true })
export class StartOfISOWeekPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfISOWeek(date);
  }
}

/**
 * @deprecated Import the standalone `StartOfISOWeekPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [StartOfISOWeekPipe],
  exports: [StartOfISOWeekPipe]
})
export class StartOfISOWeekPipeModule {}
