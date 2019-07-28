import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { subSeconds } from 'date-fns';

@Pipe({ name: 'dfnsSubSeconds' })
export class SubSecondsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsSubSeconds: missing required arguments';

  transform(date: Date | string | number, amount: number): Date {
    if (isInvalidDate(date)) {
      throw new Error(SubSecondsPipe.NO_ARGS_ERROR);
    }
    return subSeconds(date, amount || 0);
  }
}
