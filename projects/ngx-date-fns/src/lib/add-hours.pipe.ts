import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { addHours } from 'date-fns/addHours';

@Pipe({ name: 'dfnsAddHours', standalone: true })
export class AddHoursPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addHours(date, amount);
  }
}

/**
 * @deprecated Import the standalone `AddHoursPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [AddHoursPipe],
  exports: [AddHoursPipe]
})
export class AddHoursPipeModule {}
