import {Pipe, PipeTransform} from '@angular/core';
import {lastDayOfWeek} from 'date-fns';


@Pipe({ name: 'dfnsLastDayOfWeek' })
export class LastDayOfWeekPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsLastDayOfWeek: missing required arguments';

  transform(
    date: string | number | Date,
    options?: {
      weekStartsOn?: number
    }
  ): Date {
    if (!date) {
        throw new Error(LastDayOfWeekPipe.NO_ARGS_ERROR);
    }
    return lastDayOfWeek(date, options);
  }
}
