import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import addISOWeekYears from 'date-fns/esm/addISOWeekYears';

@Pipe({ name: 'dfnsAddISOWeekYears' })
export class AddISOWeekYearsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addISOWeekYears(date, amount);
  }
}

@NgModule({
  declarations: [AddISOWeekYearsPipe],
  exports: [AddISOWeekYearsPipe]
})
export class AddISOWeekYearsPipeModule {}
