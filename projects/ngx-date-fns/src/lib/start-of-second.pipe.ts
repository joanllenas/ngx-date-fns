import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { startOfSecond } from 'date-fns';

@Pipe({ name: 'dfnsStartOfSecond' })
export class StartOfSecondPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsStartOfSecond: missing required arguments';

  transform(date: string | number | Date): Date {
    if (isInvalidDate(date)) {
      throw new Error(StartOfSecondPipe.NO_ARGS_ERROR);
    }
    return startOfSecond(date);
  }
}
