import {Pipe, PipeTransform} from '@angular/core';
import * as startOfSecond from 'date-fns/start_of_second';

@Pipe({ name: 'dfnsStartOfSecond' })
export class StartOfSecondPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsStartOfSecond: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(StartOfSecondPipe.NO_ARGS_ERROR);
    }
    return startOfSecond(date);
  }
}
