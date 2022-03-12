import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import getWeekYear from 'date-fns/getWeekYear';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import {
  DateFnsFirstWeekDays,
  DateFnsInputDate,
  DateFnsWeekIndex
} from './types';

@Pipe({ name: 'dfnsGetWeekYearPure' })
export class GetWeekYearPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
      firstWeekContainsDate?: DateFnsFirstWeekDays;
    }
  ): number {
    return getWeekYear(date, calculateLocale(options, this.config));
  }
}

@NgModule({
  declarations: [GetWeekYearPurePipe],
  exports: [GetWeekYearPurePipe]
})
export class GetWeekYearPurePipeModule {}
