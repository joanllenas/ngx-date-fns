import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import lastDayOfISOWeekYear from 'date-fns/lastDayOfISOWeekYear';

@Pipe({ name: 'dfnsLastDayOfISOWeekYear' })
export class LastDayOfISOWeekYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return lastDayOfISOWeekYear(date);
  }
}
