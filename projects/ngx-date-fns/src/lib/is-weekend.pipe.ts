import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isWeekend from 'date-fns/isWeekend';

@Pipe({ name: 'dfnsIsWeekend' })
export class IsWeekendPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isWeekend(date);
  }
}
