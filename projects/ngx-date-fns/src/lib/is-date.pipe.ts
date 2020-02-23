import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isDate from 'date-fns/isDate';

@Pipe({ name: 'dfnsIsDate' })
export class IsDatePipe implements PipeTransform {
  transform(date: any): boolean {
    return isDate(date);
  }
}
