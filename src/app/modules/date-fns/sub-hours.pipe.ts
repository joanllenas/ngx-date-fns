import {Pipe, PipeTransform} from '@angular/core';
import * as subHoursNs from 'date-fns/sub_hours';
const subHours = subHoursNs;

@Pipe({ name: 'dfnsSubHours' })
export class SubHoursPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsSubHours: missing required arguments';

  transform(
    date: (Date | string | number),
    amount: number
  ): Date {
    if (!date) {
        throw new Error(SubHoursPipe.NO_ARGS_ERROR);
    }
    return subHours(date, amount || 0);
  }
}
