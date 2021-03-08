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
import en from 'date-fns/esm/locale/en-US';
type Locale = typeof en;
import formatDistanceToNow from 'date-fns/esm/formatDistanceToNow';
import { isValidDate } from './utils';

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

@NgModule({
  declarations: [FormatDistanceToNowPipe],
  exports: [FormatDistanceToNowPipe]
})
export class FormatDistanceToNowPipeModule {}
