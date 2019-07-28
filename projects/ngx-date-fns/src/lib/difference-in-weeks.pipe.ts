import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { differenceInWeeks } from 'date-fns';

@Pipe({ name: 'dfnsDifferenceInWeeks' })
export class DifferenceInWeeksPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsDifferenceInWeeks: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (isInvalidDate(dateLeft) || isInvalidDate(dateRight)) {
      throw new Error(DifferenceInWeeksPipe.NO_ARGS_ERROR);
    }
    return differenceInWeeks(dateLeft, dateRight);
  }
}
