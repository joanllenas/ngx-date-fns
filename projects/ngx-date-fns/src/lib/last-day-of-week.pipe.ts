import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import { Locale } from 'date-fns';
import lastDayOfWeek from 'date-fns/lastDayOfWeek';

@Pipe({ name: 'dfnsLastDayOfWeek' })
export class LastDayOfWeekPipe implements PipeTransform {
  transform(
    date: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): Date {
    return lastDayOfWeek(date, options);
  }
}
