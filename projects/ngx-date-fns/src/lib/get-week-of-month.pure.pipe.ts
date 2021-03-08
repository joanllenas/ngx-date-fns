import { NgModule, Pipe, PipeTransform } from '@angular/core';
import en from 'date-fns/esm/locale/en-US';
type Locale = typeof en;
import getWeekOfMonth from 'date-fns/esm/getWeekOfMonth';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';

@Pipe({ name: 'dfnsGetWeekOfMonthPure' })
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

@NgModule({
  declarations: [GetWeekOfMonthPurePipe],
  exports: [GetWeekOfMonthPurePipe]
})
export class GetWeekOfMonthPurePipeModule {}
