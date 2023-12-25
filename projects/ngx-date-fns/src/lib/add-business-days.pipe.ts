import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { addBusinessDays } from 'date-fns/addBusinessDays';

@Pipe({ name: 'dfnsAddBusinessDays' })
export class AddBusinessDaysPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addBusinessDays(date, amount);
  }
}

@NgModule({
  declarations: [AddBusinessDaysPipe],
  exports: [AddBusinessDaysPipe]
})
export class AddBusinessDaysPipeModule {}
