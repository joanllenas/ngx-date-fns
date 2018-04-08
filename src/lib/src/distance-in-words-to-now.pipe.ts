import { Pipe, PipeTransform } from "@angular/core";
import { distanceInWordsToNow } from "date-fns";
import { DateFnsConfigurationService, calculateLocale } from "./date-fns-configuration.service";

@Pipe({ name: "dfnsDistanceInWordsToNow", pure: false })
export class DistanceInWordsToNowPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = "dfnsDistanceInWordsToNow: missing required arguments";

  constructor(public config: DateFnsConfigurationService) {}

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
