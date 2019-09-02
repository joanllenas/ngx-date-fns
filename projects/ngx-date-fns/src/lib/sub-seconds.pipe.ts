import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import subSeconds from 'date-fns/subSeconds';

@Pipe({ name: 'dfnsSubSeconds' })
export class SubSecondsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subSeconds(date, amount);
  }
}
