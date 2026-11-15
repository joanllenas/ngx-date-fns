import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { subMonths } from 'date-fns/subMonths';

@Pipe({ name: 'dfnsSubMonths', standalone: true })
export class SubMonthsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subMonths(date, amount);
  }
}

/**
 * @deprecated Import the standalone `SubMonthsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [SubMonthsPipe],
  exports: [SubMonthsPipe]
})
export class SubMonthsPipeModule {}
