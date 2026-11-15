import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { subMilliseconds } from 'date-fns/subMilliseconds';

@Pipe({ name: 'dfnsSubMilliseconds', standalone: true })
export class SubMillisecondsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subMilliseconds(date, amount);
  }
}

/**
 * @deprecated Import the standalone `SubMillisecondsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [SubMillisecondsPipe],
  exports: [SubMillisecondsPipe]
})
export class SubMillisecondsPipeModule {}
