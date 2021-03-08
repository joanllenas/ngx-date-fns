import { NgModule, Pipe, PipeTransform } from '@angular/core';
import en from 'date-fns/esm/locale/en-US';
type Locale = typeof en;
import formatDistance from 'date-fns/esm/formatDistance';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate } from './types';
import { isValidDate } from './utils';

@Pipe({ name: 'dfnsFormatDistancePure' })
export class FormatDistancePurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate | null | undefined,
    dateToCompare: DateFnsInputDate | null | undefined,
    options?: {
      includeSeconds?: boolean;
      addSuffix?: boolean;
      locale?: Locale;
    }
  ): string {
    if (isValidDate(date) && isValidDate(dateToCompare)) {
      return formatDistance(
        date,
        dateToCompare,
        calculateLocale(options, this.config)
      );
    }
    return '';
  }
}

@NgModule({
  declarations: [FormatDistancePurePipe],
  exports: [FormatDistancePurePipe]
})
export class FormatDistancePurePipeModule {}
