import {
  Pipe,
  PipeTransform,
  ChangeDetectorRef,
  OnDestroy,
  NgModule
} from '@angular/core';
import { DateFnsInputDate } from './types';
import {
  DateFnsConfigurationService,
  calculateLocale
} from './date-fns-configuration.service';
import { Subscription } from 'rxjs';
import { Locale } from 'date-fns';
import formatDistance from 'date-fns/formatDistance';

@Pipe({ name: 'dfnsFormatDistance', pure: false })
export class FormatDistancePipe implements PipeTransform, OnDestroy {
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
    dateToCompare: DateFnsInputDate,
    options?: {
      includeSeconds?: boolean;
      addSuffix?: boolean;
      locale?: Locale;
    }
  ): string {
    return formatDistance(
      date,
      dateToCompare,
      calculateLocale(options, this.config)
    );
  }
}

@NgModule({
  declarations: [FormatDistancePipe],
  exports: [FormatDistancePipe]
})
export class FormatDistancePipeModule {}
