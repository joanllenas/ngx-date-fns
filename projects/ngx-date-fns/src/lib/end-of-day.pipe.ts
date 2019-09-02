import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import endOfDay from 'date-fns/endOfDay';

@Pipe({ name: 'dfnsEndOfDay' })
export class EndOfDayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfDay(date);
  }
}
