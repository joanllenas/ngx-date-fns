import {Pipe, PipeTransform} from '@angular/core';
import * as getYearNs from 'date-fns/get_year';
const getYear = getYearNs;

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
