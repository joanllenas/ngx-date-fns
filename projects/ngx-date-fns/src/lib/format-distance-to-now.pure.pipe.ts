import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate } from './types';
import { isValidDate } from './utils';

@Pipe({ name: 'dfnsFormatDistanceToNowPure' })
export class FormatDistanceToNowPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate | null | undefined,
    options?: {
      includeSeconds?: boolean;
      addSuffix?: boolean;
      locale?: Locale;
    }
  ): string {
    if (isValidDate(date)) {
      return formatDistanceToNow(date, calculateLocale(options, this.config));
    }
    return '';
  }
}

@NgModule({
  declarations: [FormatDistanceToNowPurePipe],
  exports: [FormatDistanceToNowPurePipe]
})
export class FormatDistanceToNowPurePipeModule {}
