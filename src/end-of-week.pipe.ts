import {Pipe, PipeTransform} from '@angular/core';
import * as endOfWeek from 'date-fns/end_of_week';

@Pipe({ name: 'dfnsEndOfWeek' })
export class EndOfWeekPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsEndOfWeek: missing required arguments';

  transform(
    date: string | number | Date,
    options?: {
      weekStartsOn?: number
    }
  ): Date {
    if (!date) {
        throw new Error(EndOfWeekPipe.NO_ARGS_ERROR);
    }
    return endOfWeek(date, options);
  }
}
