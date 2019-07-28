import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { addMilliseconds } from 'date-fns';

@Pipe({ name: 'dfnsAddMilliseconds' })
export class AddMillisecondsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsAddMilliseconds: missing required arguments';

  transform(date: Date | string | number, amount: number): Date {
    if (isInvalidDate(date)) {
      throw new Error(AddMillisecondsPipe.NO_ARGS_ERROR);
    }
    return addMilliseconds(date, amount || 0);
  }
}
