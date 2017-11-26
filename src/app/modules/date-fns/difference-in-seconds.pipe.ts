import {Pipe, PipeTransform} from '@angular/core';
import * as differenceInSecondsNs from 'date-fns/difference_in_seconds';
const differenceInSeconds = differenceInSecondsNs;

@Pipe({ name: 'dfnsDifferenceInSeconds' })
export class DifferenceInSecondsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDifferenceInSeconds: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (!dateLeft || !dateRight) {
        throw new Error(DifferenceInSecondsPipe.NO_ARGS_ERROR);
    }
    return differenceInSeconds(dateLeft, dateRight);
  }
}
