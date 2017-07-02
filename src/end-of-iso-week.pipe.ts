import {Pipe, PipeTransform} from '@angular/core';
import * as endOfISOWeek from 'date-fns/end_of_iso_week';

@Pipe({ name: 'dfnsEndOfISOWeek' })
export class EndOfISOWeekPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsEndOfISOWeek: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(EndOfISOWeekPipe.NO_ARGS_ERROR);
    }
    return endOfISOWeek(date);
  }
}
