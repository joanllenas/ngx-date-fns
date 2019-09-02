import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInYears from 'date-fns/differenceInYears';

@Pipe({ name: 'dfnsDifferenceInYears' })
export class DifferenceInYearsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInYears(dateLeft, dateRight);
  }
}
