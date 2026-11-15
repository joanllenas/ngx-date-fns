import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isThisISOWeek } from 'date-fns/isThisISOWeek';

@Pipe({
  name: 'dfnsIsThisISOWeek',
  standalone: true
})
export class IsThisISOWeekPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isThisISOWeek(date);
  }
}

/**
 * @deprecated Import the standalone `IsThisISOWeekPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsThisISOWeekPipe],
  exports: [IsThisISOWeekPipe]
})
export class IsThisISOWeekPipeModule {}
