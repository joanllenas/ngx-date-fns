import {Pipe, PipeTransform} from '@angular/core';
import {addYears} from 'date-fns';


@Pipe({ name: 'dfnsAddYears' })
export class AddYearsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsAddYears: missing required arguments';

  transform(
    date: (Date | string | number),
    amount: number
  ): Date {
    if (!date) {
        throw new Error(AddYearsPipe.NO_ARGS_ERROR);
    }
    return addYears(date, amount || 0);
  }
}
