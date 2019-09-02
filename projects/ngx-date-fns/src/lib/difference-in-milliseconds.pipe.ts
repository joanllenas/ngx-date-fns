import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInMilliseconds from 'date-fns/differenceInMilliseconds';

@Pipe({ name: 'dfnsDifferenceInMilliseconds' })
export class DifferenceInMillisecondsPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInMilliseconds(dateLeft, dateRight);
  }
}
