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
import { formatRelative } from 'date-fns/formatRelative';
import { isValidDate } from './utils';

@Pipe({ name: 'dfnsFormatRelative', pure: false, standalone: true })
export class FormatRelativePipe implements PipeTransform, OnDestroy {
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
 * @deprecated Import the standalone `FormatRelativePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [FormatRelativePipe],
  exports: [FormatRelativePipe]
})
export class FormatRelativePipeModule {}
