import {Pipe, PipeTransform} from '@angular/core';
import * as subISOYearsNs from 'date-fns/sub_iso_years';
const subISOYears = subISOYearsNs;

@Pipe({ name: 'dfnsSubISOYears' })
export class SubISOYearsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsSubISOYears: missing required arguments';

  transform(
    date: (Date | string | number),
    amount: number
  ): Date {
    if (!date) {
        throw new Error(SubISOYearsPipe.NO_ARGS_ERROR);
    }
    return subISOYears(date, amount || 0);
  }
}
