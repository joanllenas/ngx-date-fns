import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { getWeeksInMonth } from 'date-fns/getWeeksInMonth';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';

@Pipe({ name: 'dfnsGetWeeksInMonthPure', standalone: true })
export class GetWeeksInMonthPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): number {
    return getWeeksInMonth(date, calculateLocale(options, this.config));
  }
}

/**
 * @deprecated Import the standalone `GetWeeksInMonthPurePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetWeeksInMonthPurePipe],
  exports: [GetWeeksInMonthPurePipe]
})
export class GetWeeksInMonthPurePipeModule {}
