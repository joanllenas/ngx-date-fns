import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { getWeekOfMonth } from 'date-fns/getWeekOfMonth';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';

@Pipe({ name: 'dfnsGetWeekOfMonthPure', standalone: true })
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

/**
 * @deprecated Import the standalone `GetWeekOfMonthPurePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetWeekOfMonthPurePipe],
  exports: [GetWeekOfMonthPurePipe]
})
export class GetWeekOfMonthPurePipeModule {}
