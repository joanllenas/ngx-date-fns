import {Pipe, PipeTransform} from '@angular/core';
import {lastDayOfMonth} from 'date-fns';


@Pipe({ name: 'dfnsLastDayOfMonth' })
export class LastDayOfMonthPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsLastDayOfMonth: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(LastDayOfMonthPipe.NO_ARGS_ERROR);
    }
    return lastDayOfMonth(date);
  }
}
