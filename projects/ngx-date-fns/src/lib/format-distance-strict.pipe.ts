import {
  Pipe,
  PipeTransform,
  OnDestroy,
  ChangeDetectorRef,
  NgModule
} from '@angular/core';
import {
  DateFnsConfigurationService,
  calculateLocale
} from './date-fns-configuration.service';
import { Subscription } from 'rxjs';
import { DateFnsInputDate, DateFnsUnit, DateFnsRoundingMethod } from './types';
import en from 'date-fns/esm/locale/en-US';
type Locale = typeof en;
import formatDistanceStrict from 'date-fns/esm/formatDistanceStrict';
import { isValidDate } from './utils';

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
    date: DateFnsInputDate | null | undefined,
    dateToCompare: DateFnsInputDate | null | undefined,
    options?: {
      addSuffix?: boolean;
      unit?: DateFnsUnit;
      roundingMethod?: DateFnsRoundingMethod;
      locale?: Locale;
    }
  ): string {
    if (isValidDate(date) && isValidDate(dateToCompare)) {
      return formatDistanceStrict(
        date,
        dateToCompare,
        calculateLocale(options, this.config)
      );
    }
    return '';
  }
}

@NgModule({
  declarations: [FormatDistanceStrictPipe],
  exports: [FormatDistanceStrictPipe]
})
export class FormatDistanceStrictPipeModule {}
