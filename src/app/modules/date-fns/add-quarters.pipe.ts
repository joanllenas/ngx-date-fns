import {Pipe, PipeTransform} from '@angular/core';
import * as addQuartersNs from 'date-fns/add_quarters';
const addQuarters = addQuartersNs;

@Pipe({ name: 'dfnsAddQuarters' })
export class AddQuartersPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsAddQuarters: missing required arguments';

  transform(
    date: (Date | string | number),
    amount: number
  ): Date {
    if (!date) {
        throw new Error(AddQuartersPipe.NO_ARGS_ERROR);
    }
    return addQuarters(date, amount || 0);
  }
}
