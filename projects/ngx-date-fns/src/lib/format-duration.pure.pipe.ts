import { NgModule, Pipe, PipeTransform } from '@angular/core';
import en from 'date-fns/esm/locale/en-US';
type Locale = typeof en;
import formatDuration from 'date-fns/esm/formatDuration';
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
