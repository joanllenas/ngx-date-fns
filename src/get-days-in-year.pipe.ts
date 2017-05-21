import {Pipe, PipeTransform} from '@angular/core';
import * as getDaysInYear from 'date-fns/get_days_in_year';

@Pipe({ name: 'dfnsGetDaysInYear' })
export class GetDaysInYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetDaysInYear: missing required arguments';

  transform(
    date: string | number | Date
  ): number {
    if (!date) {
        throw new Error(GetDaysInYearPipe.NO_ARGS_ERROR);
    }
    return getDaysInYear(date);
  }
}
