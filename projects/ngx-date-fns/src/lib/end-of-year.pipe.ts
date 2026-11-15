import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { endOfYear } from 'date-fns/endOfYear';

@Pipe({ name: 'dfnsEndOfYear', standalone: true })
export class EndOfYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfYear(date);
  }
}

/**
 * @deprecated Import the standalone `EndOfYearPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [EndOfYearPipe],
  exports: [EndOfYearPipe]
})
export class EndOfYearPipeModule {}
