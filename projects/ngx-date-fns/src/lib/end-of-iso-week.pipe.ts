import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import endOfISOWeek from 'date-fns/endOfISOWeek';

@Pipe({ name: 'dfnsEndOfISOWeek' })
export class EndOfISOWeekPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfISOWeek(date);
  }
}
