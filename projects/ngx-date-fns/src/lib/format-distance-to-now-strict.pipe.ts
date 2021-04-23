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
import { DateFnsInputDate, DateFnsUnit, DateFnsRoundingMethod } from './types';
import { Locale } from 'date-fns';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import { isValidDate } from './utils';

@Pipe({ name: 'dfnsFormatDistanceToNowStrict', pure: false })
export class FormatDistanceToNowStrictPipe implements PipeTransform, OnDestroy {
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
      addSuffix?: boolean;
      unit?: DateFnsUnit;
      roundingMethod?: DateFnsRoundingMethod;
      locale?: Locale;
    }
  ): string {
    if (isValidDate(date)) {
      return formatDistanceToNowStrict(
        date,
        calculateLocale(options, this.config)
      );
    }
    return '';
  }
}

@NgModule({
  declarations: [FormatDistanceToNowStrictPipe],
  exports: [FormatDistanceToNowStrictPipe]
})
export class FormatDistanceToNowStrictPipeModule {}
