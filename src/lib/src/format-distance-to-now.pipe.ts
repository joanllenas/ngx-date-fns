import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';
import {
  DateFnsConfigurationService,
  calculateLocale,
} from './date-fns-configuration.service';
import { Options } from './types/options';

@Pipe({ name: 'dfnsFormatDistanceToNow', pure: false })
export class FormatDistanceToNowPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsFormatDistanceToNow: missing required arguments';

  constructor(public config: DateFnsConfigurationService) {}

  transform(date: string | number | Date, options?: Options): string {
    if (!date) {
      throw new Error(FormatDistanceToNowPipe.NO_ARGS_ERROR);
    }
    return formatDistance(
      date,
      new Date(),
      calculateLocale(options, this.config)
    );
  }
}
