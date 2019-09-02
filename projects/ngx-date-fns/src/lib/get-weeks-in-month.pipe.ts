import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import { Locale } from 'date-fns';
import getWeeksInMonth from 'date-fns/getWeeksInMonth';

@Pipe({ name: 'dfnsGetWeeksInMonth' })
export class GetWeeksInMonthPipe implements PipeTransform {
  transform(
    date: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): number {
    return getWeeksInMonth(date, options);
  }
}
