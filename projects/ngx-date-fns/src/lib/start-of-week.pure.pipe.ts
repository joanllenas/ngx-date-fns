import { NgModule, Pipe, PipeTransform } from '@angular/core';
import en from 'date-fns/esm/locale/en-US';
type Locale = typeof en;
import startOfWeek from 'date-fns/esm/startOfWeek';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';

@Pipe({ name: 'dfnsStartOfWeekPure' })
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

@NgModule({
  declarations: [StartOfWeekPurePipe],
  exports: [StartOfWeekPurePipe]
})
export class StartOfWeekPurePipeModule {}
