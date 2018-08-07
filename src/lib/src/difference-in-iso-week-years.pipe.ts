import { Pipe, PipeTransform } from '@angular/core';
import { differenceInISOWeekYears } from 'date-fns';

@Pipe({ name: 'dfnsDifferenceInISOWeekYears' })
export class DifferenceInISOWeekYearsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsDifferenceInISOWeekYears: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date,
    options?: Options
  ): number {
    if (!dateLeft || !dateRight) {
      throw new Error(DifferenceInISOWeekYearsPipe.NO_ARGS_ERROR);
    }
    return differenceInISOWeekYears(dateLeft, dateRight, options);
  }
}
