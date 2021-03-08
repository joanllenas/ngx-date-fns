import { NgModule, Pipe, PipeTransform } from '@angular/core';
import en from 'date-fns/esm/locale/en-US';
type Locale = typeof en;
import parse from 'date-fns/esm/parse';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate } from './types';

@Pipe({ name: 'dfnsParsePure' })
export class ParsePurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    dateString: string,
    formatString: string,
    backupDate: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
      firstWeekContainsDate?: number;
      useAdditionalWeekYearTokens?: boolean;
      useAdditionalDayOfYearTokens?: boolean;
    }
  ): Date {
    return parse(
      dateString,
      formatString,
      backupDate,
      calculateLocale(options, this.config)
    );
  }
}

@NgModule({
  declarations: [ParsePurePipe],
  exports: [ParsePurePipe]
})
export class ParsePurePipeModule {}
