import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { addSeconds } from 'date-fns/addSeconds';

@Pipe({ name: 'dfnsAddSeconds', standalone: true })
export class AddSecondsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addSeconds(date, amount);
  }
}

/**
 * @deprecated Import the standalone `AddSecondsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [AddSecondsPipe],
  exports: [AddSecondsPipe]
})
export class AddSecondsPipeModule {}
