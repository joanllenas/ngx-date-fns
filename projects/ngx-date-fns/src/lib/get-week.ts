import { Pipe, PipeTransform } from '@angular/core';
import {
  DateFnsInputDate,
  DateFnsWeekIndex,
  DateFnsFirstWeekDays
} from './types';
import { Locale } from 'date-fns';
import getWeek from 'date-fns/getWeek';

@Pipe({ name: 'dfnsGetWeek' })
export class GetWeekPipe implements PipeTransform {
  transform(
    date: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
      firstWeekContainsDate?: DateFnsFirstWeekDays;
    }
  ): number {
    return getWeek(date, options);
  }
}
