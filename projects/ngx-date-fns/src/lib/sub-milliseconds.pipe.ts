import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import subMilliseconds from 'date-fns/subMilliseconds';

@Pipe({ name: 'dfnsSubMilliseconds' })
export class SubMillisecondsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subMilliseconds(date, amount);
  }
}
