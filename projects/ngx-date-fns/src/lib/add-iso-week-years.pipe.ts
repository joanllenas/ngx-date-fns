import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { addISOWeekYears } from 'date-fns/addISOWeekYears';

@Pipe({ name: 'dfnsAddISOWeekYears', standalone: true })
export class AddISOWeekYearsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addISOWeekYears(date, amount);
  }
}

/**
 * @deprecated Import the standalone `AddISOWeekYearsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [AddISOWeekYearsPipe],
  exports: [AddISOWeekYearsPipe]
})
export class AddISOWeekYearsPipeModule {}
