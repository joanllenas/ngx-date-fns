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
import en from 'date-fns/esm/locale/en-US';
type Locale = typeof en;
import getWeek from 'date-fns/esm/getWeek';
import { Subscription } from 'rxjs';
import {
  DateFnsConfigurationService,
  calculateLocale
} from './date-fns-configuration.service';

@Pipe({ name: 'dfnsGetWeek', pure: false })
export class GetWeekPipe implements PipeTransform, OnDestroy {
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
  ): number {
    return getWeek(date, calculateLocale(options, this.config));
  }
}

@NgModule({
  declarations: [GetWeekPipe],
  exports: [GetWeekPipe]
})
export class GetWeekPipeModule {}
