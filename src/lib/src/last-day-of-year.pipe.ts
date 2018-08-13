import { Pipe, PipeTransform } from '@angular/core';
import { lastDayOfYear } from 'date-fns';

@Pipe({ name: 'dfnsLastDayOfYear' })
export class LastDayOfYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsLastDayOfYear: missing required arguments';

  transform(date: string | number | Date): Date {
    if (!date) {
      throw new Error(LastDayOfYearPipe.NO_ARGS_ERROR);
    }
    return lastDayOfYear(date);
  }
}
