import {Pipe, PipeTransform} from '@angular/core';
import * as addDaysNs from 'date-fns/add_days';
const addDays = addDaysNs;

@Pipe({ name: 'dfnsAddDays' })
export class AddDaysPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsAddDays: missing required arguments';

  transform(
    date: (Date | string | number),
    amount: number
  ): Date {
    if (!date) {
        throw new Error(AddDaysPipe.NO_ARGS_ERROR);
    }
    return addDays(date, amount || 0);
  }
}
