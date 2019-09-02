import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInBusinessDays from 'date-fns/differenceInBusinessDays';

@Pipe({ name: 'dfnsDifferenceInBusinessDays' })
export class DifferenceInBusinessDaysPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInBusinessDays(dateLeft, dateRight);
  }
}
