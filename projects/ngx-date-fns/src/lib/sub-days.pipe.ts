import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { subDays } from 'date-fns/subDays';

@Pipe({ name: 'dfnsSubDays', standalone: true })
export class SubDaysPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subDays(date, amount);
  }
}

/**
 * @deprecated Import the standalone `SubDaysPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [SubDaysPipe],
  exports: [SubDaysPipe]
})
export class SubDaysPipeModule {}
