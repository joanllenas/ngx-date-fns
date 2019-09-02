import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import startOfSecond from 'date-fns/startOfSecond';

@Pipe({ name: 'dfnsStartOfSecond' })
export class StartOfSecondPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfSecond(date);
  }
}
