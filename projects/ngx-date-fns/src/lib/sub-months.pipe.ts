import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import subMonths from 'date-fns/subMonths';

@Pipe({ name: 'dfnsSubMonths' })
export class SubMonthsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subMonths(date, amount);
  }
}
