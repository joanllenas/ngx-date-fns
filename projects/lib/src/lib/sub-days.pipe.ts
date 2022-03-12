import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import subDays from 'date-fns/subDays';

@Pipe({ name: 'dfnsSubDays' })
export class SubDaysPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subDays(date, amount);
  }
}

@NgModule({
  declarations: [SubDaysPipe],
  exports: [SubDaysPipe]
})
export class SubDaysPipeModule {}
