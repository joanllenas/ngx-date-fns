import { Pipe, PipeTransform } from '@angular/core';
import {
  DateFnsInputDate,
  DateFnsWeekIndex,
  DateFnsFirstWeekDays
} from './types';
import { Locale } from 'date-fns';
import startOfWeekYear from 'date-fns/startOfWeekYear';

@Pipe({ name: 'dfnsStartOfWeekYear' })
export class StartOfWeekYearPipe implements PipeTransform {
  transform(
    date: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
      firstWeekContainsDate?: DateFnsFirstWeekDays;
    }
  ): Date {
    return startOfWeekYear(date, options);
  }
}
