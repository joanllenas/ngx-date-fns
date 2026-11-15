import { NgModule, Pipe, PipeTransform } from '@angular/core';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { isMatch } from 'date-fns/isMatch';
import { DateFnsFirstWeekDays, DateFnsWeekIndex } from './types';
import type { Locale } from 'date-fns';

@Pipe({ name: 'dfnsIsMatchPure', standalone: true })
export class IsMatchPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    dateString: string,
    formatString: string,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
      firstWeekContainsDate?: DateFnsFirstWeekDays;
      useAdditionalWeekYearTokens?: boolean;
      useAdditionalDayOfYearTokens?: boolean;
    }
  ): boolean {
    return isMatch(
      dateString,
      formatString,
      calculateLocale(options, this.config)
    );
  }
}

/**
 * @deprecated Import the standalone `IsMatchPurePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsMatchPurePipe],
  exports: [IsMatchPurePipe]
})
export class IsMatchPurePipeModule {}
