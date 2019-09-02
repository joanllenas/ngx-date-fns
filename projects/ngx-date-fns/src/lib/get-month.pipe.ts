import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getMonth from 'date-fns/getMonth';

@Pipe({ name: 'dfnsGetMonth' })
export class GetMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getMonth(date);
  }
}
