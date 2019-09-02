import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import differenceInCalendarISOWeeks from 'date-fns/differenceInCalendarISOWeeks';

@Pipe({ name: 'dfnsDifferenceInCalendarISOWeeks' })
export class DifferenceInCalendarISOWeeksPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number {
    return differenceInCalendarISOWeeks(dateLeft, dateRight);
  }
}
