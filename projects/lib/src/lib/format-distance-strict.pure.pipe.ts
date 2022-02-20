import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsRoundingMethod, DateFnsUnit } from './types';
import { isValidDate } from './utils';

@Pipe({ name: 'dfnsFormatDistanceStrictPure' })
export class FormatDistanceStrictPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate | null | undefined,
    dateToCompare: DateFnsInputDate | null | undefined,
    options?: {
      addSuffix?: boolean;
      unit?: DateFnsUnit;
      roundingMethod?: DateFnsRoundingMethod;
      locale?: Locale;
    }
  ): string {
    if (isValidDate(date) && isValidDate(dateToCompare)) {
      return formatDistanceStrict(
        date,
        dateToCompare,
        calculateLocale(options, this.config)
      );
    }
    return '';
  }
}

@NgModule({
  declarations: [FormatDistanceStrictPurePipe],
  exports: [FormatDistanceStrictPurePipe]
})
export class FormatDistanceStrictPurePipeModule {}
