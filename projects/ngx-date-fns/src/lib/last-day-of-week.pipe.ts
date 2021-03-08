import {
  Pipe,
  PipeTransform,
  OnDestroy,
  ChangeDetectorRef,
  NgModule
} from '@angular/core';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import en from 'date-fns/esm/locale/en-US';
type Locale = typeof en;
import lastDayOfWeek from 'date-fns/esm/lastDayOfWeek';
import { Subscription } from 'rxjs';
import {
  DateFnsConfigurationService,
  calculateLocale
} from './date-fns-configuration.service';

@Pipe({ name: 'dfnsLastDayOfWeek', pure: false })
export class LastDayOfWeekPipe implements PipeTransform, OnDestroy {
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
  ): Date {
    return lastDayOfWeek(date, calculateLocale(options, this.config));
  }
}

@NgModule({
  declarations: [LastDayOfWeekPipe],
  exports: [LastDayOfWeekPipe]
})
export class LastDayOfWeekPipeModule {}
