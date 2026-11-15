import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { subWeeks } from 'date-fns/subWeeks';

@Pipe({ name: 'dfnsSubWeeks', standalone: true })
export class SubWeeksPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subWeeks(date, amount);
  }
}

/**
 * @deprecated Import the standalone `SubWeeksPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [SubWeeksPipe],
  exports: [SubWeeksPipe]
})
export class SubWeeksPipeModule {}
