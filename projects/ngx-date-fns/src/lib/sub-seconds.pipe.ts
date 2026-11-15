import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { subSeconds } from 'date-fns/subSeconds';

@Pipe({ name: 'dfnsSubSeconds', standalone: true })
export class SubSecondsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subSeconds(date, amount);
  }
}

/**
 * @deprecated Import the standalone `SubSecondsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [SubSecondsPipe],
  exports: [SubSecondsPipe]
})
export class SubSecondsPipeModule {}
