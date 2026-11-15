import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { addMilliseconds } from 'date-fns/addMilliseconds';

@Pipe({ name: 'dfnsAddMilliseconds', standalone: true })
export class AddMillisecondsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addMilliseconds(date, amount);
  }
}

/**
 * @deprecated Import the standalone `AddMillisecondsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [AddMillisecondsPipe],
  exports: [AddMillisecondsPipe]
})
export class AddMillisecondsPipeModule {}
