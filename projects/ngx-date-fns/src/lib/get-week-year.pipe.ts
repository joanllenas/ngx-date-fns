import { Pipe, PipeTransform } from '@angular/core';
import {
  DateFnsInputDate,
  DateFnsWeekIndex,
  DateFnsFirstWeekDays
} from './types';
import { Locale } from 'date-fns';
import getWeekYear from 'date-fns/getWeekYear';

@Pipe({ name: 'dfnsGetWeekYear' })
export class GetWeekYearPipe implements PipeTransform {
  transform(
    date: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
      firstWeekContainsDate?: DateFnsFirstWeekDays;
    }
  ): number {
    return getWeekYear(date, options);
  }
}
