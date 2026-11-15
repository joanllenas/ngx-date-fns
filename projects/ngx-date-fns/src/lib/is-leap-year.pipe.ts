import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isLeapYear } from 'date-fns/isLeapYear';

@Pipe({
  name: 'dfnsIsLeapYear',
  standalone: true
})
export class IsLeapYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isLeapYear(date);
  }
}

/**
 * @deprecated Import the standalone `IsLeapYearPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsLeapYearPipe],
  exports: [IsLeapYearPipe]
})
export class IsLeapYearPipeModule {}
