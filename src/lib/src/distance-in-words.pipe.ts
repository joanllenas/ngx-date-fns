import { Pipe, PipeTransform } from "@angular/core";
import { distanceInWords } from "date-fns";
import {
  DateFnsConfigurationService,
  calculateLocale
} from "./date-fns-configuration.service";

@Pipe({ name: "dfnsDistanceInWords", pure: false })
export class DistanceInWordsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = "dfnsDistanceInWords: missing required arguments";

  constructor(public config: DateFnsConfigurationService) {}

  transform(
    dateToCompare: string | number | Date,
    date: string | number | Date,
    options?: {
      includeSeconds?: boolean;
      addSuffix?: boolean;
      locale?: Object;
    }
  ): string {
    if (!dateToCompare || !date) {
      throw new Error(DistanceInWordsPipe.NO_ARGS_ERROR);
    }
    return distanceInWords(
      dateToCompare,
      date,
      calculateLocale(options, this.config)
    );
  }
}
