import { ChangeDetectorRef, NgModule, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { Subscription } from 'rxjs';
import { calculateLocale, DateFnsConfigurationService } from './date-fns-configuration.service';
import { isThisWeek } from 'date-fns';

@Pipe({
  name: 'dfnsIsThisWeek'
})
export class IsThisWeekPipe implements PipeTransform, OnDestroy {

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
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean {
    return isThisWeek(date, calculateLocale(options, this.config));
  }

}

@NgModule({
  declarations: [IsThisWeekPipe],
  exports: [IsThisWeekPipe]
})
export class IsThisWeekPipeModule { }
