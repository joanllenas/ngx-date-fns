import {
  ChangeDetectorRef,
  NgModule,
  OnDestroy,
  Pipe,
  PipeTransform
} from '@angular/core';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import { Subscription } from 'rxjs';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { isSameWeek } from 'date-fns/isSameWeek';
import type { Locale } from 'date-fns';

@Pipe({ name: 'dfnsIsSameWeek', pure: false, standalone: true })
export class IsSameWeekPipe implements PipeTransform, OnDestroy {
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
    dateLeft: DateFnsInputDate,
    dateRight: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): boolean {
    return isSameWeek(
      dateLeft,
      dateRight,
      calculateLocale(options, this.config)
    );
  }
}

/**
 * @deprecated Import the standalone `IsSameWeekPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsSameWeekPipe],
  exports: [IsSameWeekPipe]
})
export class IsSameWeekPipeModule {}
