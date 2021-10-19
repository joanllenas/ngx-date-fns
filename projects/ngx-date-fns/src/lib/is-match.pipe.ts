import { ChangeDetectorRef, NgModule, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { calculateLocale, DateFnsConfigurationService } from './date-fns-configuration.service';
import { isMatch } from 'date-fns';

@Pipe({
  name: 'dfnsIsMatch'
})
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
      locale?: Locale | undefined;
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined;
      useAdditionalWeekYearTokens?: boolean | undefined;
      useAdditionalDayOfYearTokens?: boolean | undefined;
    } | undefined
  ): boolean {
    return isMatch(dateString, formatString, calculateLocale(options, this.config));
  }

}

@NgModule({
  declarations: [IsMatchPipe],
  exports: [IsMatchPipe]
})
export class IsMatchPipeModule { }
