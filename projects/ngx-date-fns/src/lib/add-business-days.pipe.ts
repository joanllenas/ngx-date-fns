import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { addBusinessDays } from 'date-fns/addBusinessDays';

@Pipe({ name: 'dfnsAddBusinessDays', standalone: true })
export class AddBusinessDaysPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addBusinessDays(date, amount);
  }
}

/**
 * @deprecated Import the standalone `AddBusinessDaysPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [AddBusinessDaysPipe],
  exports: [AddBusinessDaysPipe]
})
export class AddBusinessDaysPipeModule {}
