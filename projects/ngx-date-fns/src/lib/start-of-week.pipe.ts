import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import { Locale } from 'date-fns';
import startOfWeek from 'date-fns/startOfWeek';

@Pipe({ name: 'dfnsStartOfWeek' })
export class StartOfWeekPipe implements PipeTransform {
  transform(
    date: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): Date {
    return startOfWeek(date, options);
  }
}
