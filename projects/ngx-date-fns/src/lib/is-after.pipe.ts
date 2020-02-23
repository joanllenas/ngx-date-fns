import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isAfter from 'date-fns/isAfter';

@Pipe({ name: 'dfnsIsAfter' })
export class IsAfterPipe implements PipeTransform {
  transform(date: DateFnsInputDate, dateToCompare: DateFnsInputDate): boolean {
    return isAfter(date, dateToCompare);
  }
}
