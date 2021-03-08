import { NgModule, Pipe, PipeTransform } from '@angular/core';
import en from 'date-fns/esm/locale/en-US';
type Locale = typeof en;
import getWeeksInMonth from 'date-fns/esm/getWeeksInMonth';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';

@Pipe({ name: 'dfnsGetWeeksInMonthPure' })
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

@NgModule({
  declarations: [GetWeeksInMonthPurePipe],
  exports: [GetWeeksInMonthPurePipe]
})
export class GetWeeksInMonthPurePipeModule {}
