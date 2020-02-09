import {
  Pipe,
  PipeTransform,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import { Locale } from 'date-fns';
import lastDayOfWeek from 'date-fns/lastDayOfWeek';
import { Subscription } from 'rxjs';
import { DateFnsConfigurationService, calculateLocale } from '.';

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
