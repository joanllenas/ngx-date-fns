import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { differenceInCalendarDays } from 'date-fns';

@Pipe({ name: 'dfnsDifferenceInCalendarDays' })
export class DifferenceInCalendarDaysPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsDifferenceInCalendarDays: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (isInvalidDate(dateLeft) || isInvalidDate(dateRight)) {
      throw new Error(DifferenceInCalendarDaysPipe.NO_ARGS_ERROR);
    }
    return differenceInCalendarDays(dateLeft, dateRight);
  }
}
