import { Pipe, PipeTransform } from '@angular/core';
import { endOfISOWeekYear } from 'date-fns';

@Pipe({ name: 'dfnsEndOfISOWeekYear' })
export class EndOfISOWeekYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsEndOfISOWeekYear: missing required arguments';

  transform(date: string | number | Date): Date {
    if (!date) {
      throw new Error(EndOfISOWeekYearPipe.NO_ARGS_ERROR);
    }
    return endOfISOWeekYear(date);
  }
}
