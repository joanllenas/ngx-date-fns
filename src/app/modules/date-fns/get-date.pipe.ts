import {Pipe, PipeTransform} from '@angular/core';
import * as getDateNs from 'date-fns/get_date';
const getDate = getDateNs;

@Pipe({ name: 'dfnsGetDate' })
export class GetDatePipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetDate: missing required arguments';

  transform(
    date: string | number | Date
  ): number {
    if (!date) {
        throw new Error(GetDatePipe.NO_ARGS_ERROR);
    }
    return getDate(date);
  }
}
