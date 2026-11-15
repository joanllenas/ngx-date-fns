import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { addYears } from 'date-fns/addYears';

@Pipe({ name: 'dfnsAddYears', standalone: true })
export class AddYearsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addYears(date, amount);
  }
}

/**
 * @deprecated Import the standalone `AddYearsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [AddYearsPipe],
  exports: [AddYearsPipe]
})
export class AddYearsPipeModule {}
