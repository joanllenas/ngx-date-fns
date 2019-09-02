import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import startOfMinute from 'date-fns/startOfMinute';

@Pipe({ name: 'dfnsStartOfMinute' })
export class StartOfMinutePipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfMinute(date);
  }
}
