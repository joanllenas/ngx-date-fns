import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { addMinutes } from 'date-fns';

@Pipe({ name: 'dfnsAddMinutes' })
export class AddMinutesPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsAddMinutes: missing required arguments';

  transform(date: Date | string | number, amount: number): Date {
    if (isInvalidDate(date)) {
      throw new Error(AddMinutesPipe.NO_ARGS_ERROR);
    }
    return addMinutes(date, amount || 0);
  }
}
