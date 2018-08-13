import { Pipe, PipeTransform } from '@angular/core';
import { format as formatDate } from 'date-fns';
import {
  DateFnsConfigurationService,
  calculateLocale,
} from './date-fns-configuration.service';

@Pipe({ name: 'dfnsFormat', pure: false })
export class FormatPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsFormat: missing required arguments';

  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: string | number | Date,
    format?: string,
    options?: Options
  ): string {
    if (!date) {
      throw new Error(FormatPipe.NO_ARGS_ERROR);
    }
    return formatDate(date, format, calculateLocale(options, this.config));
  }
}
