import {Pipe, PipeTransform} from '@angular/core';
import * as getISODay from 'date-fns/get_iso_day';

@Pipe({ name: 'dfnsGetISODay' })
export class GetISODayPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetISODay: missing required arguments';

  transform(
    date: string | number | Date
  ): number {
    if (!date) {
        throw new Error(GetISODayPipe.NO_ARGS_ERROR);
    }
    return getISODay(date);
  }
}
