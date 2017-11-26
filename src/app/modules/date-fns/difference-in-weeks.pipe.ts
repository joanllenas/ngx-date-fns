import {Pipe, PipeTransform} from '@angular/core';
import * as differenceInWeeks from 'date-fns/difference_in_weeks';

@Pipe({ name: 'dfnsDifferenceInWeeks' })
export class DifferenceInWeeksPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDifferenceInWeeks: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (!dateLeft || !dateRight) {
        throw new Error(DifferenceInWeeksPipe.NO_ARGS_ERROR);
    }
    return differenceInWeeks(dateLeft, dateRight);
  }
}
