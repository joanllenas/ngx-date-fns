import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInQuarters from 'date-fns/differenceInQuarters';

@Pipe({ name: 'dfnsDifferenceInQuarters' })
export class DifferenceInQuartersPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInQuarters(dateLeft, dateRight);
  }
}
