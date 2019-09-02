import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getDay from 'date-fns/getDay';

@Pipe({ name: 'dfnsGetDay' })
export class GetDayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getDay(date);
  }
}
