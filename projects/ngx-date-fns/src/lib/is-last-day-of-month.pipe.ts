import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isLastDayOfMonth } from 'date-fns/isLastDayOfMonth';

@Pipe({
  name: 'dfnsIsLastDayOfMonth',
  standalone: true
})
export class IsLastDayOfMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isLastDayOfMonth(date);
  }
}

/**
 * @deprecated Import the standalone `IsLastDayOfMonthPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsLastDayOfMonthPipe],
  exports: [IsLastDayOfMonthPipe]
})
export class IsLastDayOfMonthPipeModule {}
