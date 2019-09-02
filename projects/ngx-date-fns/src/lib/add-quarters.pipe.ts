import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import addQuarters from 'date-fns/addQuarters';

@Pipe({ name: 'dfnsAddQuarters' })
export class AddQuartersPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addQuarters(date, amount);
  }
}
