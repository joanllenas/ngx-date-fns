import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { addWeeks } from 'date-fns/addWeeks';

@Pipe({ name: 'dfnsAddWeeks', standalone: true })
export class AddWeeksPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addWeeks(date, amount);
  }
}

/**
 * @deprecated Import the standalone `AddWeeksPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [AddWeeksPipe],
  exports: [AddWeeksPipe]
})
export class AddWeeksPipeModule {}
