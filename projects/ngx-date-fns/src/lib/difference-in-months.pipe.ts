import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { differenceInMonths } from 'date-fns';

@Pipe({ name: 'dfnsDifferenceInMonths' })
export class DifferenceInMonthsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsDifferenceInMonths: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (isInvalidDate(dateLeft) || isInvalidDate(dateRight)) {
      throw new Error(DifferenceInMonthsPipe.NO_ARGS_ERROR);
    }
    return differenceInMonths(dateLeft, dateRight);
  }
}
