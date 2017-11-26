import {Pipe, PipeTransform} from '@angular/core';
import * as startOfHour from 'date-fns/start_of_hour';

@Pipe({ name: 'dfnsStartOfHour' })
export class StartOfHourPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsStartOfHour: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(StartOfHourPipe.NO_ARGS_ERROR);
    }
    return startOfHour(date);
  }
}
