import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import formatDistance from 'date-fns/formatDistance';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate } from './types';

@Pipe({ name: 'dfnsFormatDistancePure' })
export class FormatDistancePurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate,
    dateToCompare: DateFnsInputDate,
    options?: {
      includeSeconds?: boolean;
      addSuffix?: boolean;
      locale?: Locale;
    }
  ): string {
    return formatDistance(
      date,
      dateToCompare,
      calculateLocale(options, this.config)
    );
  }
}

@NgModule({
  declarations: [FormatDistancePurePipe],
  exports: [FormatDistancePurePipe]
})
export class FormatDistancePurePipeModule {}
