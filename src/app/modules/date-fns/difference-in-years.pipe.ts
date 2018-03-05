import {Pipe, PipeTransform} from '@angular/core';
import * as differenceInYearsNs from 'date-fns/difference_in_years';
const differenceInYears = differenceInYearsNs;

@Pipe({ name: 'dfnsDifferenceInYears' })
export class DifferenceInYearsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDifferenceInYears: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (!dateLeft || !dateRight) {
        throw new Error(DifferenceInYearsPipe.NO_ARGS_ERROR);
    }
    return differenceInYears(dateLeft, dateRight);
  }
}
