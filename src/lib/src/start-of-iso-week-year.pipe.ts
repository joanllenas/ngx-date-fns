import { Pipe, PipeTransform } from '@angular/core';
import { startOfISOWeekYear } from 'date-fns';

@Pipe({ name: 'dfnsStartOfISOWeekYear' })
export class StartOfISOWeekYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsStartOfISOWeekYear: missing required arguments';

  transform(date: string | number | Date): Date {
    if (!date) {
      throw new Error(StartOfISOWeekYearPipe.NO_ARGS_ERROR);
    }
    return startOfISOWeekYear(date);
  }
}
