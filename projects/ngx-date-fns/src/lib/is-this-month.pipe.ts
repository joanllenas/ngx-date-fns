import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isThisMonth } from 'date-fns/isThisMonth';

@Pipe({
  name: 'dfnsIsThisMonth',
  standalone: true
})
export class IsThisMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isThisMonth(date);
  }
}

/**
 * @deprecated Import the standalone `IsThisMonthPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsThisMonthPipe],
  exports: [IsThisMonthPipe]
})
export class IsThisMonthPipeModule {}
