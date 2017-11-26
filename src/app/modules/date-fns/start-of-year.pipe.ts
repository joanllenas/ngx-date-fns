import {Pipe, PipeTransform} from '@angular/core';
import * as startOfYearNs from 'date-fns/start_of_year';
const startOfYear = startOfYearNs;

@Pipe({ name: 'dfnsStartOfYear' })
export class StartOfYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsStartOfYear: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(StartOfYearPipe.NO_ARGS_ERROR);
    }
    return startOfYear(date);
  }
}
