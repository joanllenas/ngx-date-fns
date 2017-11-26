import {Pipe, PipeTransform} from '@angular/core';
import * as endOfMonthNs from 'date-fns/end_of_month';
const endOfMonth = endOfMonthNs;

@Pipe({ name: 'dfnsEndOfMonth' })
export class EndOfMonthPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsEndOfMonth: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(EndOfMonthPipe.NO_ARGS_ERROR);
    }
    return endOfMonth(date);
  }
}
