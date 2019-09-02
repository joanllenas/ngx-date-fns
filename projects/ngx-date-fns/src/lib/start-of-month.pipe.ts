import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import startOfMonth from 'date-fns/startOfMonth';

@Pipe({ name: 'dfnsStartOfMonth' })
export class StartOfMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfMonth(date);
  }
}
