import {
  Pipe,
  PipeTransform,
  ChangeDetectorRef,
  OnDestroy,
  NgModule
} from '@angular/core';
import {
  DateFnsConfigurationService,
  calculateLocale
} from './date-fns-configuration.service';
import { Subscription } from 'rxjs';
import { DateFnsInputDate } from './types';
import { Locale } from 'date-fns';
import { parse } from 'date-fns/parse';

@Pipe({ name: 'dfnsParse', pure: false, standalone: true })
export class ParsePipe implements PipeTransform, OnDestroy {
  private localeChanged$: Subscription;

  constructor(
    public config: DateFnsConfigurationService,
    public cd: ChangeDetectorRef
  ) {
    this.localeChanged$ = this.config.localeChanged.subscribe(_ =>
      this.cd.markForCheck()
    );
  }

  ngOnDestroy(): void {
    this.localeChanged$.unsubscribe();
  }

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

/**
 * @deprecated Import the standalone `ParsePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [ParsePipe],
  exports: [ParsePipe]
})
export class ParsePipeModule {}
