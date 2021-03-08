import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import subISOWeekYears from 'date-fns/esm/subISOWeekYears';

@Pipe({ name: 'dfnsSubISOWeekYears' })
export class SubISOWeekYearsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subISOWeekYears(date, amount);
  }
}

@NgModule({
  declarations: [SubISOWeekYearsPipe],
  exports: [SubISOWeekYearsPipe]
})
export class SubISOWeekYearsPipeModule {}
