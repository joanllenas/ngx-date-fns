import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { startOfQuarter } from 'date-fns';

@Pipe({ name: 'dfnsStartOfQuarter' })
export class StartOfQuarterPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsStartOfQuarter: missing required arguments';

  transform(date: string | number | Date): Date {
    if (isInvalidDate(date)) {
      throw new Error(StartOfQuarterPipe.NO_ARGS_ERROR);
    }
    return startOfQuarter(date);
  }
}
