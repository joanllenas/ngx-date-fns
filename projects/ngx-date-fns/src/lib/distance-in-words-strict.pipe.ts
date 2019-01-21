import {
  Pipe,
  PipeTransform,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { distanceInWordsStrict } from 'date-fns';
import {
  DateFnsConfigurationService,
  calculateLocale
} from './date-fns-configuration.service';
import { Subscription } from 'rxjs';

@Pipe({ name: 'dfnsDistanceInWordsStrict', pure: false })
export class DistanceInWordsStrictPipe implements PipeTransform, OnDestroy {
  static readonly NO_ARGS_ERROR =
    'dfnsDistanceInWordsStrict: missing required arguments';
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
    dateToCompare: string | number | Date,
    date: string | number | Date,
    options?: {
      addSuffix?: boolean;
      unit?: 's' | 'm' | 'h' | 'd' | 'M' | 'Y';
      partialMethod?: 'floor' | 'ceil' | 'round';
      locale?: Object | undefined;
    }
  ): string {
    if (!dateToCompare || !date) {
      throw new Error(DistanceInWordsStrictPipe.NO_ARGS_ERROR);
    }
    return distanceInWordsStrict(
      dateToCompare,
      date,
      calculateLocale(options, this.config)
    );
  }
}
