import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { lastDayOfISOWeek } from 'date-fns';

@Pipe({ name: 'dfnsLastDayOfISOWeek' })
export class LastDayOfISOWeekPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsLastDayOfISOWeek: missing required arguments';

  transform(date: string | number | Date): Date {
    if (isInvalidDate(date)) {
      throw new Error(LastDayOfISOWeekPipe.NO_ARGS_ERROR);
    }
    return lastDayOfISOWeek(date);
  }
}
