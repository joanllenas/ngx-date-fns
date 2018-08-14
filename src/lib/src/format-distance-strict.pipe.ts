import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceStrict } from 'date-fns';
import {
  DateFnsConfigurationService,
  calculateLocale,
} from './date-fns-configuration.service';
import { Options } from './types/options';

@Pipe({ name: 'dfnsFormatDistanceStrict', pure: false })
export class FormatDistanceStrictPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsFormatDistanceStrict: missing required arguments';

  constructor(public config: DateFnsConfigurationService) {}

  transform(
    dateToCompare: string | number | Date,
    date: string | number | Date,
    options?: Options
  ): string {
    if (!dateToCompare || !date) {
      throw new Error(FormatDistanceStrictPipe.NO_ARGS_ERROR);
    }
    return formatDistanceStrict(
      dateToCompare,
      date,
      calculateLocale(options, this.config)
    );
  }
}
