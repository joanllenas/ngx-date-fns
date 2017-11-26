import {Pipe, PipeTransform} from '@angular/core';
import * as lastDayOfYearNs from 'date-fns/last_day_of_year';
const lastDayOfYear = lastDayOfYearNs;

@Pipe({ name: 'dfnsLastDayOfYear' })
export class LastDayOfYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsLastDayOfYear: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(LastDayOfYearPipe.NO_ARGS_ERROR);
    }
    return lastDayOfYear(date);
  }
}
