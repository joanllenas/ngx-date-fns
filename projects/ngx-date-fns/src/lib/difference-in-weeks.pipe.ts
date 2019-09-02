import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInWeeks from 'date-fns/differenceInWeeks';

@Pipe({ name: 'dfnsDifferenceInWeeks' })
export class DifferenceInWeeksPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInWeeks(dateLeft, dateRight);
  }
}
