import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInCalendarQuarters from 'date-fns/differenceInCalendarQuarters';

@Pipe({ name: 'dfnsDifferenceInCalendarQuarters' })
export class DifferenceInCalendarQuartersPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInCalendarQuarters(dateLeft, dateRight);
  }
}
