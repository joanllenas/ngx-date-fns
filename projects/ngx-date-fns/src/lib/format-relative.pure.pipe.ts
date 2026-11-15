import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { formatRelative } from 'date-fns/formatRelative';
import { DateFnsInputDate } from './types';
import {
  DateFnsConfigurationService,
  calculateLocale
} from './date-fns-configuration.service';
import { isValidDate } from './utils';

@Pipe({ name: 'dfnsFormatRelativePure', standalone: true })
export class FormatRelativePurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate | null | undefined,
    dateToCompare: DateFnsInputDate | null | undefined,
    options?: {
      locale?: Locale;
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    }
  ): string {
    if (isValidDate(date) && isValidDate(dateToCompare)) {
      return formatRelative(
        date,
        dateToCompare,
        calculateLocale(options, this.config)
      );
    }
    return '';
  }
}

/**
 * @deprecated Import the standalone `FormatRelativePurePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [FormatRelativePurePipe],
  exports: [FormatRelativePurePipe]
})
export class FormatRelativePurePipeModule {}
