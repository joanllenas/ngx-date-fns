import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import endOfISOWeekYear from 'date-fns/endOfISOWeekYear';

@Pipe({ name: 'dfnsEndOfISOWeekYear' })
export class EndOfISOWeekYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfISOWeekYear(date);
  }
}
