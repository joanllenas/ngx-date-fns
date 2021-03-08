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
import getWeeksInMonth from 'date-fns/esm/getWeeksInMonth';
import { Subscription } from 'rxjs';
import {
  DateFnsConfigurationService,
  calculateLocale
} from './date-fns-configuration.service';

@Pipe({ name: 'dfnsGetWeeksInMonth', pure: false })
export class GetWeeksInMonthPipe implements PipeTransform, OnDestroy {
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
  ): number {
    return getWeeksInMonth(date, calculateLocale(options, this.config));
  }
}

@NgModule({
  declarations: [GetWeeksInMonthPipe],
  exports: [GetWeeksInMonthPipe]
})
export class GetWeeksInMonthPipeModule {}
