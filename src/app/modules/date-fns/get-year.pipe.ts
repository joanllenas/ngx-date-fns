import {Pipe, PipeTransform} from '@angular/core';
import * as getYear from 'date-fns/get_year';

@Pipe({ name: 'dfnsGetYear' })
export class GetYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetYear: missing required arguments';

  transform(
    date: string | number | Date
  ): number {
    if (!date) {
        throw new Error(GetYearPipe.NO_ARGS_ERROR);
    }
    return getYear(date);
  }
}
