import {Pipe, PipeTransform} from '@angular/core';
import * as endOfYear from 'date-fns/end_of_year';

@Pipe({ name: 'dfnsEndOfYear' })
export class EndOfYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsEndOfYear: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(EndOfYearPipe.NO_ARGS_ERROR);
    }
    return endOfYear(date);
  }
}
