import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import { Locale } from 'date-fns';
import getWeekOfMonth from 'date-fns/getWeekOfMonth';

@Pipe({ name: 'dfnsGetWeekOfMonth' })
export class GetWeekOfMonthPipe implements PipeTransform {
  transform(
    date: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): number {
    return getWeekOfMonth(date, options);
  }
}
