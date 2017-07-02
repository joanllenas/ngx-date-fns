import {Pipe, PipeTransform} from '@angular/core';
import * as endOfDay from 'date-fns/end_of_day';

@Pipe({ name: 'dfnsEndOfDay' })
export class EndOfDayPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsEndOfDay: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(EndOfDayPipe.NO_ARGS_ERROR);
    }
    return endOfDay(date);
  }
}
