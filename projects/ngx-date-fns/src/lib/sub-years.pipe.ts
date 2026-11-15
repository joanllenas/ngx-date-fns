import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { subYears } from 'date-fns/subYears';

@Pipe({ name: 'dfnsSubYears', standalone: true })
export class SubYearsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subYears(date, amount);
  }
}

/**
 * @deprecated Import the standalone `SubYearsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [SubYearsPipe],
  exports: [SubYearsPipe]
})
export class SubYearsPipeModule {}
