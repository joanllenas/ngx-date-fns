import {Pipe, PipeTransform} from '@angular/core';
import * as differenceInCalendarDaysNs from 'date-fns/difference_in_calendar_days';
const differenceInCalendarDays = differenceInCalendarDaysNs;

@Pipe({ name: 'dfnsDifferenceInCalendarDays' })
export class DifferenceInCalendarDaysPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDifferenceInCalendarDays: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (!dateLeft || !dateRight) {
        throw new Error(DifferenceInCalendarDaysPipe.NO_ARGS_ERROR);
    }
    return differenceInCalendarDays(dateLeft, dateRight);
  }
}
