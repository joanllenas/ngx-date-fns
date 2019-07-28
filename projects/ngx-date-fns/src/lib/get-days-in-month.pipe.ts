import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { getDaysInMonth } from 'date-fns';

@Pipe({ name: 'dfnsGetDaysInMonth' })
export class GetDaysInMonthPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsGetDaysInMonth: missing required arguments';

  transform(date: string | number | Date): number {
    if (isInvalidDate(date)) {
      throw new Error(GetDaysInMonthPipe.NO_ARGS_ERROR);
    }
    return getDaysInMonth(date);
  }
}
