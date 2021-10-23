import { NgModule, Pipe, PipeTransform } from '@angular/core';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import isThisWeek from 'date-fns/isThisWeek';

@Pipe({ name: 'dfnsIsThisWeekPure' })
export class IsThisWeekPurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate,
    options?: {
      locale?: Locale;
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): boolean {
    return isThisWeek(date, calculateLocale(options, this.config));
  }
}

@NgModule({
  declarations: [IsThisWeekPurePipe],
  exports: [IsThisWeekPurePipe]
})
export class IsThisWeekPurePipeModule {}
