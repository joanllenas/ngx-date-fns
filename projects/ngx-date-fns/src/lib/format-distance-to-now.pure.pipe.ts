import { Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate } from './types';

@Pipe({ name: 'dfnsFormatDistanceToNowPure' })
export class FormatDistanceToNowPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate,
    options?: {
      includeSeconds?: boolean;
      addSuffix?: boolean;
      locale?: Locale;
    }
  ): string {
    return formatDistanceToNow(date, calculateLocale(options, this.config));
  }
}
