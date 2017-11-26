import {Pipe, PipeTransform} from '@angular/core';
import * as endOfMinute from 'date-fns/end_of_minute';

@Pipe({ name: 'dfnsEndOfMinute' })
export class EndOfMinutePipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsEndOfMinute: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(EndOfMinutePipe.NO_ARGS_ERROR);
    }
    return endOfMinute(date);
  }
}
