import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { formatDistanceToNowStrict } from 'date-fns/formatDistanceToNowStrict';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsUnit, DateFnsRoundingMethod } from './types';
import { isValidDate } from './utils';

@Pipe({ name: 'dfnsFormatDistanceToNowStrictPure' })
export class FormatDistanceToNowStrictPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date?: DateFnsInputDate | null | undefined,
    options?: {
      addSuffix?: boolean;
      unit?: DateFnsUnit;
      roundingMethod?: DateFnsRoundingMethod;
      locale?: Locale;
    }
  ): string {
    if (isValidDate(date)) {
      return formatDistanceToNowStrict(
        date,
        calculateLocale(options, this.config)
      );
    }
    return '';
  }
}

@NgModule({
  declarations: [FormatDistanceToNowStrictPurePipe],
  exports: [FormatDistanceToNowStrictPurePipe]
})
export class FormatDistanceToNowStrictPurePipeModule {}
