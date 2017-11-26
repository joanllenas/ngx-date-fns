import {Pipe, PipeTransform} from '@angular/core';
import * as startOfISOYearNs from 'date-fns/start_of_iso_year';
const startOfISOYear = startOfISOYearNs;

@Pipe({ name: 'dfnsStartOfISOYear' })
export class StartOfISOYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsStartOfISOYear: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(StartOfISOYearPipe.NO_ARGS_ERROR);
    }
    return startOfISOYear(date);
  }
}
