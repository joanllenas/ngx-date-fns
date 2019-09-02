import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import startOfToday from 'date-fns/startOfToday';

@Pipe({ name: 'dfnsStartOfToday' })
export class StartOfTodayPipe implements PipeTransform {
  transform(): Date {
    return startOfToday();
  }
}
