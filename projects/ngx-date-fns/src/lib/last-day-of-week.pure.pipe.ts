import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { lastDayOfWeek } from 'date-fns/lastDayOfWeek';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';

@Pipe({ name: 'dfnsLastDayOfWeekPure' })
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

@NgModule({
  declarations: [LastDayOfWeekPurePipe],
  exports: [LastDayOfWeekPurePipe]
})
export class LastDayOfWeekPurePipeModule {}
