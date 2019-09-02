import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import endOfHour from 'date-fns/endOfHour';

@Pipe({ name: 'dfnsEndOfHour' })
export class EndOfHourPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfHour(date);
  }
}
