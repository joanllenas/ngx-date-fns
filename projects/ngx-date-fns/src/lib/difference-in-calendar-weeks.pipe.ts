import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import differenceInCalendarWeeks from 'date-fns/differenceInCalendarWeeks';

@Pipe({ name: 'dfnsDifferenceInCalendarWeeks' })
export class DifferenceInCalendarWeeksPipe implements PipeTransform {
  transform(
    dateLeft: DateFnsInputDate,
    dateRight: DateFnsInputDate,
    options?: {
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): number {
    return differenceInCalendarWeeks(dateLeft, dateRight, options);
  }
}
