import { Pipe, PipeTransform } from '@angular/core';
import { differenceInCalendarISOWeekYears } from 'date-fns';

@Pipe({ name: 'dfnsDifferenceInCalendarISOWeekYears' })
export class DifferenceInCalendarISOWeekYearsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsDifferenceInCalendarISOWeekYears: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (!dateLeft || !dateRight) {
      throw new Error(DifferenceInCalendarISOWeekYearsPipe.NO_ARGS_ERROR);
    }
    return differenceInCalendarISOWeekYears(dateLeft, dateRight);
  }
}
