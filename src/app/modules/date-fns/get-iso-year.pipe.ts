import {Pipe, PipeTransform} from '@angular/core';
import * as getISOYear from 'date-fns/get_iso_year';

@Pipe({ name: 'dfnsGetISOYear' })
export class GetISOYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetISOYear: missing required arguments';

  transform(
    date: string | number | Date
  ): number {
    if (!date) {
        throw new Error(GetISOYearPipe.NO_ARGS_ERROR);
    }
    return getISOYear(date);
  }
}
