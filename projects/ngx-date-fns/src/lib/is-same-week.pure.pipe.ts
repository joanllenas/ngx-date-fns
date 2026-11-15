import { NgModule, Pipe, PipeTransform } from '@angular/core';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import { isSameWeek } from 'date-fns/isSameWeek';
import type { Locale } from 'date-fns';

@Pipe({ name: 'dfnsIsSameWeekPure', standalone: true })
export class IsSameWeekPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    dateLeft: DateFnsInputDate,
    dateRight: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): boolean {
    return isSameWeek(
      dateLeft,
      dateRight,
      calculateLocale(options, this.config)
    );
  }
}

/**
 * @deprecated Import the standalone `IsSameWeekPurePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsSameWeekPurePipe],
  exports: [IsSameWeekPurePipe]
})
export class IsSameWeekPurePipeModule {}
