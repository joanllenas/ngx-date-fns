import { NgModule, Pipe, PipeTransform } from '@angular/core';
import en from 'date-fns/esm/locale/en-US';
type Locale = typeof en;
import formatDistanceToNow from 'date-fns/esm/formatDistanceToNow';
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
