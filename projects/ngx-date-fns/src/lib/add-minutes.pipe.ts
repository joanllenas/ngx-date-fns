import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { addMinutes } from 'date-fns/addMinutes';

@Pipe({ name: 'dfnsAddMinutes', standalone: true })
export class AddMinutesPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addMinutes(date, amount);
  }
}

/**
 * @deprecated Import the standalone `AddMinutesPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [AddMinutesPipe],
  exports: [AddMinutesPipe]
})
export class AddMinutesPipeModule {}
