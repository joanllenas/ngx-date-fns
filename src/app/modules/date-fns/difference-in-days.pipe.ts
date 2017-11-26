import {Pipe, PipeTransform} from '@angular/core';
import * as differenceInDaysNs from 'date-fns/difference_in_days';
const differenceInDays = differenceInDaysNs;

@Pipe({ name: 'dfnsDifferenceInDays' })
export class DifferenceInDaysPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDifferenceInDays: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (!dateLeft || !dateRight) {
        throw new Error(DifferenceInDaysPipe.NO_ARGS_ERROR);
    }
    return differenceInDays(dateLeft, dateRight);
  }
}
