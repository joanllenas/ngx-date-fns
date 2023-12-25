import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { formatRelative } from 'date-fns/formatRelative';
import { DateFnsInputDate } from '../types';
import {
  DateFnsConfigurationService,
  calculateLocale
} from '../date-fns-configuration.service';
import { isValidDate } from '../utils';

@Pipe({ name: 'dfnsFormatRelativeToNowPure' })
export class FormatRelativeToNowPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate | null | undefined,
    options?: {
      locale?: Locale;
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    }
  ): string {
    if (isValidDate(date)) {
      const dateToCompare = Date.now();
      return formatRelative(
        date,
        dateToCompare,
        calculateLocale(options, this.config)
      );
    }
    return '';
  }
}

@NgModule({
  declarations: [FormatRelativeToNowPurePipe],
  exports: [FormatRelativeToNowPurePipe]
})
export class FormatRelativeToNowPurePipeModule {}
