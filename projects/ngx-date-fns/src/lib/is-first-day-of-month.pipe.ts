import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isFirstDayOfMonth } from 'date-fns/isFirstDayOfMonth';

@Pipe({
  name: 'dfnsIsFirstDayOfMonth',
  standalone: true
})
export class IsFirstDayOfMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isFirstDayOfMonth(date);
  }
}

/**
 * @deprecated Import the standalone `IsFirstDayOfMonthPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsFirstDayOfMonthPipe],
  exports: [IsFirstDayOfMonthPipe]
})
export class IsFirstDayOfMonthPipeModule {}
