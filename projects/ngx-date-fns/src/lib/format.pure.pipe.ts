import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import format from 'date-fns/format';
import { DateFnsInputDate } from './types';
import {
  DateFnsConfigurationService,
  calculateLocale
} from './date-fns-configuration.service';
import { isValidDate } from './utils';

@Pipe({ name: 'dfnsFormatPure' })
export class FormatPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate | null | undefined,
    dateFormat: string,
    options?: {
      locale?: Locale;
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
      firstWeekContainsDate?: number;
      useAdditionalWeekYearTokens?: boolean;
      useAdditionalDayOfYearTokens?: boolean;
    }
  ): string {
    if (isValidDate(date)) {
      return format(date, dateFormat, calculateLocale(options, this.config));
    }
    return '';
  }
}

@NgModule({
  declarations: [FormatPurePipe],
  exports: [FormatPurePipe]
})
export class FormatPurePipeModule {}
