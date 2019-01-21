import { Pipe, PipeTransform } from '@angular/core';
import { differenceInCalendarISOWeeks } from 'date-fns';

@Pipe({ name: 'dfnsDifferenceInCalendarISOWeeks' })
export class DifferenceInCalendarISOWeeksPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsDifferenceInCalendarISOWeeks: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (!dateLeft || !dateRight) {
      throw new Error(DifferenceInCalendarISOWeeksPipe.NO_ARGS_ERROR);
    }
    return differenceInCalendarISOWeeks(dateLeft, dateRight);
  }
}
