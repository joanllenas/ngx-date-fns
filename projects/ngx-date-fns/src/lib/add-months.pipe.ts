import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import addMonths from 'date-fns/addMonths';

@Pipe({ name: 'dfnsAddMonths' })
export class AddMonthsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addMonths(date, amount);
  }
}
