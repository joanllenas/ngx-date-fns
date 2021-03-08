import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import addDays from 'date-fns/esm/addDays';

@Pipe({ name: 'dfnsAddDays' })
export class AddDaysPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addDays(date, amount);
  }
}

@NgModule({
  declarations: [AddDaysPipe],
  exports: [AddDaysPipe]
})
export class AddDaysPipeModule {}
