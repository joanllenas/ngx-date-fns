import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isThisYear } from 'date-fns/isThisYear';

@Pipe({
  name: 'dfnsIsThisYear',
  standalone: true
})
export class IsThisYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isThisYear(date);
  }
}

/**
 * @deprecated Import the standalone `IsThisYearPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsThisYearPipe],
  exports: [IsThisYearPipe]
})
export class IsThisYearPipeModule {}
