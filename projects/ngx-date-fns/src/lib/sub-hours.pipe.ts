import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import subHours from 'date-fns/subHours';

@Pipe({ name: 'dfnsSubHours' })
export class SubHoursPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subHours(date, amount);
  }
}
