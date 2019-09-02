import {
  Pipe,
  PipeTransform,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import {
  DateFnsConfigurationService,
  calculateLocale
} from './date-fns-configuration.service';
import { Subscription } from 'rxjs';
import { DateFnsInputDate, DateFnsUnit, DateFnsRoundingMethod } from './types';
import { Locale } from 'date-fns';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';

@Pipe({ name: 'dfnsFormatDistanceStrict', pure: false })
export class FormatDistanceStrictPipe implements PipeTransform, OnDestroy {
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
    dateToCompare: DateFnsInputDate,
    options?: {
      addSuffix?: boolean;
      unit?: DateFnsUnit;
      roundingMethod?: DateFnsRoundingMethod;
      locale?: Locale;
    }
  ): string {
    return formatDistanceStrict(
      date,
      dateToCompare,
      calculateLocale(options, this.config)
    );
  }
}
