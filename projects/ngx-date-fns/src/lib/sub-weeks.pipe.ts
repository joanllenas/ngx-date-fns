import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import subWeeks from 'date-fns/subWeeks';

@Pipe({ name: 'dfnsSubWeeks' })
export class SubWeeksPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subWeeks(date, amount);
  }
}
