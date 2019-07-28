import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { getYear } from 'date-fns';

@Pipe({ name: 'dfnsGetYear' })
export class GetYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetYear: missing required arguments';

  transform(date: string | number | Date): number {
    if (isInvalidDate(date)) {
      throw new Error(GetYearPipe.NO_ARGS_ERROR);
    }
    return getYear(date);
  }
}
