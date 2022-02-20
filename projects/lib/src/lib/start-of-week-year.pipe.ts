import {
  Pipe,
  PipeTransform,
  OnDestroy,
  ChangeDetectorRef,
  NgModule
} from '@angular/core';
import {
  DateFnsInputDate,
  DateFnsWeekIndex,
  DateFnsFirstWeekDays
} from './types';
import { Locale } from 'date-fns';
import startOfWeekYear from 'date-fns/startOfWeekYear';
import { Subscription } from 'rxjs';
import {
  DateFnsConfigurationService,
  calculateLocale
} from './date-fns-configuration.service';

@Pipe({ name: 'dfnsStartOfWeekYear', pure: false })
export class StartOfWeekYearPipe implements PipeTransform, OnDestroy {
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
      firstWeekContainsDate?: DateFnsFirstWeekDays;
    }
  ): Date {
    return startOfWeekYear(date, calculateLocale(options, this.config));
  }
}

@NgModule({
  declarations: [StartOfWeekYearPipe],
  exports: [StartOfWeekYearPipe]
})
export class StartOfWeekYearPipeModule {}
