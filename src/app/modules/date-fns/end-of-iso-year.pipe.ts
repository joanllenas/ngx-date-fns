import {Pipe, PipeTransform} from '@angular/core';
import * as endOfISOYearNs from 'date-fns/end_of_iso_year';
const endOfISOYear = endOfISOYearNs;

@Pipe({ name: 'dfnsEndOfISOYear' })
export class EndOfISOYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsEndOfISOYear: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(EndOfISOYearPipe.NO_ARGS_ERROR);
    }
    return endOfISOYear(date);
  }
}
