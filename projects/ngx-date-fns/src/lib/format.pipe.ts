import {
  Pipe,
  PipeTransform,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';
import { format as formatDate } from 'date-fns';
import {
  DateFnsConfigurationService,
  calculateLocale
} from './date-fns-configuration.service';
import { Subscription } from 'rxjs';

@Pipe({ name: 'dfnsFormat', pure: false })
export class FormatPipe implements PipeTransform, OnDestroy {
  static readonly NO_ARGS_ERROR = 'dfnsFormat: missing required arguments';

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
    date: string | number | Date,
    format?: string,
    options?: {
      locale?: Object;
    }
  ): string {
    if (!date) {
      throw new Error(FormatPipe.NO_ARGS_ERROR);
    }
    return formatDate(date, format, calculateLocale(options, this.config));
  }
}
