import {
  ChangeDetectorRef,
  OnDestroy,
  Pipe,
  PipeTransform
} from '@angular/core';
import { Locale } from 'date-fns';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
import startOfWeek from 'date-fns/startOfWeek';
import { Subscription } from 'rxjs';
import {
  calculateLocale,
  DateFnsConfigurationService
} from '../date-fns-configuration.service';

const formats = {
  x1: 'eeeee',
  x2: 'eeeeee',
  x3: 'eee',
  full: 'eeee'
};

/**
 * - `x1`: One char. 'M' for Monday.
 * - `x2`: Two chars. 'Mo' for Monday.
 * - `x3`: Three chars. 'Mon' for Monday.
 * - `full`: Full weekday name. 'Monday' for Monday.
 */
export type WeekdayNameFormat = keyof typeof formats;

@Pipe({ name: 'dfnsWeekdayName', pure: false })
export class WeekdayNamePipe implements PipeTransform, OnDestroy {
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
    day: number,
    view: WeekdayNameFormat = 'full',
    options?: {
      locale?: Locale;
    }
  ): string {
    const locale = calculateLocale(options, this.config);
    const now = new Date();
    const week = eachDayOfInterval({
      start: startOfWeek(now, locale),
      end: endOfWeek(now, locale)
    });
    return format(week[day], formats[view], locale);
  }
}
