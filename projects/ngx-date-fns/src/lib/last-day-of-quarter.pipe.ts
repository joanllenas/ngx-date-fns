import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import lastDayOfQuarter from 'date-fns/lastDayOfQuarter';

@Pipe({ name: 'dfnsLastDayOfQuarter' })
export class LastDayOfQuarterPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return lastDayOfQuarter(date);
  }
}
