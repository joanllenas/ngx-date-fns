import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import startOfWeekYear from 'date-fns/startOfWeekYear';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import {
  DateFnsFirstWeekDays,
  DateFnsInputDate,
  DateFnsWeekIndex
} from './types';

@Pipe({ name: 'dfnsStartOfWeekYearPure' })
export class StartOfWeekYearPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
      firstWeekContainsDate?: DateFnsFirstWeekDays;
    }
  ): Date {
    return startOfWeekYear(date, calculateLocale(options, this.config));
  }
}

@NgModule({
  declarations: [StartOfWeekYearPurePipe],
  exports: [StartOfWeekYearPurePipe]
})
export class StartOfWeekYearPurePipeModule {}
