import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { endOfQuarter } from 'date-fns/endOfQuarter';

@Pipe({ name: 'dfnsEndOfQuarter', standalone: true })
export class EndOfQuarterPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfQuarter(date);
  }
}

/**
 * @deprecated Import the standalone `EndOfQuarterPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [EndOfQuarterPipe],
  exports: [EndOfQuarterPipe]
})
export class EndOfQuarterPipeModule {}
