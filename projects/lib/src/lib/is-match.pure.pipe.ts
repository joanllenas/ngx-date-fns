import { NgModule, Pipe, PipeTransform } from '@angular/core';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import isMatch from 'date-fns/isMatch';
import { DateFnsFirstWeekDays, DateFnsWeekIndex } from './types';

@Pipe({ name: 'dfnsIsMatchPure' })
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

@NgModule({
  declarations: [IsMatchPurePipe],
  exports: [IsMatchPurePipe]
})
export class IsMatchPurePipeModule {}
