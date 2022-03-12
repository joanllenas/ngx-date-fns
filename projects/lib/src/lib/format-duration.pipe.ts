import {
  Pipe,
  PipeTransform,
  ChangeDetectorRef,
  OnDestroy,
  NgModule
} from '@angular/core';
import {
  DateFnsConfigurationService,
  calculateLocale
} from './date-fns-configuration.service';
import { Subscription } from 'rxjs';
import { Locale } from 'date-fns';
import formatDuration from 'date-fns/formatDuration';

@Pipe({ name: 'dfnsFormatDuration', pure: false })
export class FormatDurationPipe implements PipeTransform, OnDestroy {
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
    duration: Duration,
    options?: {
      format?: string[];
      zero?: boolean;
      delimiter?: string;
      locale?: Locale;
    }
  ): string {
    return formatDuration(duration, calculateLocale(options, this.config));
  }
}

@NgModule({
  declarations: [FormatDurationPipe],
  exports: [FormatDurationPipe]
})
export class FormatDurationPipeModule {}
