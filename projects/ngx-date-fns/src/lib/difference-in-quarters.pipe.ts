import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { differenceInQuarters } from 'date-fns';

@Pipe({ name: 'dfnsDifferenceInQuarters' })
export class DifferenceInQuartersPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsDifferenceInQuarters: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (isInvalidDate(dateLeft) || isInvalidDate(dateRight)) {
      throw new Error(DifferenceInQuartersPipe.NO_ARGS_ERROR);
    }
    return differenceInQuarters(dateLeft, dateRight);
  }
}
