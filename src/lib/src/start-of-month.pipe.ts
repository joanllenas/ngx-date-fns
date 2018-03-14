import {Pipe, PipeTransform} from '@angular/core';
import {startOfMonth} from 'date-fns';


@Pipe({ name: 'dfnsStartOfMonth' })
export class StartOfMonthPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsStartOfMonth: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(StartOfMonthPipe.NO_ARGS_ERROR);
    }
    return startOfMonth(date);
  }
}
