import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import subMonths from 'date-fns/esm/subMonths';

@Pipe({ name: 'dfnsSubMonths' })
export class SubMonthsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subMonths(date, amount);
  }
}

@NgModule({
  declarations: [SubMonthsPipe],
  exports: [SubMonthsPipe]
})
export class SubMonthsPipeModule {}
