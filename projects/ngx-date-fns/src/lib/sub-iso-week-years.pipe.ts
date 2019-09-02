import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import subISOWeekYears from 'date-fns/subISOWeekYears';

@Pipe({ name: 'dfnsSubISOWeekYears' })
export class SubISOWeekYearsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subISOWeekYears(date, amount);
  }
}
