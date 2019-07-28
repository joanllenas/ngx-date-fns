import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { getDayOfYear } from 'date-fns';

@Pipe({ name: 'dfnsGetDayOfYear' })
export class GetDayOfYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsGetDayOfYear: missing required arguments';

  transform(date: string | number | Date): number {
    if (isInvalidDate(date)) {
      throw new Error(GetDayOfYearPipe.NO_ARGS_ERROR);
    }
    return getDayOfYear(date);
  }
}
