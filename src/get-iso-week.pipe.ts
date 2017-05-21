import {Pipe, PipeTransform} from '@angular/core';
import * as getISOWeek from 'date-fns/get_iso_week';

@Pipe({ name: 'dfnsGetISOWeek' })
export class GetISOWeekPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetISOWeek: missing required arguments';

  transform(
    date: string | number | Date
  ): number {
    if (!date) {
        throw new Error(GetISOWeekPipe.NO_ARGS_ERROR);
    }
    return getISOWeek(date);
  }
}
