import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { endOfSecond } from 'date-fns';

@Pipe({ name: 'dfnsEndOfSecond' })
export class EndOfSecondPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsEndOfSecond: missing required arguments';

  transform(date: string | number | Date): Date {
    if (isInvalidDate(date)) {
      throw new Error(EndOfSecondPipe.NO_ARGS_ERROR);
    }
    return endOfSecond(date);
  }
}
