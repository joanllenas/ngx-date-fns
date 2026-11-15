import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { startOfWeek } from 'date-fns/startOfWeek';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';

@Pipe({ name: 'dfnsStartOfWeekPure', standalone: true })
export class StartOfWeekPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): Date {
    return startOfWeek(date, calculateLocale(options, this.config));
  }
}

/**
 * @deprecated Import the standalone `StartOfWeekPurePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [StartOfWeekPurePipe],
  exports: [StartOfWeekPurePipe]
})
export class StartOfWeekPurePipeModule {}
