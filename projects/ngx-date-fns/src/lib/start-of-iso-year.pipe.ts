import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { startOfISOYear } from 'date-fns';

@Pipe({ name: 'dfnsStartOfISOYear' })
export class StartOfISOYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsStartOfISOYear: missing required arguments';

  transform(date: string | number | Date): Date {
    if (isInvalidDate(date)) {
      throw new Error(StartOfISOYearPipe.NO_ARGS_ERROR);
    }
    return startOfISOYear(date);
  }
}
