import {Pipe, PipeTransform} from '@angular/core';
import * as startOfMinuteNs from 'date-fns/start_of_minute';
const startOfMinute = startOfMinuteNs;

@Pipe({ name: 'dfnsStartOfMinute' })
export class StartOfMinutePipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsStartOfMinute: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(StartOfMinutePipe.NO_ARGS_ERROR);
    }
    return startOfMinute(date);
  }
}
