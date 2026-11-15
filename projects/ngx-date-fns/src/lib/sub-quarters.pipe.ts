import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { subQuarters } from 'date-fns/subQuarters';

@Pipe({ name: 'dfnsSubQuarters', standalone: true })
export class SubQuartersPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subQuarters(date, amount);
  }
}

/**
 * @deprecated Import the standalone `SubQuartersPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [SubQuartersPipe],
  exports: [SubQuartersPipe]
})
export class SubQuartersPipeModule {}
