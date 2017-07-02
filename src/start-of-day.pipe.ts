import {Pipe, PipeTransform} from '@angular/core';
import * as startOfDay from 'date-fns/start_of_day';

@Pipe({ name: 'dfnsStartOfDay' })
export class StartOfDayPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsStartOfDay: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(StartOfDayPipe.NO_ARGS_ERROR);
    }
    return startOfDay(date);
  }
}
