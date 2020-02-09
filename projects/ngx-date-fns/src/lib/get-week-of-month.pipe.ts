import {
  Pipe,
  PipeTransform,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import { Locale } from 'date-fns';
import getWeekOfMonth from 'date-fns/getWeekOfMonth';
import { Subscription } from 'rxjs';
import { DateFnsConfigurationService, calculateLocale } from '.';

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
