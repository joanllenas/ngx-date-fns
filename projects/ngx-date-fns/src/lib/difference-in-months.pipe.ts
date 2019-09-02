import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInMonths from 'date-fns/differenceInMonths';

@Pipe({ name: 'dfnsDifferenceInMonths' })
export class DifferenceInMonthsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInMonths(dateLeft, dateRight);
  }
}
