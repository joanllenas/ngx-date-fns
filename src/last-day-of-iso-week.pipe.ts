import {Pipe, PipeTransform} from '@angular/core';
import * as lastDayOfISOWeek from 'date-fns/last_day_of_iso_week';

@Pipe({ name: 'dfnsLastDayOfISOWeek' })
export class LastDayOfISOWeekPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsLastDayOfISOWeek: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(LastDayOfISOWeekPipe.NO_ARGS_ERROR);
    }
    return lastDayOfISOWeek(date);
  }
}
