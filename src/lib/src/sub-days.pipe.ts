import {Pipe, PipeTransform} from '@angular/core';
import {subDays} from 'date-fns';


@Pipe({ name: 'dfnsSubDays' })
export class SubDaysPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsSubDays: missing required arguments';

  transform(
    date: (Date | string | number),
    amount: number
  ): Date {
    if (!date) {
        throw new Error(SubDaysPipe.NO_ARGS_ERROR);
    }
    return subDays(date, amount || 0);
  }
}
