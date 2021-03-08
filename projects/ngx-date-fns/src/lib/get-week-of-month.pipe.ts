import {
  Pipe,
  PipeTransform,
  ChangeDetectorRef,
  OnDestroy,
  NgModule
} from '@angular/core';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import en from 'date-fns/esm/locale/en-US';
type Locale = typeof en;
import getWeekOfMonth from 'date-fns/esm/getWeekOfMonth';
import { Subscription } from 'rxjs';
import {
  DateFnsConfigurationService,
  calculateLocale
} from './date-fns-configuration.service';

@Pipe({ name: 'dfnsGetWeekOfMonth', pure: false })
export class GetWeekOfMonthPipe implements PipeTransform, OnDestroy {
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
    return getWeekOfMonth(date, calculateLocale(options, this.config));
  }
}

@NgModule({
  declarations: [GetWeekOfMonthPipe],
  exports: [GetWeekOfMonthPipe]
})
export class GetWeekOfMonthPipeModule {}
