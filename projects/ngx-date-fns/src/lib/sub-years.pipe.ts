import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import subYears from 'date-fns/subYears';

@Pipe({ name: 'dfnsSubYears' })
export class SubYearsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subYears(date, amount);
  }
}
