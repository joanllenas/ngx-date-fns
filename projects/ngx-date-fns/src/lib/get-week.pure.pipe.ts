import { NgModule, Pipe, PipeTransform } from '@angular/core';
import en from 'date-fns/esm/locale/en-US';
type Locale = typeof en;
import getWeek from 'date-fns/esm/getWeek';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import {
  DateFnsFirstWeekDays,
  DateFnsInputDate,
  DateFnsWeekIndex
} from './types';

@Pipe({ name: 'dfnsGetWeekPure' })
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

@NgModule({
  declarations: [GetWeekPurePipe],
  exports: [GetWeekPurePipe]
})
export class GetWeekPurePipeModule {}
