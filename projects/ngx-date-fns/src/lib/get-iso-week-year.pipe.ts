import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getISOWeekYear from 'date-fns/getISOWeekYear';

@Pipe({ name: 'dfnsGetISOWeekYear' })
export class GetISOWeekYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getISOWeekYear(date);
  }
}
