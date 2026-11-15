import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { getWeek } from 'date-fns/getWeek';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import {
  DateFnsFirstWeekDays,
  DateFnsInputDate,
  DateFnsWeekIndex
} from './types';

@Pipe({ name: 'dfnsGetWeekPure', standalone: true })
export class GetWeekPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
      firstWeekContainsDate?: DateFnsFirstWeekDays;
    }
  ): number {
    return getWeek(date, calculateLocale(options, this.config));
  }
}

/**
 * @deprecated Import the standalone `GetWeekPurePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetWeekPurePipe],
  exports: [GetWeekPurePipe]
})
export class GetWeekPurePipeModule {}
