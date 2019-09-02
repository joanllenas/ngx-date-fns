import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import endOfQuarter from 'date-fns/endOfQuarter';

@Pipe({ name: 'dfnsEndOfQuarter' })
export class EndOfQuarterPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfQuarter(date);
  }
}
