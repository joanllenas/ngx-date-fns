import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { addMonths } from 'date-fns/addMonths';

@Pipe({ name: 'dfnsAddMonths', standalone: true })
export class AddMonthsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addMonths(date, amount);
  }
}

/**
 * @deprecated Import the standalone `AddMonthsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [AddMonthsPipe],
  exports: [AddMonthsPipe]
})
export class AddMonthsPipeModule {}
