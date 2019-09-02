import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import endOfSecond from 'date-fns/endOfSecond';

@Pipe({ name: 'dfnsEndOfSecond' })
export class EndOfSecondPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfSecond(date);
  }
}
