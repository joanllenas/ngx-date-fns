import {Pipe, PipeTransform} from '@angular/core';
import * as getDaysInMonthNs from 'date-fns/get_days_in_month';
const getDaysInMonth = getDaysInMonthNs;

@Pipe({ name: 'dfnsGetDaysInMonth' })
export class GetDaysInMonthPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetDaysInMonth: missing required arguments';

  transform(
    date: string | number | Date
  ): number {
    if (!date) {
        throw new Error(GetDaysInMonthPipe.NO_ARGS_ERROR);
    }
    return getDaysInMonth(date);
  }
}