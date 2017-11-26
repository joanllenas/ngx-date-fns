import {Pipe, PipeTransform} from '@angular/core';
import * as getDayNs from 'date-fns/get_day';
const getDay = getDayNs;

@Pipe({ name: 'dfnsGetDay' })
export class GetDayPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetDay: missing required arguments';

  transform(
    date: string | number | Date
  ): number {
    if (!date) {
        throw new Error(GetDayPipe.NO_ARGS_ERROR);
    }
    return getDay(date);
  }
}
