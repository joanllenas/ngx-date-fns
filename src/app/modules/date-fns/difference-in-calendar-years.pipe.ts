import {Pipe, PipeTransform} from '@angular/core';
import * as differenceInCalendarYearsNs from 'date-fns/difference_in_calendar_years';
const differenceInCalendarYears = differenceInCalendarYearsNs;

@Pipe({ name: 'dfnsDifferenceInCalendarYears' })
export class DifferenceInCalendarYearsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDifferenceInCalendarYears: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (!dateLeft || !dateRight) {
        throw new Error(DifferenceInCalendarYearsPipe.NO_ARGS_ERROR);
    }
    return differenceInCalendarYears(dateLeft, dateRight);
  }
}
