import { Pipe, PipeTransform } from '@angular/core';
import { differenceInCalendarMonths } from 'date-fns';

@Pipe({ name: 'dfnsDifferenceInCalendarMonths' })
export class DifferenceInCalendarMonthsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsDifferenceInCalendarMonths: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (!dateLeft || !dateRight) {
      throw new Error(DifferenceInCalendarMonthsPipe.NO_ARGS_ERROR);
    }
    return differenceInCalendarMonths(dateLeft, dateRight);
  }
}
