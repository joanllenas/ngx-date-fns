import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { subMinutes } from 'date-fns/subMinutes';

@Pipe({ name: 'dfnsSubMinutes', standalone: true })
export class SubMinutesPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subMinutes(date, amount);
  }
}

/**
 * @deprecated Import the standalone `SubMinutesPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [SubMinutesPipe],
  exports: [SubMinutesPipe]
})
export class SubMinutesPipeModule {}
