import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { addDays } from 'date-fns/addDays';

@Pipe({ name: 'dfnsAddDays', standalone: true })
export class AddDaysPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addDays(date, amount);
  }
}

/**
 * @deprecated Import the standalone `AddDaysPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [AddDaysPipe],
  exports: [AddDaysPipe]
})
export class AddDaysPipeModule {}
