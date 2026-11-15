import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { subHours } from 'date-fns/subHours';

@Pipe({ name: 'dfnsSubHours', standalone: true })
export class SubHoursPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subHours(date, amount);
  }
}

/**
 * @deprecated Import the standalone `SubHoursPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [SubHoursPipe],
  exports: [SubHoursPipe]
})
export class SubHoursPipeModule {}
