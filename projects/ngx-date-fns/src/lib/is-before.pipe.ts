import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isBefore from 'date-fns/isBefore';

@Pipe({ name: 'dfnsIsBefore' })
export class IsBeforePipe implements PipeTransform {
  transform(date: DateFnsInputDate, dateToCompare: DateFnsInputDate): boolean {
    return isBefore(date, dateToCompare);
  }
}
