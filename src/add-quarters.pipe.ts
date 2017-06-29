import {Pipe, PipeTransform} from '@angular/core';
import * as addQuarters from 'date-fns/add_quarters';

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
