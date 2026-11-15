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
import { Locale, isThisWeek } from 'date-fns';

@Pipe({ name: 'dfnsIsThisWeek', pure: false, standalone: true })
export class IsThisWeekPipe implements PipeTransform, OnDestroy {
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
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): boolean {
    return isThisWeek(date, calculateLocale(options, this.config));
  }
}

/**
 * @deprecated Import the standalone `IsThisWeekPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsThisWeekPipe],
  exports: [IsThisWeekPipe]
})
export class IsThisWeekPipeModule {}
