import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getDaysInMonth from 'date-fns/getDaysInMonth';

@Pipe({ name: 'dfnsGetDaysInMonth' })
export class GetDaysInMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getDaysInMonth(date);
  }
}
