import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { addQuarters } from 'date-fns/addQuarters';

@Pipe({ name: 'dfnsAddQuarters', standalone: true })
export class AddQuartersPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addQuarters(date, amount);
  }
}

/**
 * @deprecated Import the standalone `AddQuartersPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [AddQuartersPipe],
  exports: [AddQuartersPipe]
})
export class AddQuartersPipeModule {}
