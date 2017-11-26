import {Pipe, PipeTransform} from '@angular/core';
import * as startOfMonthNs from 'date-fns/start_of_month';
const startOfMonth = startOfMonthNs;

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
