import {Pipe, PipeTransform} from '@angular/core';
import * as getDayOfYear from 'date-fns/get_day_of_year';

@Pipe({ name: 'dfnsGetDayOfYear' })
export class GetDayOfYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetDayOfYear: missing required arguments';

  transform(
    date: string | number | Date
  ): number {
    if (!date) {
        throw new Error(GetDayOfYearPipe.NO_ARGS_ERROR);
    }
    return getDayOfYear(date);
  }
}
