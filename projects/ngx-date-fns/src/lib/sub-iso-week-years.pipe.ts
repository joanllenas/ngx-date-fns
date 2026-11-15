import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { subISOWeekYears } from 'date-fns/subISOWeekYears';

@Pipe({ name: 'dfnsSubISOWeekYears', standalone: true })
export class SubISOWeekYearsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subISOWeekYears(date, amount);
  }
}

/**
 * @deprecated Import the standalone `SubISOWeekYearsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [SubISOWeekYearsPipe],
  exports: [SubISOWeekYearsPipe]
})
export class SubISOWeekYearsPipeModule {}
