import { NgModule, Pipe, PipeTransform } from '@angular/core';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import { isThisWeek } from 'date-fns/isThisWeek';
import type { Locale } from 'date-fns';

@Pipe({ name: 'dfnsIsThisWeekPure', standalone: true })
export class IsThisWeekPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): boolean {
    return isThisWeek(date, calculateLocale(options, this.config));
  }
}

/**
 * @deprecated Import the standalone `IsThisWeekPurePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsThisWeekPurePipe],
  exports: [IsThisWeekPurePipe]
})
export class IsThisWeekPurePipeModule {}
