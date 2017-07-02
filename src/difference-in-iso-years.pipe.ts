import {Pipe, PipeTransform} from '@angular/core';
import * as differenceInISOYears from 'date-fns/difference_in_iso_years';

@Pipe({ name: 'dfnsDifferenceInISOYears' })
export class DifferenceInISOYearsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDifferenceInISOYears: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (!dateLeft || !dateRight) {
        throw new Error(DifferenceInISOYearsPipe.NO_ARGS_ERROR);
    }
    return differenceInISOYears(dateLeft, dateRight);
  }
}
