import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { endOfISOWeek } from 'date-fns';

@Pipe({ name: 'dfnsEndOfISOWeek' })
export class EndOfISOWeekPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsEndOfISOWeek: missing required arguments';

  transform(date: string | number | Date): Date {
    if (isInvalidDate(date)) {
      throw new Error(EndOfISOWeekPipe.NO_ARGS_ERROR);
    }
    return endOfISOWeek(date);
  }
}
