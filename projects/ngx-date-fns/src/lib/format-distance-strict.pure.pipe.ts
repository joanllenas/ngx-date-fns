import { Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsRoundingMethod, DateFnsUnit } from './types';

@Pipe({ name: 'dfnsFormatDistanceStrictPure' })
export class FormatDistanceStrictPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate,
    dateToCompare: DateFnsInputDate,
    options?: {
      addSuffix?: boolean;
      unit?: DateFnsUnit;
      roundingMethod?: DateFnsRoundingMethod;
      locale?: Locale;
    }
  ): string {
    return formatDistanceStrict(
      date,
      dateToCompare,
      calculateLocale(options, this.config)
    );
  }
}
