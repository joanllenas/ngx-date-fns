import {Pipe, PipeTransform} from '@angular/core';
import * as addMinutesNs from 'date-fns/add_minutes';
const addMinutes = addMinutesNs;

@Pipe({ name: 'dfnsAddMinutes' })
export class AddMinutesPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsAddMinutes: missing required arguments';

  transform(
    date: (Date | string | number),
    amount: number
  ): Date {
    if (!date) {
        throw new Error(AddMinutesPipe.NO_ARGS_ERROR);
    }
    return addMinutes(date, amount || 0);
  }
}
