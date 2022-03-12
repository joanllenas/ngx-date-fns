import {
  ChangeDetectorRef,
  NgModule,
  OnDestroy,
  Pipe,
  PipeTransform
} from '@angular/core';
import { Subscription } from 'rxjs';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { isMatch } from 'date-fns';
import { DateFnsFirstWeekDays, DateFnsWeekIndex } from './types';

@Pipe({ name: 'dfnsIsMatch', pure: false })
export class IsMatchPipe implements PipeTransform, OnDestroy {
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
    dateString: string,
    formatString: string,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
      firstWeekContainsDate?: DateFnsFirstWeekDays;
      useAdditionalWeekYearTokens?: boolean;
      useAdditionalDayOfYearTokens?: boolean;
    }
  ): boolean {
    return isMatch(
      dateString,
      formatString,
      calculateLocale(options, this.config)
    );
  }
}

@NgModule({
  declarations: [IsMatchPipe],
  exports: [IsMatchPipe]
})
export class IsMatchPipeModule {}
