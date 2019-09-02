import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getDaysInYear from 'date-fns/getDaysInYear';

@Pipe({ name: 'dfnsGetDaysInYear' })
export class GetDaysInYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getDaysInYear(date);
  }
}
