import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { lastDayOfQuarter } from 'date-fns/lastDayOfQuarter';

@Pipe({ name: 'dfnsLastDayOfQuarter', standalone: true })
export class LastDayOfQuarterPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return lastDayOfQuarter(date);
  }
}

/**
 * @deprecated Import the standalone `LastDayOfQuarterPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [LastDayOfQuarterPipe],
  exports: [LastDayOfQuarterPipe]
})
export class LastDayOfQuarterPipeModule {}
