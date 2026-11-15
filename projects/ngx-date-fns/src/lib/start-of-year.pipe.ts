import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { startOfYear } from 'date-fns/startOfYear';

@Pipe({ name: 'dfnsStartOfYear', standalone: true })
export class StartOfYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfYear(date);
  }
}

/**
 * @deprecated Import the standalone `StartOfYearPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [StartOfYearPipe],
  exports: [StartOfYearPipe]
})
export class StartOfYearPipeModule {}
