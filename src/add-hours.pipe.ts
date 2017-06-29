import {Pipe, PipeTransform} from '@angular/core';
import * as addHours from 'date-fns/add_hours';

@Pipe({ name: 'dfnsAddHours' })
export class AddHoursPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsAddHours: missing required arguments';

  transform(
    date: (Date | string | number),
    amount: number
  ): Date {
    if (!date) {
        throw new Error(AddHoursPipe.NO_ARGS_ERROR);
    }
    return addHours(date, amount || 0);
  }
}
