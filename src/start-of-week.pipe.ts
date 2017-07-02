import {Pipe, PipeTransform} from '@angular/core';
import * as startOfWeek from 'date-fns/start_of_week';

@Pipe({ name: 'dfnsStartOfWeek' })
export class StartOfWeekPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsStartOfWeek: missing required arguments';

  transform(
    date: string | number | Date,
    options?: {
      weekStartsOn?: number
    }
  ): Date {
    if (!date) {
        throw new Error(StartOfWeekPipe.NO_ARGS_ERROR);
    }
    return startOfWeek(date, options);
  }
}
