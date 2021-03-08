import {
  Pipe,
  PipeTransform,
  ChangeDetectorRef,
  OnDestroy,
  NgModule
} from '@angular/core';
import { DateFnsInputDate } from './types';
import {
  DateFnsConfigurationService,
  calculateLocale
} from './date-fns-configuration.service';
import { Subscription } from 'rxjs';
import en from 'date-fns/esm/locale/en-US';
type Locale = typeof en;
import formatDistance from 'date-fns/esm/formatDistance';
import { isValidDate } from './utils';

@Pipe({ name: 'dfnsFormatDistance', pure: false })
export class FormatDistancePipe implements PipeTransform, OnDestroy {
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
      includeSeconds?: boolean;
      addSuffix?: boolean;
      locale?: Locale;
    }
  ): string {
    if (isValidDate(date) && isValidDate(dateToCompare)) {
      return formatDistance(
        date,
        dateToCompare,
        calculateLocale(options, this.config)
      );
    }
    return '';
  }
}

@NgModule({
  declarations: [FormatDistancePipe],
  exports: [FormatDistancePipe]
})
export class FormatDistancePipeModule {}
