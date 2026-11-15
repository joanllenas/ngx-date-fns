import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { startOfQuarter } from 'date-fns/startOfQuarter';

@Pipe({ name: 'dfnsStartOfQuarter', standalone: true })
export class StartOfQuarterPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfQuarter(date);
  }
}

/**
 * @deprecated Import the standalone `StartOfQuarterPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [StartOfQuarterPipe],
  exports: [StartOfQuarterPipe]
})
export class StartOfQuarterPipeModule {}
