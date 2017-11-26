import {Pipe, PipeTransform} from '@angular/core';
import * as subYears from 'date-fns/sub_years';

@Pipe({ name: 'dfnsSubYears' })
export class SubYearsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsSubYears: missing required arguments';

  transform(
    date: (Date | string | number),
    amount: number
  ): Date {
    if (!date) {
        throw new Error(SubYearsPipe.NO_ARGS_ERROR);
    }
    return subYears(date, amount || 0);
  }
}
