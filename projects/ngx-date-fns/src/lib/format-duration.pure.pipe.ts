import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import formatDuration from 'date-fns/formatDuration';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';

@Pipe({ name: 'dfnsFormatDurationPure' })
export class FormatDurationPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    duration: Duration,
    options?: {
      format?: string[];
      zero?: boolean;
      delimiter?: string;
      locale?: Locale;
    }
  ): string {
    return formatDuration(duration, calculateLocale(options, this.config));
  }
}

@NgModule({
  declarations: [FormatDurationPurePipe],
  exports: [FormatDurationPurePipe]
})
export class FormatDurationPurePipeModule {}
