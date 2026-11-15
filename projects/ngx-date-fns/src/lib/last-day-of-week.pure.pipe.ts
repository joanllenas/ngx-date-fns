import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { lastDayOfWeek } from 'date-fns/lastDayOfWeek';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';

@Pipe({ name: 'dfnsLastDayOfWeekPure', standalone: true })
export class LastDayOfWeekPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): Date {
    return lastDayOfWeek(date, calculateLocale(options, this.config));
  }
}

/**
 * @deprecated Import the standalone `LastDayOfWeekPurePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [LastDayOfWeekPurePipe],
  exports: [LastDayOfWeekPurePipe]
})
export class LastDayOfWeekPurePipeModule {}
