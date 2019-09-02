import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import endOfYear from 'date-fns/endOfYear';

@Pipe({ name: 'dfnsEndOfYear' })
export class EndOfYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfYear(date);
  }
}
