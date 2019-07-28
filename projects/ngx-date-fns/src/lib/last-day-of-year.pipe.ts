import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { lastDayOfYear } from 'date-fns';

@Pipe({ name: 'dfnsLastDayOfYear' })
export class LastDayOfYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsLastDayOfYear: missing required arguments';

  transform(date: string | number | Date): Date {
    if (isInvalidDate(date)) {
      throw new Error(LastDayOfYearPipe.NO_ARGS_ERROR);
    }
    return lastDayOfYear(date);
  }
}
