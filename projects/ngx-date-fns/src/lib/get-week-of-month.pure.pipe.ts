import { Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import getWeekOfMonth from 'date-fns/getWeekOfMonth';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';

@Pipe({ name: 'dfnsGetWeekOfMonthPure' })
export class GetWeekOfMonthPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): number {
    return getWeekOfMonth(date, calculateLocale(options, this.config));
  }
}
