import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getISODay from 'date-fns/getISODay';

@Pipe({ name: 'dfnsGetISODay' })
export class GetISODayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getISODay(date);
  }
}
