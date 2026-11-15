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
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import { isValidDate } from './utils';

@Pipe({ name: 'dfnsFormatDistanceToNow', pure: false, standalone: true })
export class FormatDistanceToNowPipe implements PipeTransform, OnDestroy {
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
    date?: DateFnsInputDate | null | undefined,
    options?: {
      includeSeconds?: boolean;
      addSuffix?: boolean;
      locale?: Locale;
    }
  ): string {
    if (isValidDate(date)) {
      return formatDistanceToNow(date, calculateLocale(options, this.config));
    }
    return '';
  }
}

/**
 * @deprecated Import the standalone `FormatDistanceToNowPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [FormatDistanceToNowPipe],
  exports: [FormatDistanceToNowPipe]
})
export class FormatDistanceToNowPipeModule {}
