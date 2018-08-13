import { Pipe, PipeTransform } from '@angular/core';
import { lastDayOfISOWeekYear } from 'date-fns';

@Pipe({ name: 'dfnsLastDayOfISOWeekYear' })
export class LastDayOfISOWeekYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsLastDayOfISOWeekYear: missing required arguments';

  transform(date: string | number | Date): Date {
    if (!date) {
      throw new Error(LastDayOfISOWeekYearPipe.NO_ARGS_ERROR);
    }
    return lastDayOfISOWeekYear(date);
  }
}
