import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { differenceInSeconds } from 'date-fns';

@Pipe({ name: 'dfnsDifferenceInSeconds' })
export class DifferenceInSecondsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsDifferenceInSeconds: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (isInvalidDate(dateLeft) || isInvalidDate(dateRight)) {
      throw new Error(DifferenceInSecondsPipe.NO_ARGS_ERROR);
    }
    return differenceInSeconds(dateLeft, dateRight);
  }
}
