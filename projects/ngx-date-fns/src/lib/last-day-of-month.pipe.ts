import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import lastDayOfMonth from 'date-fns/lastDayOfMonth';

@Pipe({ name: 'dfnsLastDayOfMonth' })
export class LastDayOfMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return lastDayOfMonth(date);
  }
}
