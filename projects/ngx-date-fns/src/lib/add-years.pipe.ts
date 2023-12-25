import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { addYears } from 'date-fns/addYears';

@Pipe({ name: 'dfnsAddYears' })
export class AddYearsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addYears(date, amount);
  }
}

@NgModule({
  declarations: [AddYearsPipe],
  exports: [AddYearsPipe]
})
export class AddYearsPipeModule {}
