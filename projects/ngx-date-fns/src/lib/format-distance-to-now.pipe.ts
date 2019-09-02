import {
  Pipe,
  PipeTransform,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';
import {
  DateFnsConfigurationService,
  calculateLocale
} from './date-fns-configuration.service';
import { Subscription } from 'rxjs';
import { DateFnsInputDate } from './types';
import { Locale } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

@Pipe({ name: 'dfnsFormatDistanceToNow', pure: false })
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
    date: DateFnsInputDate,
    options?: {
      includeSeconds?: boolean;
      addSuffix?: boolean;
      locale?: Locale;
    }
  ): string {
    return formatDistanceToNow(date, calculateLocale(options, this.config));
  }
}
