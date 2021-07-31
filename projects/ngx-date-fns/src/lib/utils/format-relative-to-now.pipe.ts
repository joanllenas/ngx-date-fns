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
} from '../date-fns-configuration.service';
import { Subscription } from 'rxjs';
import { DateFnsInputDate } from '../types';
import { Locale } from 'date-fns';
import formatRelative from 'date-fns/formatRelative';
import { isValidDate } from '../utils';

@Pipe({ name: 'dfnsFormatRelativeToNow', pure: false })
export class FormatRelativeToNowPipe implements PipeTransform, OnDestroy {
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
    options?: {
      locale?: Locale;
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    }
  ): string {
    if (isValidDate(date)) {
      const dateToCompare = Date.now();
      return formatRelative(
        date,
        dateToCompare,
        calculateLocale(options, this.config)
      );
    }
    return '';
  }
}

@NgModule({
  declarations: [FormatRelativeToNowPipe],
  exports: [FormatRelativeToNowPipe]
})
export class FormatRelativeToNowPipeModule {}
