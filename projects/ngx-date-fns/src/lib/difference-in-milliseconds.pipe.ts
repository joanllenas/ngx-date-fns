import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { differenceInMilliseconds } from 'date-fns';

@Pipe({ name: 'dfnsDifferenceInMilliseconds' })
export class DifferenceInMillisecondsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsDifferenceInMilliseconds: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (isInvalidDate(dateLeft) || isInvalidDate(dateRight)) {
      throw new Error(DifferenceInMillisecondsPipe.NO_ARGS_ERROR);
    }
    return differenceInMilliseconds(dateLeft, dateRight);
  }
}
