import { Pipe, PipeTransform } from '@angular/core';
import { formatRelative } from 'date-fns';
import {
  DateFnsConfigurationService,
  calculateLocale,
} from './date-fns-configuration.service';
import { Options } from './types/options';

@Pipe({ name: 'dfnsFormatRelative', pure: false })
export class FormatRelativePipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsFormatRelative: missing required arguments';

  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: string | number | Date,
    baseDate: string | number | Date,
    options?: Options
  ): string {
    if (!date) {
      throw new Error(FormatRelativePipe.NO_ARGS_ERROR);
    }
    return formatRelative(
      date,
      baseDate,
      calculateLocale(options, this.config)
    );
  }
}
