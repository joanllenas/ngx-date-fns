import { Pipe, PipeTransform, ChangeDetectorRef } from "@angular/core";
import { distanceInWordsToNow } from "date-fns";
import { DateFnsConfigurationService, calculateLocale } from "./date-fns-configuration.service";
import { Subscription } from "rxjs/Subscription";

@Pipe({ name: "dfnsDistanceInWordsToNow", pure: false })
export class DistanceInWordsToNowPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = "dfnsDistanceInWordsToNow: missing required arguments";

  private localeChanged$: Subscription;

  constructor(public config: DateFnsConfigurationService, public cd: ChangeDetectorRef) {
    this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
  }

  ngOnDestroy(): void {
    this.localeChanged$.unsubscribe();
  }

  transform(
    date: string | number | Date,
    options?: {
      includeSeconds?: boolean;
      addSuffix?: boolean;
      locale?: Object;
    }
  ): string {
    if (!date) {
      throw new Error(DistanceInWordsToNowPipe.NO_ARGS_ERROR);
    }
    return distanceInWordsToNow(date, calculateLocale(options, this.config));
  }
}
