import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInCalendarYears from 'date-fns/differenceInCalendarYears';

@Pipe({ name: 'dfnsDifferenceInCalendarYears' })
export class DifferenceInCalendarYearsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInCalendarYears(dateLeft, dateRight);
  }
}
