import {Pipe, PipeTransform} from '@angular/core';
import * as getISOWeeksInYear from 'date-fns/get_iso_weeks_in_year';

@Pipe({ name: 'dfnsGetISOWeeksInYear' })
export class GetISOWeeksInYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetISOWeeksInYear: missing required arguments';

  transform(
    date: string | number | Date
  ): number {
    if (!date) {
        throw new Error(GetISOWeeksInYearPipe.NO_ARGS_ERROR);
    }
    return getISOWeeksInYear(date);
  }
}
