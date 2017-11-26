import {Pipe, PipeTransform} from '@angular/core';
import * as differenceInCalendarISOYearsNs from 'date-fns/difference_in_calendar_iso_years';
const differenceInCalendarISOYears = differenceInCalendarISOYearsNs;

@Pipe({ name: 'dfnsDifferenceInCalendarISOYears' })
export class DifferenceInCalendarISOYearsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDifferenceInCalendarISOYears: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (!dateLeft || !dateRight) {
        throw new Error(DifferenceInCalendarISOYearsPipe.NO_ARGS_ERROR);
    }
    return differenceInCalendarISOYears(dateLeft, dateRight);
  }
}
