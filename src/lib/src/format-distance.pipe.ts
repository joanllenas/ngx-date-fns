import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';
import {
  DateFnsConfigurationService,
  calculateLocale,
} from './date-fns-configuration.service';
import { Options } from './types/options';

@Pipe({ name: 'dfnsFormatDistance', pure: false })
export class FormatDistancePipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsFormatDistance: missing required arguments';

  constructor(public config: DateFnsConfigurationService) {}

  transform(
    dateToCompare: string | number | Date,
    date: string | number | Date,
    options?: Options
  ): string {
    if (!dateToCompare || !date) {
      throw new Error(FormatDistancePipe.NO_ARGS_ERROR);
    }
    return formatDistance(
      dateToCompare,
      date,
      calculateLocale(options, this.config)
    );
  }
}
