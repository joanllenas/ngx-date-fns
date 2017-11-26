import {Pipe, PipeTransform} from '@angular/core';
import * as differenceInMinutes from 'date-fns/difference_in_minutes';

@Pipe({ name: 'dfnsDifferenceInMinutes' })
export class DifferenceInMinutesPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDifferenceInMinutes: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (!dateLeft || !dateRight) {
        throw new Error(DifferenceInMinutesPipe.NO_ARGS_ERROR);
    }
    return differenceInMinutes(dateLeft, dateRight);
  }
}
